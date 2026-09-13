import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { credentials, site } from "@/lib/site";

const description =
  `${site.doctor} ha una certificazione post-laurea in medicina felina (GPCert). ` +
  `Perché il gatto richiede un approccio diverso dal cane: stress, fisiologia, ` +
  `farmacologia e patologie della specie. Ambulatorio veterinario a Percoto, Pavia di Udine.`;

export const metadata: Metadata = {
  title: "Medicina felina a Percoto",
  description,
  alternates: { canonical: "/medicina-felina" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: site.name,
    title: "Medicina felina a Percoto | Fornasarig",
    description,
    url: "/medicina-felina",
  },
};

const punti = [
  {
    titolo: "Comportamento e stress",
    testo:
      "Lo stress della visita altera parametri clinici reali: frequenza cardiaca, respiro, pressione, glicemia. Un gatto avvicinato e contenuto con calma restituisce una visita più attendibile, non soltanto più serena.",
  },
  {
    titolo: "Fisiologia e farmacologia",
    testo:
      "Il gatto metabolizza molti farmaci in modo diverso dal cane. Principi attivi e dosaggi vanno scelti sulla specie, non adattati per proporzione al peso: alcune molecole comuni e sicure nel cane, nel gatto non si usano.",
  },
  {
    titolo: "Patologie della specie",
    testo:
      "Alcune malattie sono tipicamente feline e chiedono un percorso diagnostico costruito sul gatto: quali esami richiedere, in che ordine, e come leggerli tenendo conto dei valori di riferimento della specie.",
  },
  {
    titolo: "Il dolore mascherato",
    testo:
      "Il gatto tende a nascondere dolore e malattia. Segni che in un'altra specie salterebbero all'occhio, nel gatto restano silenti a lungo: spesso l'unico indizio è un cambiamento di abitudini che solo chi vive con lui può notare.",
  },
] as const;

/** Domande frequenti: alimentano anche i dati strutturati qui sotto. */
const faq = [
  {
    domanda: "Che cos'è il GPCert in medicina felina?",
    risposta:
      "È un General Practitioner Certificate: una certificazione post-laurea rilasciata da ESVPS nell'ambito del sistema ISVPS. Rappresenta il primo livello di formazione certificata fra la laurea in medicina veterinaria e un diploma europeo di specialità. In Italia il percorso in medicina felina si segue attraverso gli itinerari didattici SCIVAC e si conclude con un esame, a cui si accede solo dopo aver frequentato tutti i moduli.",
  },
  {
    domanda: "Il GPCert è una specializzazione?",
    risposta:
      "No. In Italia il titolo di specialista è riservato a chi possiede un Diploma di Specializzazione o il diploma di un College europeo. Il GPCert è una certificazione che attesta un approfondimento strutturato e verificabile su una singola disciplina.",
  },
  {
    domanda: "Perché il gatto richiede un approccio diverso dal cane?",
    risposta:
      "Perché ha una fisiologia, un metabolismo e un comportamento propri. Lo stress della visita altera parametri clinici reali, molti farmaci vengono metabolizzati in modo diverso e alcune patologie sono tipicamente feline. Il gatto, inoltre, tende a mascherare il dolore.",
  },
  {
    domanda: "L'ambulatorio visita anche i cani?",
    risposta:
      "Sì. La preparazione in medicina felina si aggiunge alla medicina veterinaria generale e non la sostituisce. Visite, radiografie, esami di laboratorio e piccola chirurgia valgono per cani e gatti.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((voce) => ({
    "@type": "Question",
    name: voce.domanda,
    acceptedAnswer: { "@type": "Answer", text: voce.risposta },
  })),
};

