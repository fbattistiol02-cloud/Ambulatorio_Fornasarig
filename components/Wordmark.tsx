import { cn } from "@/lib/utils";

type WordmarkProps = {
  size?: "sm" | "md";
  className?: string;
};

/** Marchio blu su superfici chiare, condiviso da header e footer. */
export function Wordmark({ size = "sm", className }: WordmarkProps) {
  return (
    <span className={cn("flex items-stretch gap-3", className)}>
      <span aria-hidden className="w-px shrink-0 bg-action" />
      <span className="flex flex-col justify-center leading-none">
        <span className={cn(
          "font-sans text-[0.625rem] font-semibold uppercase leading-none text-ink",
          size === "sm" ? "tracking-[0.14em]" : "tracking-[0.22em]",
        )}>
          Ambulatorio Veterinario
        </span>
        <span className={cn(
          "mt-1 font-serif leading-none text-heading",
          size === "sm" ? "text-base" : "text-lg",
        )}>
          Dott.ssa Elena Fornasarig
        </span>
      </span>
    </span>
  );
}
