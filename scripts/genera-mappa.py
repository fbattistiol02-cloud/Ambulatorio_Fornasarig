#!/usr/bin/env python3
"""
Genera i dati della mappa di Percoto a partire da OpenStreetMap.

Il risultato è `components/disegni/percoto.dati.ts`, un modulo generato che
contiene i tracciati delle strade, le etichette e i due punti notevoli. Il
disegno vero e proprio — colori, spessori, tipografia — sta nel componente
`MappaPercoto.tsx`, così la mappa eredita la palette del sito invece di avere
colori propri congelati in un file.

Perché i dati e non le piastrelle già disegnate: la policy di
tile.openstreetmap.org non consente di scaricare e conservare le piastrelle.
I *dati* OSM sono invece liberamente riutilizzabili sotto ODbL, a condizione di
attribuirli. L'attribuzione «© OpenStreetMap contributors» è resa visibile dal
componente e non è opzionale.

Lo script si lancia a mano e non fa parte della build: nessuna chiamata di rete
in fase di compilazione o nel browser.

Uso:
    python3 scripts/genera-mappa.py
"""

from __future__ import annotations

import json
import math
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

# Indirizzo dell'ambulatorio, geocodificato con Nominatim il 12 settembre 2026:
# «7, Via Guglielmo Marconi, Percoto, Pavia di Udine, Udine,
#  Friuli-Venezia Giulia, 33050, Italia».
AMBULATORIO = (45.9742348, 13.3188538)

# Piazza della Vittoria: il centro del paese, a circa 270 m dall'ambulatorio.
# È il riferimento citato nel testo della pagina contatti.
CENTRO = (45.97434, 13.32230)

# Inquadratura, in metri sul terreno. Larga abbastanza da contenere entrambi i
# punti con respiro, stretta abbastanza da restare leggibile.
LARGHEZZA = 700
ALTEZZA = 450

# Margine oltre l'inquadratura da cui scaricare i dati: senza, le strade
# finirebbero a mezz'aria appena dentro il bordo invece di uscire dal riquadro.
MARGINE = 160

OVERPASS = "https://overpass-api.de/api/interpreter"
UA = "ambulatorio-fornasarig/1.0 (generazione mappa statica del sito)"

DESTINAZIONE = (
    Path(__file__).resolve().parent.parent
    / "components"
    / "disegni"
    / "percoto.dati.ts"
)

# Risposta grezza di Overpass, conservata accanto allo script e versionata.
# Due motivi: ritoccare il disegno non deve significare interrogare di nuovo un
# servizio pubblico gratuito, e la generazione resta riproducibile anche se un
# domani Overpass è irraggiungibile o il dato a monte cambia.
# Per riscaricare: python3 scripts/genera-mappa.py --aggiorna
CACHE = Path(__file__).resolve().parent / "percoto.osm.json"

# Classi stradali tenute, in ordine di importanza visiva. Tutto il resto viene
# scartato: sentieri e passi carrai aggiungono rumore e nessuna informazione.
CLASSI = {
    "secondary": "principale",
    "tertiary": "principale",
    "unclassified": "secondaria",
    "residential": "secondaria",
    "service": "minore",
    "living_street": "secondaria",
}

R = 6378137.0


def mercatore(lat: float, lon: float) -> tuple[float, float]:
    x = math.radians(lon) * R
    y = math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)) * R
    return x, y


def inverso(x: float, y: float) -> tuple[float, float]:
    lon = math.degrees(x / R)
    lat = math.degrees(2 * math.atan(math.exp(y / R)) - math.pi / 2)
    return lat, lon


# Centro dell'inquadratura: a metà fra ambulatorio e piazza, così nessuno dei
# due finisce schiacciato contro un bordo.
CENTRO_VISTA = (
    (AMBULATORIO[0] + CENTRO[0]) / 2,
    (AMBULATORIO[1] + CENTRO[1]) / 2,
)

