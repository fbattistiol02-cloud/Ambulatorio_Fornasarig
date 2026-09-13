import type { Metadata } from "next";
import Image from "next/image";

import { Briciole } from "@/components/Briciole";
import { IconaPrestazione } from "@/components/disegni/IconaPrestazione";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { services, site } from "@/lib/site";

const description =
  `Visite per cani e gatti, radiografie, esami di laboratorio e piccola chirurgia ` +
  `nell'ambulatorio della ${site.doctor} a Percoto, Pavia di Udine. ${site.availability}`;

export const metadata: Metadata = {
  title: "Visite e prestazioni veterinarie a Percoto",
  description,
  keywords: [
    "radiografia veterinaria Udine",
    "esami di laboratorio veterinari Udine",
    "piccola chirurgia veterinaria",
    "visita veterinaria Percoto",
  ],
  alternates: { canonical: "/prestazioni" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: site.name,
    title: "Visite e prestazioni veterinarie a Percoto | Fornasarig",
    description,
    url: "/prestazioni",
  },
};

/** Da portare alla visita: indicazioni dal lato del proprietario, non prassi interne. */
const daPortare = [
  "Il libretto sanitario, se l'animale ne ha uno.",
  "L'elenco dei farmaci in corso, con i dosaggi.",
  "I referti degli esami già eseguiti, anche se vecchi.",
  "Se ti è stato chiesto un campione di feci o urine, raccoglilo di fresco.",
  "Da quando dura il sintomo e che cosa hai notato di diverso.",
] as const;

export default function Prestazioni() {
  return (
    <>
      <PageHeader
        indice={[
          { href: "#elenco", label: "Le prestazioni" },
          { href: "#perimetro", label: "Il perimetro" },
          { href: "#portare", label: "Prima di venire" },
        ]}
        occhiello="Prestazioni"
        luce={{ x: "20%", y: "18%" }}
        titolo="Che cosa si fa in ambulatorio."
        intro="Visite per cani e gatti, radiografie ed esami di laboratorio a supporto del percorso diagnostico. In ambulatorio si eseguono anche interventi di piccola chirurgia."
      />

      <section className="bg-bone py-16 lg:py-24" aria-labelledby="elenco">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <figure>
                    <div className="photo grain relative aspect-4/5">
                      <Image
                        src="/foto/mano-gatto.webp"
                        alt="Una mano appoggiata con delicatezza sulla testa di un gatto rosso, che tiene gli occhi socchiusi"
                        fill
                        sizes="(min-width: 1024px) 30vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-4 text-sm leading-relaxed text-muted">
                      Il modo in cui un animale viene avvicinato e contenuto fa
                      parte della visita, non la precede.
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 id="elenco" className="sr-only">
                Elenco delle prestazioni
              </h2>
              <ol className="ed-list">
                {services.map((servizio, indice) => (
                  <li key={servizio.number}>
                    <Reveal delay={indice * 0.06}>
                      <article className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 py-8 sm:grid-cols-[auto_auto_1fr] sm:gap-x-7 lg:py-10">
                        <p
                          aria-hidden
                          className="font-serif text-2xl leading-none text-line sm:text-[1.75rem]"
                        >
                          {servizio.number}
                        </p>

                        <IconaPrestazione
                          nome={servizio.icon}
                          className="text-accent sm:mt-0.5"
                        />

                        <div className="col-span-2 sm:col-span-1">
                          <h3 className="text-2xl leading-snug text-deep sm:text-[1.75rem]">
                            {servizio.title}
                          </h3>
                          <p className="mt-2 max-w-lg text-ink/80">
                            {servizio.description}
                          </p>
                          <p className="mt-3 max-w-lg text-[0.9375rem] leading-[1.7] text-ink/65">
                            {servizio.detail}
                          </p>
                        </div>
                      </article>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/*
        Perimetro dichiarato. È anche il modo pulito di tenere fuori le
        prestazioni escluse dalla committente: non nominandole mai e dicendo
        con chiarezza che cosa si fa qui.
      */}
      <section className="bg-deep py-16 text-bone lg:py-20" aria-labelledby="perimetro">
        <div className="wrap">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow text-accent-warm">Il perimetro</p>
                <h2
                  id="perimetro"
                  className="mt-6 text-[1.75rem] leading-[1.2] text-bone sm:text-[2.125rem]"
                >
                  Che cosa si fa qui, e che cosa no.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-[1.0625rem] leading-[1.75] text-bone/80">
                  L&rsquo;ambulatorio esegue le prestazioni elencate qui sopra.
                  Per gli accertamenti che richiedono strumentazione o competenze
                  diverse il percorso prosegue altrove, e te lo si dice durante la
                  visita.
                </p>
                <p className="mt-5 text-[0.9375rem] leading-[1.75] text-bone/60">
                  Un elenco onesto è più utile di un elenco lungo: sapere in
                  anticipo che cosa si svolge in ambulatorio evita un viaggio
                  inutile all&rsquo;animale.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        data-contact-end
        className="bg-sand py-16 lg:py-24"
        aria-labelledby="portare"
      >
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-accent">Prima di venire</p>
                <h2
                  id="portare"
                  className="mt-6 text-[1.75rem] leading-[1.2] text-deep sm:text-[2.125rem]"
                >
                  Che cosa portare alla visita.
                </h2>
                <p className="mt-6 max-w-[30rem] text-[1.0625rem] leading-[1.7] text-ink/75">
                  {site.availability} Giorno e orario si concordano su WhatsApp.
                </p>
                <WhatsAppCTA
                  contesto="prestazioni"
                  className="mt-7 w-full sm:w-auto"
                />
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.12}>
                <ul className="ed-list">
                  {daPortare.map((voce) => (
                    <li
                      key={voce}
                      className="py-5 text-[1.0625rem] leading-[1.6] text-ink/85"
                    >
                      {voce}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Briciole pagina="Prestazioni" href="/prestazioni" />
    </>
  );
}
