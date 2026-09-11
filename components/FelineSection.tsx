import Image from "next/image";

import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

const points = [
  {
    title: "Comportamento e stress",
    body: "Lo stress della visita altera parametri clinici reali: frequenza cardiaca, respiro, pressione, glicemia. Un gatto avvicinato e contenuto con calma restituisce una visita più attendibile.",
  },
  {
    title: "Fisiologia e farmacologia",
    body: "Il gatto metabolizza molti farmaci in modo diverso dal cane. Principi attivi e dosaggi vanno scelti sulla specie, non adattati per proporzione al peso.",
  },
  {
    title: "Patologie della specie",
    body: "Alcune malattie sono tipicamente feline e chiedono un percorso diagnostico costruito sul gatto, dagli esami da richiedere all'ordine in cui interpretarli.",
  },
] as const;

export function FelineSection() {
  return (
    <section id="medicina-felina" className="bg-deep py-20 text-bone lg:py-28">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-accent-warm">La specializzazione</p>
              <h2 className="mt-6 text-[1.875rem] leading-[1.2] text-bone sm:text-[2.375rem] lg:text-[2.75rem]">
                {site.doctor}
                <span className="mt-2 block text-accent-warm">
                  {site.certification}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[38rem] text-lg leading-[1.7] text-bone/85 lg:text-xl">
                Il gatto non è un cane di piccola taglia. Ha una fisiologia, un
                metabolismo e un comportamento propri, e una spiccata tendenza a
                mascherare dolore e segni di malattia: sintomi che in un&rsquo;altra
                specie salterebbero all&rsquo;occhio, nel gatto possono restare
                silenti a lungo.
              </p>
              <p className="mt-5 max-w-[38rem] text-bone/65">
                Per questo la medicina felina richiede una preparazione dedicata.
                Il {site.certification} è una certificazione post-laurea
                specifica sulla medicina del gatto: riguarda il modo di visitare,
                di leggere i parametri clinici e di impostare la terapia tenendo
                conto delle caratteristiche della specie.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-11 space-y-px">
                {points.map((point) => (
                  <li
                    key={point.title}
                    className="border-t border-bone/12 py-6 last:border-b"
                  >
                    <h3 className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-accent-warm">
                      {point.title}
                    </h3>
                    <p className="mt-3 max-w-[36rem] text-[0.9375rem] leading-[1.7] text-bone/70">
                      {point.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <figure>
                <div className="relative aspect-4/5 overflow-hidden rounded-sm">
                  <Image
                    src="/foto/gatto-in-braccio.jpg"
                    alt="Un gatto soriano tenuto in braccio con delicatezza, tranquillo"
                    fill
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="mt-4 border-l border-accent-warm/50 pl-4 text-sm leading-relaxed text-bone/55">
                  Metà del lavoro, con un gatto, è ottenere una visita completa
                  senza trasformarla in un&rsquo;esperienza che il paziente
                  ricorderà male.
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-10 rounded-sm bg-bone/6 p-6 text-[0.9375rem] leading-[1.7] text-bone/75 ring-1 ring-inset ring-bone/12">
                <span className="font-sans font-semibold text-bone">
                  I cani restano una parte centrale dell&rsquo;attività.
                </span>{" "}
                La preparazione in medicina felina si aggiunge alla medicina
                veterinaria generale: non la sostituisce e non la riduce.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
