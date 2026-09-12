import { cn } from "@/lib/utils";

/**
 * Diagramma di orientamento per la pagina contatti.
 *
 * **Non è una mappa.** Non disponiamo di un rilievo attendibile delle strade di
 * Percoto, e una mappa disegnata a memoria sarebbe peggio di nessuna mappa: chi
 * la seguisse potrebbe sbagliare strada. Questo è un diagramma dichiaratamente
 * astratto — un punto, una via, la distanza dal centro — accompagnato
 * dall'indirizzo per esteso e dal collegamento alle indicazioni reali.
 */
export function Posizione({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 224"
      fill="none"
      role="img"
      aria-label="Diagramma di orientamento: l'ambulatorio si trova in Via Marconi, a circa 300 metri dal centro di Percoto."
      className={cn("w-full", className)}
    >
      {/* Maglia di fondo, per dare una superficie al diagramma. */}
      <g stroke="currentColor" opacity=".12" strokeWidth="1">
        {[40, 80, 120, 160].map((y) => (
          <path key={y} d={`M12 ${y}h296`} />
        ))}
        {[70, 140, 210, 280].map((x) => (
          <path key={x} d={`M${x} 16v152`} />
        ))}
      </g>

      {/* La via, come asse del diagramma. */}
      <path
        d="M26 148C86 148 118 128 160 112s82-30 134-30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity=".55"
      />

      {/* Il centro del paese. */}
      <g stroke="currentColor" fill="none" strokeWidth="1.6">
        <circle cx="58" cy="146" r="5.5" opacity=".6" />
      </g>
      <text
        x="58"
        y="170"
        textAnchor="middle"
        fill="currentColor"
        fontSize="11"
        opacity=".6"
      >
        Centro di Percoto
      </text>

      {/* La distanza, unico dato numerico del diagramma. Sta sotto a tutto:
          appoggiata all'altezza della via incrocerebbe la curva. */}
      <g stroke="currentColor" strokeWidth="1" opacity=".45">
        <path d="M58 206h156" strokeDasharray="3 4" />
        <path d="M58 201v10M214 201v10" />
      </g>
      <text x="136" y="196" textAnchor="middle" fill="currentColor" fontSize="11" opacity=".6">
        circa 300 m
      </text>

      {/* L'ambulatorio. */}
      <circle cx="214" cy="104" r="9" fill="currentColor" />
      <circle cx="214" cy="104" r="17" stroke="currentColor" strokeWidth="1.4" opacity=".5" />
      <text x="214" y="74" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="600">
        Via Marconi 7/B
      </text>
    </svg>
  );
}
