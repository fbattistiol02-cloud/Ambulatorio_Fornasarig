import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { site, whatsappHelp } from "@/lib/site";

/**
 * Pagina iniziale.
 *
 * Non contiene più tutto il sito: è una soglia. Dice chi, che cosa e dove, e
 * apre le tre strade di approfondimento. Ogni contenuto che appartiene a una
 * pagina interna vive lì e non viene ripetuto qui.
 */

const porte = [
  {
    href: "/medicina-felina",
    occhiello: "La certificazione",
    titolo: "Medicina felina",
    azione: "Scopri la medicina felina",
    testo:
      "Il gatto ha una fisiologia, un metabolismo e un comportamento propri, e una spiccata tendenza a mascherare il dolore. Per questo esiste una preparazione dedicata alla medicina del gatto.",
  },
  {
    href: "/prestazioni",
    occhiello: "In ambulatorio",
    titolo: "Prestazioni",
    azione: "Scopri le prestazioni",
    testo:
      "Visite, radiografie ed esami di laboratorio si eseguono qui: per una lastra non è necessario spostare l'animale in un'altra struttura.",
  },
  {
    href: "/guida-gatto",
    occhiello: "Per il proprietario",
    titolo: "Guida per chi ha un gatto",
    azione: "Leggi la guida",
    testo:
      "Il trasportino, i segni che meritano una visita, come arrivare in ambulatorio senza trasformare la giornata in un trauma.",
  },
] as const;

export default function Home() {
  return (
    <>
      <Hero />

      {/* Superficie avorio dopo l'apertura fotografica, come concordato in V1. */}
      <section id="ambulatorio" className="bg-sand py-16 sm:py-20 lg:py-24">
        <div className="wrap">
          <div className="grid gap-9 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow text-accent">L&rsquo;ambulatorio</p>
                <h2 className="mt-6 text-[2.125rem] leading-[1.12] text-deep sm:text-[2.75rem] lg:text-[3.25rem]">
                  <span className="mb-2 block font-sans text-sm font-medium tracking-normal text-muted">
                    Dott.ssa
                  </span>
                  Elena Fornasarig
                </h2>
                <p className="mt-5 text-base text-ink/80">
                  {site.role} · {site.degree} · {site.certification}
                </p>
                <Link
                  href="/medicina-felina"
                  className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                >
                  Profilo e certificazione
                  <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:pt-10">
              <Reveal delay={0.1}>
                <p className="max-w-[34rem] text-lg leading-[1.75] text-ink/85 lg:text-xl">
                  A Percoto, un ambulatorio dedicato alla salute di cani e gatti:
                  visite, radiografie, esami di laboratorio e piccola chirurgia,
                  con una preparazione specifica in medicina felina.
                </p>
                <div className="mt-7 border-t border-line pt-6">
                  <p className="text-base font-medium text-deep">
                    {site.availability}
                  </p>
                  <p className="mt-2 max-w-[32rem] text-base leading-relaxed text-ink/80">
                    Per informazioni e per concordare giorno e orario della
                    visita, scrivici su WhatsApp.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Tre porte verso le pagine interne: una frase vera ciascuna, nessuna scheda. */}
      <section className="bg-bone py-20 lg:py-28" aria-labelledby="approfondimenti">
        <div className="wrap">
          <Reveal>
            <h2 id="approfondimenti" className="sr-only">
              Approfondimenti
            </h2>
            <ol className="grid lg:grid-cols-3 lg:gap-12">
              {porte.map((porta, indice) => (
                <li key={porta.href} className="border-t border-line-soft">
                  <Link
                    href={porta.href}
                    className="group flex h-full flex-col py-8 lg:py-10"
                  >
                    <p className="eyebrow text-accent">{porta.occhiello}</p>
                    <h3 className="mt-5 text-2xl leading-snug text-deep sm:text-[1.75rem]">
                      {porta.titolo}
                    </h3>
                    <p className="mt-3 grow text-[0.9375rem] leading-[1.7] text-ink/70">
                      {porta.testo}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                      {porta.azione}
                      <ArrowUpRight
                        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </span>
                    <span className="sr-only">({indice + 1} di 3)</span>
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/*
        Fascia cane. Entrambe le fotografie della dottoressa ritraggono gatti:
        senza un'immagine canina il sito contraddirebbe ciò che dichiara di fare.
      */}
      <section className="bg-deep py-16 text-bone lg:py-20" aria-labelledby="cani">
        <div className="wrap">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="photo grain relative aspect-3/2">
                  <Image
                    src="/foto/cane-divano-luce.webp"
                    alt="Un cane sdraiato su un divano, attraversato dalla luce che entra da una persiana"
                    fill
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <p className="eyebrow text-accent-warm">Cani e gatti</p>
                <h2
                  id="cani"
                  className="mt-6 text-[1.75rem] leading-[1.2] text-bone sm:text-[2.125rem]"
                >
                  Cura e attenzione anche per il tuo cane.
                </h2>
                <p className="mt-6 text-[1.0625rem] leading-[1.7] text-bone/75">
                  Visite, radiografie, esami di laboratorio e piccola chirurgia
                  sono disponibili anche per il tuo cane. La preparazione in
                  medicina felina affianca la medicina veterinaria generale,
                  dedicata alla salute di cani e gatti.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Chiusura: dove siamo, come si prenota, un'unica azione. */}
      <section
        id="contatti"
        data-contact-end
        className="bg-bone py-20 lg:py-28"
        aria-labelledby="contatti-home"
      >
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow text-accent">Appuntamenti</p>
                <h2
                  id="contatti-home"
                  className="mt-6 text-[2.125rem] leading-[1.12] text-deep sm:text-[2.75rem] lg:text-[3.25rem]"
                >
                  Richiedi un appuntamento.
                </h2>
                <p className="mt-7 max-w-[32rem] text-lg leading-[1.7] text-ink/80">
                  {site.availability} Scrivici su WhatsApp per informazioni e per
                  concordare giorno e orario della visita.
                </p>
                <WhatsAppCTA contesto="generale" className="mt-8 w-full sm:w-auto" />
                <p className="mt-3 max-w-sm text-sm text-muted">
                  {whatsappHelp}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.12}>
                <div className="border-t border-line-soft pt-6">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Indirizzo
                  </p>
                  <p className="mt-2 font-serif text-xl leading-snug text-deep">
                    {site.address.street}
                  </p>
                  <p className="text-[0.9375rem] text-ink/70">
                    {site.address.postalCode} {site.address.locality} —{" "}
                    {site.address.municipality} ({site.address.province})
                  </p>
                  <a
                    href={site.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    <MapPin className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    Come raggiungerci
                  </a>
                  <p className="mt-6 border-t border-line-soft pt-6 text-[0.9375rem] leading-relaxed text-ink/70">
                    Tutti i recapiti, le indicazioni e il modello per il primo
                    messaggio sono nella{" "}
                    <Link
                      href="/contatti"
                      className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                    >
                      pagina contatti
                    </Link>
                    .
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
