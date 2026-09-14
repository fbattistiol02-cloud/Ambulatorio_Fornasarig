#!/usr/bin/env python3
"""
Rigenera le fotografie di archivio di `public/foto/` a partire dagli originali.

Le immagini sono già versionate nel repository: questo script serve a
riprodurle in modo identico e verificabile, per esempio per rifare un ritaglio
o ritarare la gradazione.

Le due fotografie fornite dalla Dott.ssa Fornasarig
(`gattino-arancione.webp` e `gatto-bianco-nero-sdraiato.webp`) NON sono
gestite qui e non vanno mai toccate: restano i file originali, bit per bit.

Perché il ritaglio è fatto qui e non con i parametri d'URL di Unsplash: i
parametri imgix (`ar`, `crop`, `fp-*`, `rect`) applicano zoom impliciti che non
corrispondono al riquadro richiesto. Ritagliando in locale su coordinate in
pixel dell'originale il risultato è prevedibile e verificabile.

Perché la gradazione è fatta qui: le due foto della dottoressa sono approvate e
restano invariate, quindi sono loro il riferimento e sono le immagini di
archivio ad adattarsi a loro. Le misure di partenza, sul campione ridotto:

    gattino-arancione          saturazione media 0.33   luminosità media 0.65
    gatto-bianco-nero-sdraiato saturazione media 0.13   luminosità media 0.64

Da qui i valori obiettivo in `TARGET_SAT` e `TARGET_VAL`. La correzione è
volutamente parziale (`FORZA_*`): portare ogni immagine esattamente sul bersaglio
appiattirebbe fotografie nate con luci diverse.

Uso:
    python3 scripts/scarica-foto.py

Richiede Pillow:
    python3 -m pip install Pillow
"""

from __future__ import annotations

import colorsys
import io
import sys
import urllib.request
from pathlib import Path

try:
    from PIL import Image, ImageEnhance
except ImportError:  # pragma: no cover - dipendenza non installata
    sys.exit("Manca Pillow. Installalo con: python3 -m pip install Pillow")

DESTINAZIONE = Path(__file__).resolve().parent.parent / "public" / "foto"

# Bersaglio della gradazione, letto dalle due foto della dottoressa.
TARGET_SAT = 0.26
TARGET_VAL = 0.58

# Quanta parte della distanza dal bersaglio viene effettivamente colmata.
FORZA_SAT = 0.75
FORZA_VAL = 0.55

# Viraggio: ombre verso il verde petrolio dell'identità, alte luci verso
# l'avorio. Tenuto basso: deve unificare, non tingere.
OMBRA = (6, 39, 38)
LUCE = (240, 235, 225)
FORZA_VIRAGGIO = 0.10

# Ogni voce: come scaricare l'originale e quale riquadro estrarne.
# `riquadro` è (sinistra, alto, destra, basso) in pixel dell'originale.
# `slug` è l'identificativo della pagina Unsplash: la provenienza completa è
# registrata in CREDITI-FOTO.md.
FOTO = [
    {
        "nome": "mano-gatto.webp",
        # Lucas Doddema — https://unsplash.com/photos/T-nPYpDTVxA
        "slug": "T-nPYpDTVxA",
        "originale": (4640, 6960),
        # Verticale 4:5: una sola mano e il gatto, nessun volto umano.
        "riquadro": (0, 400, 4640, 6200),
        "uscita": (1280, 1600),
        "qualita": 82,
    },
    {
        "nome": "gatto-trasportino.webp",
        # Oles Borys — https://unsplash.com/photos/OBu_nabEpAw
        "slug": "OBu_nabEpAw",
        "originale": (4557, 6836),
        # Verticale 4:5: si toglie il selciato in basso, restano il gatto e le
        # ruote che rendono riconoscibile il trasportino.
        "riquadro": (0, 0, 4557, 5696),
        "uscita": (1280, 1600),
        "qualita": 82,
    },
    {
        "nome": "gatto-sotto-divano.webp",
        # Peyman Shojaei — https://unsplash.com/photos/69jt0MnXL8E
        "slug": "69jt0MnXL8E",
        "originale": (7461, 4974),
        # Orizzontale 3:2 centrata sul gatto, conservando la luce ambra a
        # sinistra che lega la fotografia all'accento del sito.
        "riquadro": (700, 900, 6700, 4900),
        "uscita": (1800, 1200),
        "qualita": 82,
    },
    {
        "nome": "gatto-riposo-luce.webp",
        # Alexander Chupikov — https://unsplash.com/photos/VVecHII1Abs
        "slug": "VVecHII1Abs",
        "originale": (4000, 6000),
        # Fascia panoramica: l'originale è per metà nero e il gatto occupa una
        # striscia sottile. Il taglio largo lo porta al centro ed elimina il
        # vuoto. Fotografia molto scura in partenza: la luminosità va spinta
        # oltre il limite comune, altrimenti il soggetto non si legge.
        "riquadro": (0, 2300, 4000, 3700),
        "uscita": (1800, 630),
        "qualita": 82,
        "limite_luminosita": 1.9,
    },
]

