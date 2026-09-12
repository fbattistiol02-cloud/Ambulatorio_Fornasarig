import { FlaskConical, ScanLine, Scissors, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { services, type ServiceIcon } from "@/lib/site";
import { Reveal } from "./Reveal";

const icons: Record<ServiceIcon, LucideIcon> = {
  stethoscope: Stethoscope,
  scan: ScanLine,
  lab: FlaskConical,
  surgery: Scissors,
};

/**
 * Indice editoriale, non griglia di riquadri: una colonna di intestazione che
 * resta ferma e un elenco numerato separato da filetti.
 */
export function ServicesSection() {
  return (
    <section id="prestazioni" className="bg-bone py-20 lg:py-28">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="eyebrow text-accent">Prestazioni</p>
                <h2 className="mt-6 text-[2rem] leading-[1.15] text-deep sm:text-[2.5rem]">
                  Che cosa si fa in ambulatorio.
                </h2>
                <p className="mt-6 max-w-sm text-ink/70">
                  Visite per cani e gatti, radiografie ed esami di laboratorio
                  a supporto del percorso diagnostico. In ambulatorio si
                  eseguono anche interventi di piccola chirurgia.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ol>
              {services.map((service, index) => {
                const Icon = icons[service.icon];

                return (
                  <li key={service.number}>
                    <Reveal delay={index * 0.06}>
                      <article className="group grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 border-t border-line-soft py-8 sm:grid-cols-[auto_auto_1fr] sm:gap-x-7 lg:py-10">
                        <p
                          aria-hidden
                          className="font-serif text-2xl leading-none text-line transition-colors duration-300 group-hover:text-accent/60 sm:text-[1.75rem]"
                        >
                          {service.number}
                        </p>

                        <Icon
                          className="size-6 shrink-0 text-accent sm:mt-0.5"
                          strokeWidth={1.5}
                          aria-hidden
                        />

                        <div className="col-span-2 sm:col-span-1">
                          <h3 className="text-2xl leading-snug text-deep sm:text-[1.75rem]">
                            {service.title}
                          </h3>
                          <p className="mt-2 max-w-md text-ink/70">
                            {service.description}
                          </p>
                        </div>
                      </article>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
            <div className="border-t border-line-soft" />
          </div>
        </div>
      </div>
    </section>
  );
}
