import { cn } from "@/lib/utils";
import {
  ambulatorio,
  centroPaese,
  etichette,
  strade,
  vista,
  type PesoStrada,
} from "./percoto.dati";

/**
 * Mappa di Percoto.
 *
 * Le strade sono reali: geometria scaricata da OpenStreetMap e proiettata in
 * metri sul terreno da `scripts/genera-mappa.py`. Il disegno invece è nostro —
 * spessori, colori e tipografia vengono dalla palette del sito — così la mappa
 * appartiene alla pagina invece di essere un riquadro incollato dentro.
 *
 * Sostituisce il diagramma astratto della prima versione, che non diceva nulla.
 *
 * L'attribuzione a OpenStreetMap è obbligatoria — i dati sono ODbL — e viene
 * resa qui sotto, visibile e non nascosta dietro un'interazione.
 */

/** Spessore in metri: il `viewBox` è in metri, quindi la scala è quella vera. */
const spessore: Record<PesoStrada, number> = {
  principale: 11,
  secondaria: 6.5,
  minore: 3.5,
};

const opacita: Record<PesoStrada, number> = {
  principale: 0.34,
  secondaria: 0.22,
  minore: 0.14,
};

/*
 * Su schermo stretto la mappa si rimpicciolisce e i nomi scendono sotto i
 * cinque pixel. Non si ritaglia — un ritaglio taglierebbe a metà proprio i due
 * nomi che contano — ma si ingrandisce la tipografia: dentro un SVG il corpo è
 * espresso in unità del disegno, quindi scala insieme alla mappa e un valore
 * più alto vale «più grande rispetto alle strade».
 *
 * I nomi di contesto spariscono del tutto: rimpiccioliti sono rumore.
 * Le misure sono scelte perché a 320 px i tre nomi rimasti non si tocchino.
 */
const CORPO_PRINCIPALE = "text-[15px] max-sm:text-[25px]";
const CORPO_SEGNAPOSTO = "text-[17px] max-sm:text-[27px]";

export function MappaPercoto({ className }: { className?: string }) {
  return (
    <figure className={cn("text-deep", className)}>
      <svg
        viewBox={`0 0 ${vista.larghezza} ${vista.altezza}`}
        role="img"
        aria-label="Mappa di Percoto: l'ambulatorio si trova in Via Guglielmo Marconi, che attraversa il paese; Piazza della Vittoria, il centro, è a circa 270 metri verso est."
        className="w-full"
      >
        {/* Strade di contesto. Ordinate dalla più minuta alla più importante
            dal generatore, così le principali restano sopra agli incroci. */}
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {strade.map((strada, indice) =>
            strada.indirizzo ? null : (
              <path
                key={indice}
                d={strada.d}
                className="stroke-deep"
                strokeWidth={spessore[strada.peso]}
                opacity={opacita[strada.peso]}
              />
            ),
          )}

          {/* Via Guglielmo Marconi: è la via dell'indirizzo, quindi è l'unica
              cosa colorata della mappa. */}
          {strade.map((strada, indice) =>
            strada.indirizzo ? (
              <path
                key={`indirizzo-${indice}`}
                d={strada.d}
                className="stroke-accent"
                strokeWidth={12}
                opacity={0.85}
              />
            ) : null,
          )}
        </g>

        {/* Nomi delle vie, ruotati lungo il tracciato come su una mappa vera. */}
        <g className="fill-deep" textAnchor="middle">
          {etichette.map((etichetta) => {
            const contesto = etichetta.ruolo === "contesto";

            return (
              <text
                key={etichetta.testo}
                x={etichetta.x}
                y={etichetta.y}
                transform={`rotate(${etichetta.angolo} ${etichetta.x} ${etichetta.y})`}
                dy={-7}
                className={
                  contesto ? "max-sm:hidden text-[12px]" : CORPO_PRINCIPALE
                }
                fontWeight={contesto ? 400 : 600}
                opacity={contesto ? 0.45 : 0.85}
              >
                {etichetta.testo}
              </text>
            );
          })}
        </g>

        {/* Il centro del paese: cerchio vuoto, subordinato all'ambulatorio. */}
        <circle
          cx={centroPaese.x}
          cy={centroPaese.y}
          r={7}
          className="fill-bone stroke-deep"
          strokeWidth={2.5}
          opacity={0.55}
        />

        {/* L'ambulatorio. Anello largo e punto pieno: è l'unica cosa che il
            lettore deve trovare in mezzo secondo. */}
        <g>
          <circle
            cx={ambulatorio.x}
            cy={ambulatorio.y}
            r={22}
            className="fill-accent"
            opacity={0.12}
          />
          <circle
            cx={ambulatorio.x}
            cy={ambulatorio.y}
            r={22}
            fill="none"
            className="stroke-accent"
            strokeWidth={2}
            opacity={0.55}
          />
          <circle cx={ambulatorio.x} cy={ambulatorio.y} r={10} className="fill-accent" />
          <text
            x={ambulatorio.x}
            y={ambulatorio.y + 44}
            textAnchor="middle"
            className={cn("fill-accent", CORPO_SEGNAPOSTO)}
            fontWeight={600}
          >
            Ambulatorio
          </text>
        </g>
      </svg>

      <figcaption className="mt-4 text-sm leading-relaxed text-muted">
        Dati stradali{" "}
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-line underline-offset-2 transition-colors hover:text-accent hover:decoration-accent/40"
        >
          © OpenStreetMap contributors
        </a>
        . Per il percorso conviene comunque aprire le indicazioni stradali.
      </figcaption>
    </figure>
  );
}
