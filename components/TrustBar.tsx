import { BadgeCheck, Phone, ScanLine, Stethoscope } from "lucide-react";

const items = [
  { icon: BadgeCheck, label: "GPCert Medicina Felina" },
  { icon: ScanLine, label: "Diagnostica per immagini" },
  { icon: Stethoscope, label: "Cani e gatti" },
  { icon: Phone, label: "Su appuntamento" },
] as const;

/**
 * Fascia di credibilità: quattro dati verificabili, nessun numero e nessuna
 * metrica. Resta una barra sottile, non una griglia di riquadri.
 */
export function TrustBar() {
  return (
    <section aria-label="Qualifiche e ambito di attività" className="border-b border-line bg-sand">
      <div className="wrap">
        <ul className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {items.map(({ icon: Icon, label }, index) => (
            <li
              key={label}
              className={[
                "flex items-center gap-3 py-5 lg:justify-center lg:py-6",
                // Filetti interni sul mobile, dove la griglia è a due colonne.
                index % 2 === 1 ? "border-l border-line pl-4 lg:border-l-0 lg:pl-0" : "",
                index < 2 ? "border-b border-line lg:border-b-0" : "",
              ].join(" ")}
            >
              <Icon
                className="size-[1.125rem] shrink-0 text-accent"
                strokeWidth={1.75}
                aria-hidden
              />
              <span className="font-sans text-[0.8125rem] font-medium tracking-[0.01em] text-ink/85 sm:text-sm">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