# Alla latitudine di Percoto la proiezione di Mercatore dilata le distanze di
# circa 1,44: dividendo per questo fattore le unità del disegno tornano a essere
# metri sul terreno, e il `viewBox` diventa leggibile come «700 × 450 metri».
SEC = 1 / math.cos(math.radians(CENTRO_VISTA[0]))
X0, Y0 = mercatore(*CENTRO_VISTA)


def proietta(lat: float, lon: float) -> tuple[float, float]:
    x, y = mercatore(lat, lon)
    return (
        LARGHEZZA / 2 + (x - X0) / SEC,
        ALTEZZA / 2 - (y - Y0) / SEC,
    )


def riquadro() -> tuple[float, float, float, float]:
    """Riquadro di scarico, in gradi: inquadratura più margine."""
    mx = (LARGHEZZA / 2 + MARGINE) * SEC
    my = (ALTEZZA / 2 + MARGINE) * SEC
    sud, ovest = inverso(X0 - mx, Y0 - my)
    nord, est = inverso(X0 + mx, Y0 + my)
    return sud, ovest, nord, est


def interroga() -> dict:
    sud, ovest, nord, est = riquadro()
    query = (
        f'[out:json][timeout:40];way["highway"]({sud:.6f},{ovest:.6f},'
        f"{nord:.6f},{est:.6f});out geom;"
    )
    url = f"{OVERPASS}?{urllib.parse.urlencode({'data': query})}"
    richiesta = urllib.request.Request(url, headers={"User-Agent": UA})

    # Overpass è un servizio pubblico sotto carico: un 504 capita ed è normale.
    for tentativo in range(3):
        try:
            with urllib.request.urlopen(richiesta, timeout=120) as risposta:
                return json.load(risposta)
        except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError) as errore:
            if tentativo == 2:
                raise
            attesa = 8 * (tentativo + 1)
            print(f"  Overpass non risponde ({errore}); riprovo fra {attesa}s")
            time.sleep(attesa)
    raise RuntimeError("irraggiungibile")


def scarica(aggiorna: bool) -> list[dict]:
    if CACHE.exists() and not aggiorna:
        print(f"uso la copia locale {CACHE.name}")
        return json.loads(CACHE.read_text(encoding="utf-8"))["elements"]

    print("interrogo Overpass …")
    dati = interroga()
    CACHE.write_text(json.dumps(dati, ensure_ascii=False), encoding="utf-8")
    print(f"  salvata la risposta in {CACHE.name}")
    return dati["elements"]


def dentro(p: tuple[float, float], margine: float = 40) -> bool:
    return (
        -margine <= p[0] <= LARGHEZZA + margine
        and -margine <= p[1] <= ALTEZZA + margine
    )


def tracciato(punti: list[tuple[float, float]]) -> str:
    """Polilinea SVG, arrotondata al decimo di metro."""
    pezzi = []
    precedente = None
    for x, y in punti:
        coppia = (round(x, 1), round(y, 1))
        if coppia == precedente:
            continue
        pezzi.append(f"{coppia[0]} {coppia[1]}")
        precedente = coppia
    return "M" + "L".join(pezzi)


