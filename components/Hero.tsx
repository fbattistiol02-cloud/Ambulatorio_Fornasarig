import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";

import { site } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-deep lg:min-h-[88svh] lg:items-center"
    >
      {/*
        Ritaglio quadrato: sul desktop `object-cover` taglia in alto e in basso
        e lascia in campo i due animali, sul mobile taglia ai lati mantenendo il
        soggetto al centro. Un solo file, nessun doppio download.
      */}
      <Image
        src="/foto/cane-gatto.jpg"
        alt="Un cane bianco e un gattino rosso seduti a terra, vicini, che si guardano"
        fill
        preload
        sizes="100vw"
        className="-z-10 object-cover object-center lg:object-[center_38%]"
      />

      {/* Velatura verticale: regge il testo sui formati stretti. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#062726_3%,rgba(6,39,38,0.93)_32%,rgba(6,39,38,0.6)_66%,rgba(6,39,38,0.32)_100%)] lg:hidden"
      />
      {/* Velatura orizzontale: dal verde pieno a sinistra al trasparente a destra. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden lg:block lg:bg-[linear-gradient(90deg,#062726_0%,rgba(6,39,38,0.93)_30%,rgba(6,39,38,0.66)_52%,rgba(6,39,38,0.12)_82%,rgba(6,39,38,0)_100%)]"
      />
      {/* Scurisce appena la fascia dell'header sovrapposto. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-deep/70 to-transparent"
      />

      <div className="wrap pt-32 pb-14 lg:py-24">
        <div className="max-w-[38rem] xl:max-w-[42rem]">
          <p className="eyebrow rise text-accent-warm">
            Ambulatorio Veterinario · Percoto
          </p>

          <h1 className="rise rise-2 mt-6 text-[2.125rem] leading-[1.1] text-bone sm:text-5xl lg:text-[3.375rem] xl:text-[3.875rem]">
            Cura veterinaria per cani e gatti.
            <span className="mt-4 block text-[0.6em] leading-[1.3] text-bone/80">
              Con una particolare attenzione alla{" "}
              <span className="text-accent-warm underline decoration-accent-warm/40 decoration-1 underline-offset-[7px]">
                medicina felina
              </span>
              .
            </span>
          </h1>

          <div className="rise rise-3">
            <p className="mt-7 max-w-[34rem] font-sans text-[0.9375rem] font-medium tracking-[0.02em] text-bone/90 sm:text-base">
              {site.doctor} — {site.degree} · {site.certification}
            </p>
            <p className="mt-3 max-w-[34rem] text-base text-bone/70 sm:text-[1.0625rem]">
              Diagnostica per immagini e di laboratorio a supporto della visita,
              per arrivare a una diagnosi accurata.
            </p>
          </div>

          <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-sm bg-whatsapp px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-whatsapp-deep sm:text-[1.0625rem]"
            >
              <WhatsAppIcon className="size-5 shrink-0 text-whatsapp-bright" />
              Scrivici su WhatsApp
            </a>
            <a
              href={site.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-sm px-7 py-4 text-base text-bone ring-1 ring-inset ring-bone/35 transition-colors hover:bg-bone/10 sm:text-[1.0625rem]"
            >
              <MapPin className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
              Vieni in ambulatorio
            </a>
          </div>

          <p className="rise rise-5 mt-6 text-sm text-bone/60">
            Risposta rapida su WhatsApp.
          </p>

          <div className="rise rise-5 mt-6 flex flex-col gap-3 border-t border-bone/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2.5 text-sm text-bone/65">
              <MapPin className="size-4 shrink-0 text-accent-warm" strokeWidth={1.75} aria-hidden />
              {site.address.short}
            </p>
            <a
              href="#ambulatorio"
              className="inline-flex items-center gap-2 text-sm text-bone/75 transition-colors hover:text-bone"
            >
              Scopri l&rsquo;ambulatorio
              <ArrowDown className="size-3.5 shrink-0" strokeWidth={1.75} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
