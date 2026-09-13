import { cn } from "@/lib/utils";

type WordmarkProps = {
  /**
   * `light` per fondi scuri, `dark` per le superfici chiare.
   *
   * `adaptive` è la variante dell'header: scura fino a `xl`, chiara da `xl` in
   * su. Sotto i 1280 px l'header è sempre un blocco chiaro, quindi il marchio
   * non deve mai schiarirsi — è lì che si perdeva sul bianco scorrendo.
   */
  tone?: "light" | "dark" | "adaptive";
  /** Ingrandisce il lockup per footer e sezioni editoriali. */
  size?: "sm" | "md";
  className?: string;
};

/**
 * Marchio tipografico: nessun pittogramma, solo la gerarchia fra la
 * denominazione dell'attività e il nome della professionista, separate da un
 * filetto ambra che è l'unico elemento decorativo del lockup.
 *
 * I colori transitano con la stessa durata dello sfondo dell'header: quando
 * cambiavano di scatto restava una finestra di 300 ms con testo e fondo dello
 * stesso valore, cioè illeggibile.
 */
export function Wordmark({
  tone = "dark",
  size = "sm",
  className,
}: WordmarkProps) {
  const light = tone === "light";
  const adaptive = tone === "adaptive";

  return (
    <span className={cn("flex items-stretch gap-3", className)}>
      <span aria-hidden className="w-px shrink-0 bg-accent/70" />
      <span className="flex flex-col justify-center leading-none">
        <span
          className={cn(
            "font-sans font-semibold uppercase leading-none transition-colors duration-300",
            size === "sm"
              ? "text-[0.625rem] tracking-[0.14em]"
              : "text-[0.625rem] tracking-[0.22em]",
            light && "text-bone/80",
            /*
             * `text-ink` e non `text-muted` sotto `xl`. L'occhiello è a 10 px e
             * il vetro dell'header assume il colore di ciò che scorre sotto:
             * su una sezione verde scura la superficie si abbassa a un grigio
             * chiaro e `text-muted` scende a 3,4:1, sotto la soglia AA. Con
             * `text-ink` il caso peggiore misurato resta sopra 8:1.
             */
            adaptive && "text-ink xl:text-bone/80",
            !light && !adaptive && "text-muted",
          )}
        >
          Ambulatorio Veterinario
        </span>
        <span
          className={cn(
            "mt-1 font-serif leading-none transition-colors duration-300",
            size === "sm" ? "text-base" : "text-lg",
            light && "text-bone",
            adaptive && "text-deep xl:text-bone",
            !light && !adaptive && "text-deep",
          )}
        >
          Dott.ssa Elena Fornasarig
        </span>
      </span>
    </span>
  );
}