def main() -> None:
    elementi = scarica("--aggiorna" in sys.argv)

    strade: list[dict] = []
    # Per ogni nome si tiene il segmento visibile più lungo: è quello su cui
    # l'etichetta ha spazio per stare.
    candidate: dict[str, tuple[float, list[tuple[float, float]]]] = {}

    for elemento in elementi:
        tag = elemento.get("tags", {})
        peso = CLASSI.get(tag.get("highway", ""))
        if not peso:
            continue

        punti = [proietta(n["lat"], n["lon"]) for n in elemento.get("geometry", [])]
        if len(punti) < 2 or not any(dentro(p) for p in punti):
            continue

        lunghezza_tot = sum(
            math.dist(punti[i], punti[i + 1]) for i in range(len(punti) - 1)
        )
        chiuso = math.dist(punti[0], punti[-1]) < 3
        estensione = max(
            max(p[0] for p in punti) - min(p[0] for p in punti),
            max(p[1] for p in punti) - min(p[1] for p in punti),
        )

        # Raccordi e corsie di svincolo: a questa scala sono puntini sparsi che
        # sembrano segnaposto. La rotatoria invece è un'informazione vera e si
        # tiene, ma alleggerita: con il tratto delle strade principali un anello
        # di venti metri si riempie e diventa una macchia.
        if chiuso and estensione < 45:
            peso = "secondaria"
        elif lunghezza_tot < 28:
            continue

        nome = tag.get("name", "")
        strade.append(
            {
                "peso": peso,
                # La via dell'indirizzo viene evidenziata dal componente.
                "indirizzo": nome == "Via Guglielmo Marconi",
                "d": tracciato(punti),
            }
        )

        if nome:
            visibili = [p for p in punti if dentro(p, 0)]
            if len(visibili) >= 2:
                lunghezza = sum(
                    math.dist(visibili[i], visibili[i + 1])
                    for i in range(len(visibili) - 1)
                )
                if nome not in candidate or lunghezza > candidate[nome][0]:
                    candidate[nome] = (lunghezza, visibili)

    ambulatorio = proietta(*AMBULATORIO)
    centro = proietta(*CENTRO)

    def ingombro(
        x: float, y: float, angolo: float, testo: str, corpo: float
    ) -> tuple[float, float, float, float]:
        """Riquadro occupato da un'etichetta ruotata, in metri."""
        mezza = 0.27 * corpo * len(testo)
        mezza_h = corpo * 0.7
        rad = math.radians(angolo)
        dx = abs(math.cos(rad)) * mezza + abs(math.sin(rad)) * mezza_h
        dy = abs(math.sin(rad)) * mezza + abs(math.cos(rad)) * mezza_h
        return x - dx, y - dy, x + dx, y + dy


    def sovrappone(a, b, margine: float = 5) -> bool:
        return (
            a[0] - margine < b[2]
            and b[0] - margine < a[2]
            and a[1] - margine < b[3]
            and b[1] - margine < a[3]
        )

    def dentro_vista(riquadro: tuple[float, float, float, float]) -> bool:
        return (
            riquadro[0] >= 6
            and riquadro[2] <= LARGHEZZA - 6
            and riquadro[1] >= 6
            and riquadro[3] <= ALTEZZA - 6
        )

    def ancora(punti: list[tuple[float, float]], frazione: float):
        """Punto e inclinazione locale a una data frazione della polilinea."""
        indice = min(int(frazione * (len(punti) - 1)), len(punti) - 2)
        prima, dopo = punti[indice], punti[indice + 1]
        angolo = math.degrees(math.atan2(dopo[1] - prima[1], dopo[0] - prima[0]))
        # Il testo non deve mai risultare capovolto.
        if angolo > 90:
            angolo -= 180
        elif angolo < -90:
            angolo += 180
        return ((prima[0] + dopo[0]) / 2, (prima[1] + dopo[1]) / 2), angolo

    # Occupato in partenza: il segnaposto dell'ambulatorio con il suo anello e la
    # sua etichetta, e il cerchio del centro. Nessun nome di via può finirci sopra.
    occupato = [
        (ambulatorio[0] - 24, ambulatorio[1] - 24, ambulatorio[0] + 24, ambulatorio[1] + 24),
        ingombro(ambulatorio[0], ambulatorio[1] + 44, 0, "Ambulatorio", 17),
        (centro[0] - 9, centro[1] - 9, centro[0] + 9, centro[1] + 9),
    ]

    RUOLI = {"Via Guglielmo Marconi": "indirizzo", "Piazza della Vittoria": "centro"}

    def priorita(voce) -> tuple[int, float]:
        nome, (lunghezza, _) = voce
        rango = {"indirizzo": 0, "centro": 1}.get(RUOLI.get(nome, "contesto"), 2)
        return rango, -lunghezza

    etichette = []
    for nome, (lunghezza, punti) in sorted(candidate.items(), key=priorita):
        # Troppo corto perché il nome ci stia sopra senza debordare.
        if lunghezza < 55:
            continue

        ruolo = RUOLI.get(nome, "contesto")
        corpo = 12 if ruolo == "contesto" else 15

        # Il punto di mezzo non è sempre il posto giusto: su Via Marconi cade
        # esattamente sul segnaposto. Si provano più punti lungo il tracciato e
        # si tiene il primo che sta dentro il riquadro e non tocca nulla.
        scelta = None
        ripiego = None
        for frazione in (0.5, 0.28, 0.72, 0.14, 0.86):
            punto, angolo = ancora(punti, frazione)
            riquadro_testo = ingombro(punto[0], punto[1] - 7, angolo, nome, corpo)
            if not dentro_vista(riquadro_testo):
                continue
            if ripiego is None:
                ripiego = (punto, angolo, riquadro_testo)
            if not any(sovrappone(riquadro_testo, altro) for altro in occupato):
                scelta = (punto, angolo, riquadro_testo)
                break

        # Via Marconi e Piazza della Vittoria sono il motivo per cui questa mappa
        # esiste: se nessuna posizione è libera si accetta comunque la migliore
        # disponibile. I nomi di contesto invece si rinunciano volentieri, perché
        # due etichette sovrapposte sono peggio di un'etichetta in meno.
        if scelta is None:
            if ruolo == "contesto" or ripiego is None:
                continue
            scelta = ripiego

        punto, angolo, riquadro_testo = scelta
        occupato.append(riquadro_testo)

        etichette.append(
            {
                "testo": nome,
                "x": round(punto[0], 1),
                "y": round(punto[1], 1),
                "angolo": round(angolo, 1),
                "ruolo": ruolo,
            }
        )

    distanza = math.dist(ambulatorio, centro)

    ordine = {"minore": 0, "secondaria": 1, "principale": 2}
    strade.sort(key=lambda s: (ordine[s["peso"]], s["indirizzo"]))

    contenuto = f"""/**
 * MODULO GENERATO — non modificare a mano.
 * Rigenerare con: python3 scripts/genera-mappa.py
 *
 * Dati stradali © OpenStreetMap contributors, licenza ODbL.
 * L'attribuzione è resa visibile da `MappaPercoto.tsx` ed è obbligatoria.
 *
 * Le coordinate sono metri sul terreno: il `viewBox` misura
 * {LARGHEZZA} × {ALTEZZA} metri attorno al tratto fra l'ambulatorio e
 * Piazza della Vittoria.
 */

export const vista = {{ larghezza: {LARGHEZZA}, altezza: {ALTEZZA} }} as const;

export type PesoStrada = "principale" | "secondaria" | "minore";
export type RuoloEtichetta = "indirizzo" | "centro" | "contesto";

export const strade: {{
  peso: PesoStrada;
  indirizzo: boolean;
  d: string;
}}[] = {json.dumps(strade, ensure_ascii=False, indent=2)};

export const etichette: {{
  testo: string;
  x: number;
  y: number;
  angolo: number;
  ruolo: RuoloEtichetta;
}}[] = {json.dumps(etichette, ensure_ascii=False, indent=2)};

export const ambulatorio = {{ x: {ambulatorio[0]:.1f}, y: {ambulatorio[1]:.1f} }} as const;
export const centroPaese = {{ x: {centro[0]:.1f}, y: {centro[1]:.1f} }} as const;

/** Distanza fra i due punti, in metri, calcolata sulle coordinate reali. */
export const distanzaCentro = {round(distanza)};
"""

    DESTINAZIONE.write_text(contenuto, encoding="utf-8")

    print(f"salvato {DESTINAZIONE.name}")
    print(f"  {len(strade)} tracciati, {len(etichette)} etichette")
    print(f"  ambulatorio ({ambulatorio[0]:.0f}, {ambulatorio[1]:.0f})")
    print(f"  centro paese ({centro[0]:.0f}, {centro[1]:.0f}), distanza {distanza:.0f} m")
    print(f"  {DESTINAZIONE.stat().st_size // 1024} KB")
    for e in sorted(etichette, key=lambda e: e['ruolo']):
        print(f"    {e['ruolo']:10s} {e['testo']}")


if __name__ == "__main__":
    main()
