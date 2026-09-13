# Crediti e provenienza delle fotografie

## Principio

Nessuna immagine di questo sito è presentata come la Dott.ssa Fornasarig, come i
locali dell'ambulatorio o come i suoi pazienti. Le fotografie di archivio hanno
un ruolo d'atmosfera; i testi alternativi descrivono ciò che si vede e nulla di
più. Nessuna immagine è generata.

## Fotografie fornite dalla dottoressa — 12 settembre 2026

Fornite tramite il committente per essere inserite nel sito. I file WebP
originali sono stati copiati **senza modifiche né ricompressione**, assegnando
nomi descrittivi. Non vengono attribuiti ad archivi fotografici.

| File in `public/foto/` | Utilizzo | Soggetto | Dimensioni |
| --- | --- | --- | --- |
| `gattino-arancione.webp` | Sfondo continuo della hero, pagina iniziale | Gattino arancione rivolto verso l'obiettivo | 1448 × 1086 |
| `gatto-bianco-nero-sdraiato.webp` | Pagina Medicina felina | Gatto bianco e nero sdraiato accanto a un gradino | 1448 × 1086 |

Queste due fotografie **non vengono ritagliate né corrette nel colore**: sono
approvate così dalla dottoressa. L'unico trattamento che le riguarda è la grana
applicata via CSS a tutti gli slot fotografici del sito, che è una texture
sovrapposta e non modifica i file.

## Fotografie di archivio — 12 settembre 2026

Tutte da Unsplash, tutte **gratuite sotto [Licenza Unsplash](https://unsplash.com/license)**.
Esistenza della pagina, autore e tipo di licenza sono stati verificati uno per
uno il 12 settembre 2026; nessuna è Unsplash+ a pagamento.

| File in `public/foto/` | Pagina | Autore | Pagina originale |
| --- | --- | --- | --- |
| `cane-divano-luce.webp` | Pagina iniziale, fascia cani | belettenoir | https://unsplash.com/photos/NcM8r8uM4s8 |
| `mano-gatto.webp` | Prestazioni | Lucas Doddema | https://unsplash.com/photos/T-nPYpDTVxA |
| `gatto-trasportino.webp` | Guida, sezione trasportino | Oles Borys | https://unsplash.com/photos/OBu_nabEpAw |
| `gatto-sotto-divano.webp` | Guida, sezione segnali | Peyman Shojaei | https://unsplash.com/photos/69jt0MnXL8E |
| `gatto-riposo-luce.webp` | Guida, sezione dolore | Alexander Chupikov | https://unsplash.com/photos/VVecHII1Abs |

Ritagli e gradazione sono definiti in `scripts/scarica-foto.py`, in coordinate
pixel sull'originale: il risultato è riproducibile con un comando e non dipende
da ritocchi manuali non documentati.

**Perché queste immagini sono gradate e quelle della dottoressa no.** Le sue
sono approvate e restano il riferimento: sono le immagini di archivio ad
adattarsi a loro, non il contrario. La gradazione avvicina saturazione e
luminosità ai valori misurati sulle due foto esistenti e aggiunge un viraggio
lieve — ombre verso il verde petrolio, alte luci verso l'avorio.

### Candidate scartate

- `6KUYdFD6HYs` (DL314 Lin) era nella prima selezione. Scartata a immagine
  aperta: dominante fredda lontana dalle foto della dottoressa e steli d'erba
  sugli occhi del gatto, che si legge come animale in difficoltà anziché come
  animale accudito. Sostituita da `T-nPYpDTVxA`.
- Escluse a priori perché Unsplash+ a pagamento: `d7KktajtN6Q`, `QxRBQKGpZZE`,
  `4-BumD3OBnA`, `IgGdwOeSy9A`, `g1GjUP0Lg5k`, `XY8FAdgfCXM`.
- Alternative verificate e non utilizzate: `ymITgrOdv2c` (Andy Luo).

## Fotografie precedenti conservate nel repository

Non più referenziate da alcun componente.

| File | Provenienza documentata | Pagina originale |
| --- | --- | --- |
| `visita-gatto.jpg` | Unsplash, Sueda Güzeldere | https://unsplash.com/photos/BATIVPqWwqw |
| `gatto-in-braccio.jpg` | Unsplash, Werzk Luuuuuuu | https://unsplash.com/photos/tDlo2ZPlQlU |
| `cane-gatto.jpg` | Già presente al commit `72d3637`; autore e provenienza esterna non registrati | — |

## Immagini non fotografiche

- Icone delle prestazioni e sequenza del trasportino: disegnate per questo sito,
  in `components/disegni/`. Sono disegni e non documentano nulla.

## Mappa di Percoto

`components/disegni/MappaPercoto.tsx` disegna strade reali. La geometria viene da
**OpenStreetMap**, licenza **ODbL**, ed è scaricata una volta sola da
`scripts/genera-mappa.py`; la risposta grezza è conservata e versionata in
`scripts/percoto.osm.json`, così ritoccare il disegno non comporta interrogare di
nuovo un servizio pubblico gratuito.

L'attribuzione «© OpenStreetMap contributors», con collegamento alla pagina della
licenza, è resa visibile sotto la mappa. **Non è opzionale e non va nascosta**:
è la condizione d'uso dei dati.

Il disegno — spessori, colori, tipografia, scelta di che cosa etichettare — è
nostro. La mappa è quindi insieme vera e su misura: sostituisce il diagramma
astratto della prima versione, che non era in scala, non diceva nulla e sembrava
un'immagine generata.

La posizione dell'ambulatorio viene dalla geocodifica Nominatim dell'indirizzo
(45.9742348, 13.3188538). Le fonti confermano anche il CAP 33050 e la distanza da
Piazza della Vittoria, 267 metri.
- Anteprime Open Graph: generate da `lib/og.tsx`, solo tipografia e gradiente.
- `public/qr-whatsapp.svg`: generato da `scripts/genera-qr.py`, file statico.

## Sostituzioni future

Aggiornare insieme percorso, proporzioni, ritaglio responsive, testo
alternativo e provenienza. Non presentare fotografie di archivio o immagini
generate come ritratti della professionista, dei locali o dei suoi pazienti.
