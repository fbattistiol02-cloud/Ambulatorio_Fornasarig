# Crediti e licenza delle fotografie

Le due fotografie in `public/foto/` provengono da **Unsplash** e sono usate in
base alla [Licenza Unsplash](https://unsplash.com/license): download e uso
gratuiti, anche **commerciali**, senza obbligo di chiedere il permesso.
L'attribuzione non è richiesta ma è buona pratica, e gli autori sono elencati
qui sotto.

| File                   | Soggetto                                                | Autore            | Pagina originale                            |
| ---------------------- | ------------------------------------------------------- | ----------------- | ------------------------------------------- |
| `visita-gatto.jpg`     | Mani guantate durante la visita di un gatto in ambulatorio | Sueda Güzeldere   | https://unsplash.com/photos/BATIVPqWwqw     |
| `gatto-in-braccio.jpg` | Gatto soriano tenuto in braccio, tranquillo              | Werzk Luuuuuuu    | https://unsplash.com/photos/tDlo2ZPlQlU     |

Entrambe sono ritagliate e ricompresse da `scripts/scarica-foto.py`, che
contiene le coordinate esatte del riquadro e rigenera file identici a quelli
versionati.

## Criteri di scelta

- **Nessun volto riconoscibile.** Il sito non mostra ritratti, né reali né
  generati: una foto d'archivio con un volto in primo piano verrebbe letta come
  il ritratto della Dott.ssa Fornasarig, e non lo è.
- **Atto medico reale.** La foto della hero mostra guanti, tavolo da visita e
  contenimento corretto di un gatto: nessuna posa costruita, nessun cucciolo nel
  cestino.
- **Ambiente coerente.** Toni freddi e puliti sul soggetto, che si sposano con
  il verde profondo della velatura senza sembrare un fotomontaggio.

## Attenzione: non sono i locali dell'ambulatorio

Le immagini illustrano **la specie trattata e il tipo di prestazione**, non la
struttura di Percoto. Non aggiungere fotografie di sale visita, attrezzature o
interni presi da archivi: darebbero a intendere che siano quelli
dell'ambulatorio.

## Sostituzione

Appena la Dott.ssa Fornasarig fornisce fotografie proprie basta sovrascrivere i
file mantenendo gli stessi nomi e le stesse proporzioni:

- `visita-gatto.jpg` — quadrato (1:1), soggetto al centro;
- `gatto-in-braccio.jpg` — verticale (4:5).

Il testo alternativo va aggiornato in `components/Hero.tsx` e
`components/FelineSection.tsx`, e questo file va corretto di conseguenza.
