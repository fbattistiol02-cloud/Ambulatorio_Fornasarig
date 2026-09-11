import { ArrowUpRight, Clock, Mail, MapPin } from "lucide-react";

import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ContactSection() {
  return (
    <section id="contatti" className="bg-bone py-20 lg:py-28">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-accent">Appuntamenti</p>
              <h2 className="mt-6 text-[2.125rem] leading-[1.12] text-deep sm:text-[2.75rem] lg:text-[3.25rem]">
                Prenota una visita.
              </h2>
              <p className="mt-7 max-w-[32rem] text-lg leading-[1.7] text-ink/80">
                {site.availability} Il modo più diretto per fissarlo è
                scrivere su WhatsApp: si concordano giorno e orario e si
                capisce subito che cosa portare con sé.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-whatsapp px-8 py-5 text-lg font-semibold text-white transition-colors hover:bg-whatsapp-deep sm:w-auto"
              >
                <WhatsAppIcon className="size-5 shrink-0 text-whatsapp-bright" />
                Scrivici su WhatsApp
              </a>

              <div className="mt-8">
                <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted">
                  Oppure vieni in ambulatorio
                </p>
                <a
                  href={site.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2.5 py-2 text-xl text-deep/80 transition-colors hover:text-accent"
                >
                  <MapPin className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
                  {site.address.short}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.16}>
              <div className="border-t border-line-soft">
                <div className="flex gap-4 border-b border-line-soft py-6">
                  <MapPin className="mt-1 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
                  <div>
                    <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted">
                      Indirizzo
                    </p>
                    <p className="mt-1.5 font-serif text-xl leading-snug text-deep">
                      {site.address.street}
                    </p>
                    <p className="text-[0.9375rem] text-ink/70">
                      {site.address.locality} — {site.address.municipality} (
                      {site.address.province})
                    </p>
                    <a
                      href={site.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      Ottieni indicazioni
                      <ArrowUpRight className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-line-soft py-6">
                  <Mail className="mt-1 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
                  <div className="min-w-0">
                    <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted">
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

                <div className="flex gap-4 py-6">
                  <Clock className="mt-1 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
                  <div>
                    <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted">
                      Visite
                    </p>
                    <p className="mt-1.5 text-[1.0625rem] text-deep">
                      {site.availability}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
