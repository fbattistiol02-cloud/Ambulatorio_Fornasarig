import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

const credentials = [
  { label: "Titolo", value: `${site.role} — ${site.degree}` },
  { label: "Certificazione", value: site.certification },
  { label: "Ordine professionale", value: site.order },
  { label: "Albo", value: site.registration },
] as const;

/**
 * Profilo professionale ridotto all'essenziale: qualifiche verificabili e il
 * modo di lavorare. Nessuna biografia, nessuna fotografia di repertorio
 * spacciata per un ritratto della professionista.
 */
export function ProfileSection() {
  return (
    <section id="profilo" className="bg-sand py-20 lg:py-28">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-accent">Chi visita</p>
              <h2 className="mt-6 text-[2rem] leading-[1.15] text-deep sm:text-[2.5rem] lg:text-[2.75rem]">
                {site.doctor}
              </h2>
              <p className="mt-7 max-w-[34rem] text-lg leading-[1.7] text-ink/80">
                Un ambulatorio di paese lavora su un rapporto diretto: il tempo
                per spiegare che cosa si sta cercando, perché si propone un
                esame e che cosa dicono davvero i risultati.
              </p>
              <p className="mt-5 max-w-[34rem] text-ink/70">
                {site.availability} Le visite si concordano al telefono, così
                ogni appuntamento ha lo spazio che serve.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.12}>
              <dl className="border-t border-line">
                {credentials.map((item) => (
                  <div key={item.label} className="border-b border-line py-5">
                    <dt className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 font-serif text-xl leading-snug text-deep">
                      {item.value}
                    </dd>
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
