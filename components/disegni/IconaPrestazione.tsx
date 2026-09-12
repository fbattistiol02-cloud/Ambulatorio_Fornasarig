import type { ServiceIcon } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Icone delle prestazioni, disegnate per questo sito.
 *
 * Sostituiscono le icone generiche di `lucide-react`, che resta in uso solo per
 * l'interfaccia (frecce, menu, chiusura). Tratto unico da 1.4, estremità
 * arrotondate, stessa griglia 24 × 24 per tutte e quattro.
 *
 * Nessuna icona deve poter essere letta come una sonda o un ecografo: le
 * ecografie non sono fra le prestazioni dell'ambulatorio.
 */

const comune = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Zampa: la visita clinica, senza il luogo comune dello stetoscopio. */
function Visita() {
  return (
    <svg {...comune}>
      <path d="M12 20.8c-2.7 0-4.9-1.8-4.9-4 0-1.8 1.4-2.9 2.5-3.9.9-.8 1.6-1.6 2.4-1.6s1.5.8 2.4 1.6c1.1 1 2.5 2.1 2.5 3.9 0 2.2-2.2 4-4.9 4Z" />
      <ellipse cx="5.9" cy="11.6" rx="1.7" ry="2.2" />
      <ellipse cx="9.7" cy="8.3" rx="1.6" ry="2.3" />
      <ellipse cx="14.3" cy="8.3" rx="1.6" ry="2.3" />
      <ellipse cx="18.1" cy="11.6" rx="1.7" ry="2.2" />
    </svg>
  );
}

/** Lastra con un osso lungo: la radiografia, nominata per quello che è. */
function Radiografia() {
  return (
    <svg {...comune}>
      <rect x="3.2" y="3.6" width="17.6" height="16.8" rx="1.6" />
      <path d="M9.2 14.8 14.8 9.2" strokeWidth="1.8" />
      <circle cx="8" cy="16" r="1.7" />
      <circle cx="16" cy="8" r="1.7" />
    </svg>
  );
}

/** Beuta con il livello del campione: gli esami di laboratorio. */
function Laboratorio() {
  return (
    <svg {...comune}>
      <path d="M9.6 3.4h4.8" />
      <path d="M10.6 3.4v6.1l-3.7 7.9a1.9 1.9 0 0 0 1.7 2.7h6.8a1.9 1.9 0 0 0 1.7-2.7l-3.7-7.9V3.4" />
      <path d="M8.3 15.1h7.4" />
      <circle cx="10.7" cy="17.4" r=".75" />
      <circle cx="13.4" cy="18.1" r=".6" />
    </svg>
  );
}

/** Sutura: la piccola chirurgia, senza bisturi né aghi. */
function Chirurgia() {
  return (
    <svg {...comune}>
      <path d="M3.6 13h16.8" />
      <path d="m7.1 9.3 1.7 7.4" />
      <path d="m11.3 8.9 1.4 8.2" />
      <path d="m15.6 9.4 1.5 7.2" />
    </svg>
  );
}

const disegni: Record<ServiceIcon, () => React.ReactElement> = {
  visita: Visita,
  radiografia: Radiografia,
  laboratorio: Laboratorio,
  chirurgia: Chirurgia,
};

export function IconaPrestazione({
  nome,
  className,
}: {
  nome: ServiceIcon;
  className?: string;
}) {
  const Disegno = disegni[nome];

  return (
    <span aria-hidden className={cn("block size-7", className)}>
      <Disegno />
    </span>
  );
}
