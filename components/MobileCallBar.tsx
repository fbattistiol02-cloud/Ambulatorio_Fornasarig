"use client";

import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Barra di contatto fissa, solo su mobile: WhatsApp primario, indicazioni
 * stradali come icona secondaria (niente telefono: la dottoressa vuole
 * ridurre le chiamate, non offrirle come alternativa). Compare dopo la hero:
 * finché la hero è a schermo i CTA sono già lì, e coprirli sarebbe
 * ridondante.
 */
export function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-deep-3/40 bg-deep/95 backdrop-blur-md transition-transform duration-300 lg:hidden",
        "pb-[env(safe-area-inset-bottom)]",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      // Fuori schermo la barra non deve essere raggiungibile da tastiera.
      inert={!visible}
    >
      <div className="wrap flex items-center gap-2.5 py-3">
        <a
          href={site.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-3 rounded-sm bg-whatsapp px-6 py-4 text-lg font-semibold text-white"
        >
          <WhatsAppIcon className="size-5 shrink-0 text-whatsapp-bright" />
          Scrivici su WhatsApp
        </a>
        <a
          href={site.directions}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vieni in ambulatorio, ottieni indicazioni"
          className="flex size-[3.25rem] shrink-0 items-center justify-center rounded-sm text-bone ring-1 ring-inset ring-bone/30"
        >
          <MapPin className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
        </a>
      </div>
    </div>
  );
}
