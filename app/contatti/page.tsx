import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { Briciole } from "@/components/Briciole";
import { ModelloMessaggio } from "@/components/ModelloMessaggio";
import { PageHeader } from "@/components/PageHeader";
import { MappaPercoto } from "@/components/disegni/MappaPercoto";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { nearbyTowns, site } from "@/lib/site";

const description =
  `Ambulatorio veterinario ${site.doctor}: ${site.address.full}. ` +
  `${site.availability} Si scrive su WhatsApp per informazioni e appuntamenti.`;

export const metadata: Metadata = {
  title: "Contatti e come arrivare",
  description,
  keywords: [
    "veterinario Percoto contatti",
    "veterinario Pavia di Udine",
    "ambulatorio veterinario Buttrio",
    "veterinario Palmanova",
  ],
  alternates: { canonical: "/contatti" },
  openGraph: {
    title: `Contatti e come arrivare — ${site.shortName}`,
    description,
    url: "/contatti",
  },
};

export default function Contatti() {
  return (
    <>
      <PageHeader
        indice={[
          { href: "#scrivere", label: "Come si prenota" },
          { href: "#dove", label: "Dove siamo" },
          { href: "#urgenze", label: "Urgenze" },
        ]}
        occhiello="Contatti"
        luce={{ x: "12%", y: "8%" }}
        titolo="Richiedi un appuntamento."
        intro="Si riceve su appuntamento: giorno e orario si concordano scrivendo su WhatsApp. È il canale che la Dott.ssa Fornasarig preferisce per informazioni e prenotazioni."
      />

      {/* Azione principale e modello di messaggio. */}
      <section className="bg-bone py-16 lg:py-24" aria-labelledby="scrivere">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow text-accent">Come si prenota</p>
                <h2
                  id="scrivere"
                  className="mt-6 text-[1.875rem] leading-[1.2] text-deep sm:text-[2.25rem]"
                >
                  Si scrive su WhatsApp.
                </h2>
                <p className="mt-6 max-w-[32rem] text-[1.0625rem] leading-[1.7] text-ink/80">
                  {site.availability} Non esiste un accesso libero: passare senza
                  aver concordato un orario significa, quasi sempre, aspettare o
                  tornare un altro giorno con l&rsquo;animale al seguito.
                </p>
                <WhatsAppCTA
                  contesto="appuntamento"
                  className="mt-8 w-full sm:w-auto"
                />
                <p className="mt-3 text-sm text-muted">
                  Per informazioni e appuntamenti.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-10">
                  <ModelloMessaggio />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.16}>
                <div className="border-t border-line-soft">
                  <div className="flex gap-4 border-b border-line-soft py-6">
                    <MapPin
                      className="mt-1 size-5 shrink-0 text-accent"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        Indirizzo
                      </p>
                      <p className="mt-1.5 font-serif text-xl leading-snug text-deep">
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
                        Come raggiungerci
                        <ArrowUpRight className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 border-b border-line-soft py-6">
                    <Mail
                      className="mt-1 size-5 shrink-0 text-accent"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <div className="min-w-0">
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        Email
                      </p>
                      <a
                        href={site.email.href}
                        className="mt-0.5 block break-words py-2 text-[1.0625rem] text-deep underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/40"
                      >
                        {site.email.label}
                      </a>
                    </div>
                  </div>

                  {/* QR statico: nessun servizio esterno, né in build né nel browser. */}
                  <div className="flex gap-5 py-6">
                    <Image
                      src="/qr-whatsapp.svg"
                      alt="Codice QR che apre la chat WhatsApp dell'ambulatorio"
                      width={104}
                      height={104}
                      className="size-26 shrink-0"
                    />
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        Codice QR
                      </p>
                      <p className="mt-1.5 max-w-[18rem] text-[0.9375rem] leading-[1.65] text-ink/70">
                        Inquadralo con la fotocamera per aprire direttamente la
                        chat. È pensato anche per essere stampato.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Dove si trova. */}
      <section className="bg-sand py-16 lg:py-24" aria-labelledby="dove">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-accent">Dove siamo</p>
                <h2
                  id="dove"
                  className="mt-6 text-[1.875rem] leading-[1.2] text-deep sm:text-[2.25rem]"
                >
                  A Percoto, a pochi passi dal centro.
                </h2>
                <p className="mt-6 max-w-[30rem] text-[1.0625rem] leading-[1.7] text-ink/80">
                  L&rsquo;ambulatorio è in {site.address.street}, a Percoto,
                  frazione di {site.address.municipality}. Piazza della Vittoria,
                  il centro del paese, è a poco meno di trecento metri.
                </p>
                <a
                  href={site.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                >
                  Apri le indicazioni stradali
                  <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
                </a>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-10 border-t border-line pt-6">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Da dove si arriva in pochi minuti
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-[0.9375rem] text-ink/75">
                    {nearbyTowns.map((comune, indice) => (
                      <li key={comune}>
                        {comune}
                        {indice < nearbyTowns.length - 1 ? (
                          <span aria-hidden className="ml-2 text-accent/50">
                            ·
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.12}>
                <div className="rounded-sm bg-bone p-5 ring-1 ring-inset ring-line sm:p-7">
                  <MappaPercoto />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Urgenze: formulazione neutra, nessuna struttura nominata. */}
      <section
        data-contact-end
        className="bg-deep py-14 text-bone lg:py-16"
        aria-labelledby="urgenze"
      >
        <div className="wrap">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow text-accent-warm">Urgenze</p>
                <h2
                  id="urgenze"
                  className="mt-5 text-[1.5rem] leading-[1.25] text-bone sm:text-[1.875rem]"
                >
                  Fuori orario.
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-[1.0625rem] leading-[1.75] text-bone/80">
                  WhatsApp non è un canale di emergenza: i messaggi vengono letti
                  durante l&rsquo;attività dell&rsquo;ambulatorio. In caso di
                  urgenza fuori orario, rivolgiti al servizio di pronto soccorso
                  veterinario più vicino.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Briciole pagina="Contatti e come arrivare" href="/contatti" />
    </>
  );
}