# Non più referenziate da nessun componente, conservate nel repository.
# Restano qui perché la provenienza resti riproducibile.
FOTO_NON_IN_USO = [
    {
        "nome": "visita-gatto.jpg",
        # Sueda Güzeldere — https://unsplash.com/photos/BATIVPqWwqw
        "url": "https://images.unsplash.com/photo-1733783506192-653df6185a7d?fm=jpg&q=92&w=3538",
        "originale": (3538, 5307),
        "riquadro": (0, 834, 3538, 4372),
        "uscita": (2200, 2200),
        "qualita": 82,
    },
    {
        "nome": "gatto-in-braccio.jpg",
        # Werzk Luuuuuuu — https://unsplash.com/photos/tDlo2ZPlQlU
        "url": "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?fm=jpg&q=88&w=2400",
        "originale": (2400, 1600),
        "riquadro": (710, 0, 1990, 1600),
        "uscita": (1280, 1600),
        "qualita": 84,
    },
]


def misura(immagine: Image.Image) -> tuple[float, float]:
    """Saturazione e luminosità medie su un campione ridotto."""
    campione = immagine.copy()
    campione.thumbnail((260, 260))
    sat = val = 0.0
    pixel = list(campione.getdata())
    for r, g, b in pixel:
        _, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
        sat += s
        val += v
    return sat / len(pixel), val / len(pixel)


def viraggio(immagine: Image.Image) -> Image.Image:
    """Mappa di gradiente a bassa intensità: ombre petrolio, luci avorio."""
    luminanza = immagine.convert("L")
    canali = [
        luminanza.point(
            [round(OMBRA[c] + (LUCE[c] - OMBRA[c]) * i / 255) for i in range(256)]
        )
        for c in range(3)
    ]
    return Image.blend(immagine, Image.merge("RGB", canali), FORZA_VIRAGGIO)


def gradua(immagine: Image.Image, limite_luminosita: float = 1.45) -> Image.Image:
    """Avvicina saturazione e luminosità ai valori delle foto della dottoressa."""
    sat, val = misura(immagine)

    fattore_sat = 1.0 + (TARGET_SAT / sat - 1.0) * FORZA_SAT if sat > 0.01 else 1.0
    fattore_val = 1.0 + (TARGET_VAL / val - 1.0) * FORZA_VAL if val > 0.01 else 1.0
    # Nessuna immagine viene stravolta: oltre questi limiti si perde il carattere
    # della fotografia di partenza.
    fattore_sat = min(max(fattore_sat, 0.55), 1.35)
    fattore_val = min(max(fattore_val, 0.80), limite_luminosita)

    risultato = ImageEnhance.Color(immagine).enhance(fattore_sat)
    risultato = ImageEnhance.Brightness(risultato).enhance(fattore_val)
    risultato = viraggio(risultato)

    dopo = misura(risultato)
    print(
        f"  gradazione  sat {sat:.3f} → {dopo[0]:.3f} (×{fattore_sat:.2f})  "
        f"lum {val:.3f} → {dopo[1]:.3f} (×{fattore_val:.2f})"
    )
    return risultato


def scarica(foto: dict) -> bytes:
    url = foto.get("url") or f"https://unsplash.com/photos/{foto['slug']}/download?force=true"
    richiesta = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(richiesta, timeout=180) as risposta:
        return risposta.read()


def elabora(foto: dict, con_gradazione: bool) -> None:
    print(f"scarico  {foto['nome']} …")
    originale = Image.open(io.BytesIO(scarica(foto))).convert("RGB")

    if originale.size != foto["originale"]:
        sys.exit(
            f"{foto['nome']}: attese dimensioni {foto['originale']}, "
            f"ricevute {originale.size}. Il riquadro non sarebbe più valido."
        )

    finale = originale.crop(foto["riquadro"]).resize(foto["uscita"], Image.LANCZOS)
    if con_gradazione:
        finale = gradua(finale, foto.get("limite_luminosita", 1.45))

    percorso = DESTINAZIONE / foto["nome"]
    finale.save(percorso, quality=foto["qualita"], method=6)
    print(
        f"  salvata {percorso.relative_to(DESTINAZIONE.parent.parent)} "
        f"({percorso.stat().st_size // 1024} KB, {finale.size[0]}×{finale.size[1]})"
    )


def main() -> None:
    DESTINAZIONE.mkdir(parents=True, exist_ok=True)
    for foto in FOTO:
        elabora(foto, con_gradazione=True)


if __name__ == "__main__":
    main()
