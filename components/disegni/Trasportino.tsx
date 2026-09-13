import { cn } from "@/lib/utils";

/**
 * Sequenza illustrata del trasportino, disegnata per la guida.
 *
 * Sono disegni, non fotografie: non documentano nulla e non hanno bisogno di
 * conferme. Servono dove una fotografia non c'è e dove comunque servirebbe una
 * spiegazione, non un'immagine d'atmosfera.
 *
 * Stessa griglia 80 × 60 e stesso tratto per tutti e quattro i passaggi, così
 * la sequenza si legge come una sequenza.
 */

const comune = {
  viewBox: "0 0 80 60",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Scocca e maniglia: la parte che non cambia da un passaggio all'altro. */
function Scocca() {
  return (
    <>
      <path d="M16 21h48l3 30a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2Z" />
      <path d="M34 21c0-4 2.4-6 6-6s6 2 6 6" />
    </>
  );
}

/** Sportello a sbarre, sulla faccia anteriore. */
function Sportello() {
  return (
    <>
      <rect x="38" y="27" width="22" height="20" rx="2" />
      <path d="M44.5 27.6v18.8M50 27.6v18.8M55.5 27.6v18.8" />
    </>
  );
}

export type PassoTrasportino = "aperto" | "coperta" | "telo" | "auto";

function Aperto() {
  return (
    <svg {...comune}>
      <Scocca />
      {/* Vano vuoto: lo sportello è spalancato di lato, non davanti. */}
      <rect x="38" y="27" width="22" height="20" rx="2" strokeDasharray="2 3" />
      <path d="M62 27.5 71 30v15l-9 2.5Z" />
      <path d="M65 30.6v13.2M68 31.4v11.6" />
      {/* Filo del pavimento: il trasportino sta in casa, non in un ripostiglio. */}
      <path d="M6 53h68" strokeWidth="1" opacity=".45" />
    </svg>
  );
}

function Coperta() {
  return (
    <svg {...comune}>
      <Scocca />
      <Sportello />
      {/* Morbido, dentro: la coperta di casa che porta l'odore conosciuto. */}
      <path d="M18 47c3-2.2 6-2.2 9 0s6 2.2 9 0" />
      <path d="M18 42.5c3-2.2 6-2.2 9 0s6 2.2 9 0" />
    </svg>
  );
}

function Telo() {
  return (
    <svg {...comune}>
      <Scocca />
      <Sportello />
      {/* Telo appoggiato sopra: bordo ondulato che scende sui due lati. */}
      <path d="M9 26c4-4.5 9-6.5 14-6.5h34c5 0 10 2 14 6.5" />
      <path d="M9 26c1.6 1.4 1.6 3.4 0 4.8M23 19.6c1.6 1.6 1.6 3.8 0 5.4M57 19.6c-1.6 1.6-1.6 3.8 0 5.4M71 26c-1.6 1.4-1.6 3.4 0 4.8" />
    </svg>
  );
}

function Auto() {
  return (
    <svg {...comune}>
      {/* Schienale del sedile, appena accennato. */}
      <path d="M8 53V22a5 5 0 0 1 5-5" strokeWidth="1" opacity=".45" />
      <Scocca />
      <Sportello />
      {/* Cintura: il trasportino va fissato, non appoggiato. */}
      <path d="M11 29.5 68 42" strokeWidth="1.8" />
    </svg>
  );
}

const passi: Record<PassoTrasportino, () => React.ReactElement> = {
  aperto: Aperto,
  coperta: Coperta,
  telo: Telo,
  auto: Auto,
};

export function Trasportino({
  passo,
  className,
}: {
  passo: PassoTrasportino;
  className?: string;
}) {
  const Disegno = passi[passo];

  return (
    <span aria-hidden className={cn("block w-20 text-accent", className)}>
      <Disegno />
    </span>
  );
}
