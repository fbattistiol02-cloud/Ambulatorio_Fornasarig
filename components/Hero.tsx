import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";

import { site, whatsappHelp } from "@/lib/site";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      {/* Fondale continuo: fotografia fornita dalla dottoressa, sfumata ai bordi. */}
      <div className="hero-photo grain">
        <Image
          src="/foto/gattino-arancione.webp"
          alt="Un gattino arancione guarda verso l’obiettivo"
          fill
          preload
          sizes="(min-width: 1024px) 68vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="hero-shade" aria-hidden />

      <div className="wrap hero-body">
        <div className="hero-copy">
          <p className="eyebrow rise text-accent-warm">
            Ambulatorio veterinario · Percoto
          </p>
          <h1 id="hero-title" className="hero-title rise rise-2">
            Cura veterinaria{" "}
            <span className="block">per cani e gatti.</span>
          </h1>
          <p className="hero-intro rise rise-3">
            Con un&rsquo;attenzione particolare alla{" "}
            <span className="text-accent-warm">medicina felina.</span>
          </p>
          <div className="hero-identity rise rise-3">
            <p className="font-medium text-bone">{site.doctor}</p>
            <p className="mt-1 text-sm text-bone/80">
              {site.degree} <span className="mx-1.5" aria-hidden>·</span> {site.certification}
            </p>
          </div>
          <div className="hero-actions rise rise-4">
            <WhatsAppCTA
              contesto="generale"
              variante="light"
              freccia
              marcatore="inizio"
            />
            <p className="mt-3 max-w-sm text-sm text-bone/80">
              {whatsappHelp}
            </p>
          </div>
        </div>
      </div>

      <div className="hero-bottom rise rise-5">
        <div className="wrap">
          <div className="hero-bottom-inner">
            <a href={site.directions} target="_blank" rel="noopener noreferrer" className="hero-directions">
              <MapPin className="size-4 shrink-0 text-accent-warm" strokeWidth={1.75} aria-hidden />
              <span>
                <span className="block text-sm text-bone/85">{site.address.short}</span>
                <span className="mt-0.5 block text-xs text-bone/75">Come raggiungerci ↗</span>
              </span>
            </a>
            <a href="#ambulatorio" className="hero-explore" aria-label="Scopri l'ambulatorio">
              <span>Scopri l&rsquo;ambulatorio</span>
              <ArrowDown className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