export default function MedicinaFelina() {
  return (
    <>
      <PageHeader
        indice={[
          { href: "#profilo", label: "Chi visita" },
          { href: "#gpcert", label: "La certificazione" },
          { href: "#differenze", label: "Le differenze" },
        ]}
        occhiello="Medicina felina"
        luce={{ x: "78%", y: "10%" }}
        titolo={
          <>
            Il gatto non è un cane{" "}
            <span className="block">di piccola taglia.</span>
          </>
        }
        intro="Ha una fisiologia, un metabolismo e un comportamento propri, e una spiccata tendenza a mascherare dolore e segni di malattia. Per questo la medicina felina richiede una preparazione dedicata."
      />

      {/* Identità e credenziali: qui, e non in una pagina biografica a parte. */}
      <section className="bg-sand py-16 lg:py-20" aria-labelledby="profilo">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-accent">Chi visita</p>
                <h2
                  id="profilo"
                  className="mt-5 text-[1.875rem] leading-[1.2] text-deep sm:text-[2.25rem]"
                >
                  {site.doctor}
                </h2>
                <p className="mt-4 max-w-[28rem] text-[1.0625rem] leading-[1.7] text-ink/80">
                  Esercita a Percoto, in provincia di Udine, in un ambulatorio
                  dedicato a cani e gatti.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.12}>
                <dl className="border-t border-line">
                  {credentials.map((voce) => (
                    <div key={voce.label} className="border-b border-line py-5">
                      <dt className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        {voce.label}
                      </dt>
                      <dd className="mt-2 text-lg leading-snug text-deep">
                        {voce.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Che cos'è il GPCert: fatti verificabili, enti nominati per esteso. */}
      <section className="bg-bone py-20 lg:py-28" aria-labelledby="gpcert">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow text-accent">La certificazione</p>
                <h2
                  id="gpcert"
                  className="mt-6 text-[2rem] leading-[1.15] text-deep sm:text-[2.5rem]"
                >
                  Che cos&rsquo;è il GPCert.
                </h2>
                <p className="mt-7 max-w-[38rem] text-lg leading-[1.7] text-ink/85">
                  GPCert sta per <i>General Practitioner Certificate</i>: una
                  certificazione post-laurea rilasciata da ESVPS, la scuola
                  europea di studi veterinari post-laurea, nell&rsquo;ambito del
                  sistema ISVPS. È il primo livello di formazione certificata fra
                  la laurea in medicina veterinaria e un diploma europeo di
                  specialità.
                </p>
                <p className="mt-5 max-w-[38rem] text-ink/70">
                  In Italia il percorso in medicina felina si segue attraverso gli
                  itinerari didattici SCIVAC e si conclude con un esame, al quale
                  si accede solo dopo aver frequentato tutti i moduli previsti.
                  Riguarda il modo di visitare, di leggere i parametri clinici e
                  di impostare la terapia tenendo conto delle caratteristiche
                  della specie.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="note mt-10 max-w-[38rem] text-[0.9375rem] leading-[1.7]">
                  Una precisazione dovuta: il GPCert non è una specializzazione.
                  In Italia il titolo di specialista è riservato a chi possiede un
                  Diploma di Specializzazione o il diploma di un College europeo.
                  Il GPCert attesta un approfondimento strutturato e verificabile
                  su una singola disciplina — nel caso, la medicina del gatto.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.16}>
                <figure>
                  {/* Fotografia fornita dalla dottoressa: invariata, senza gradazione. */}
                  <div className="photo grain relative aspect-4/3">
                    <Image
                      src="/foto/gatto-bianco-nero-sdraiato.webp"
                      alt="Un gatto bianco e nero sdraiato accanto a un gradino"
                      fill
                      sizes="(min-width: 1024px) 34vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <figcaption className="mt-4 border-l border-accent/40 pl-4 text-sm leading-relaxed text-muted">
                    Metà del lavoro, con un gatto, è ottenere una visita completa
                    senza trasformarla in un&rsquo;esperienza che il paziente
                    ricorderà male.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Perché il gatto è diverso. */}
      <section className="bg-deep py-20 text-bone lg:py-28" aria-labelledby="differenze">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <p className="eyebrow text-accent-warm">Le differenze</p>
                  <h2
                    id="differenze"
                    className="mt-6 text-[1.875rem] leading-[1.2] text-bone sm:text-[2.25rem]"
                  >
                    Che cosa cambia, in concreto.
                  </h2>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ol className="ed-list ed-list-dark">
                {punti.map((punto, indice) => (
                  <li key={punto.titolo}>
                    <Reveal delay={indice * 0.06}>
                      <article className="grid grid-cols-[auto_1fr] gap-x-6 py-8 lg:py-10">
                        <p
                          aria-hidden
                          className="font-serif text-2xl leading-none text-bone/25"
                        >
                          {String(indice + 1).padStart(2, "0")}
                        </p>
                        <div>
                          <h3 className="font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-accent-warm">
                            {punto.titolo}
                          </h3>
                          <p className="mt-3 max-w-[36rem] text-[0.9375rem] leading-[1.75] text-bone/70">
                            {punto.testo}
                          </p>
                        </div>
                      </article>
                    </Reveal>
                  </li>
                ))}
              </ol>

              <Reveal delay={0.18}>
                <p className="note note-dark mt-10 max-w-[38rem] text-[0.9375rem] leading-[1.7]">
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

      {/* Rimando alla guida e contatto. */}
      <section
        data-contact-end
        className="bg-bone py-20 lg:py-24"
        aria-labelledby="prossimo"
      >
        <div className="wrap">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="eyebrow text-accent">Continua</p>
                <h2
                  id="prossimo"
                  className="mt-6 text-[1.75rem] leading-[1.2] text-deep sm:text-[2.125rem]"
                >
                  Quasi tutto quello che serve al gatto succede prima della
                  visita.
                </h2>
                <p className="mt-6 max-w-[34rem] text-[1.0625rem] leading-[1.7] text-ink/75">
                  Come abituarlo al trasportino, quali cambiamenti meritano un
                  controllo e come arrivare in ambulatorio senza trasformare la
                  giornata in un trauma.
                </p>
                <Link
                  href="/guida-gatto"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                >
                  Vai alla guida per chi ha un gatto
                  <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
                </Link>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <div className="border-t border-line-soft pt-6">
                  <p className="text-base font-medium text-deep">
                    {site.availability}
                  </p>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/70">
                    Per una visita al gatto, scrivici su WhatsApp.
                  </p>
                  <WhatsAppCTA contesto="gatto" className="mt-5 w-full sm:w-auto" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        // Contenuto costruito da questo file: nessun input esterno.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
