import { cn } from "@/lib/utils";

type WordmarkProps = {
  /** `light` per fondi scuri, `dark` per le superfici chiare. */
  tone?: "light" | "dark";
  /** Ingrandisce il lockup per footer e sezioni editoriali. */
  size?: "sm" | "md";
  className?: string;
};

/**
 * Marchio tipografico: nessun pittogramma, solo la gerarchia fra la
 * denominazione dell'attività e il nome della professionista, separate da un
 * filetto ambra che è l'unico elemento decorativo del lockup.
 */
export function Wordmark({
  tone = "dark",
  size = "sm",
  className,
}: WordmarkProps) {
  const light = tone === "light";

  return (
    <span className={cn("flex items-stretch gap-3", className)}>
      <span
        aria-hidden
        className="w-px shrink-0 bg-accent/70"
      />
      <span className="flex flex-col justify-center leading-none">
        <span
          className={cn(
            "font-sans font-semibold uppercase leading-none",
            size === "sm"
              ? "text-[0.625rem] tracking-[0.14em]"
              : "text-[0.625rem] tracking-[0.22em]",
            light ? "text-bone/80" : "text-muted",
          )}
        >
          Ambulatorio Veterinario
        </span>
        <span
          className={cn(
            "mt-1 font-serif leading-none",
            size === "sm" ? "text-base" : "text-lg",
            light ? "text-bone" : "text-deep",
          )}
        >
          Dott.ssa Elena Fornasarig
        </span>
      </span>
    </span>
  );
}
