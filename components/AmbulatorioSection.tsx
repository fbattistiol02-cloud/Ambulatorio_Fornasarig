import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

const facts = [
  { label: "Dove", value: site.address.full },
  { label: "Pazienti", value: site.patients },
  { label: "Visite", value: "Su appuntamento" },
] as const;

export function AmbulatorioSection() {
  return (
    <section id="ambulatorio" className="bg-bone py-20 lg:py-28">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-accent">L&rsquo;ambulatorio</p>
              <h2 className="mt-6 text-[2rem] leading-[1.15] text-deep sm:text-[2.5rem] lg:text-[2.75rem]">
                Un ambulatorio a Percoto, dedicato a cani e gatti.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="text-lg leading-[1.7] text-ink/85 lg:text-xl">
                L&rsquo;Ambulatorio Veterinario della {site.doctor} si trova in{" "}
                {site.address.street}, a {site.address.locality}, nel comune di{" "}
                {site.address.municipality}.
              </p>
              <p className="mt-5 text-ink/70">
                L&rsquo;attività copre la medicina veterinaria di base per cani e
                gatti, la diagnostica per immagini e di laboratorio e gli
                interventi di piccola chirurgia. {site.availability} È il modo
                per dedicare a ogni animale il tempo che la visita richiede.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <dl className="mt-10 border-t border-line-soft">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-col gap-1 border-b border-line-soft py-4 sm:flex-row sm:items-baseline sm:gap-8"
                  >
                    <dt className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted sm:w-28 sm:shrink-0">
                      {fact.label}
                    </dt>
                    <dd className="text-[0.9375rem] text-ink/85">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
