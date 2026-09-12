"use client";

import { MapPin } from "lucide-react";

import { site } from "@/lib/site";
import { useContactVisibility } from "@/lib/useContactVisibility";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Compare solo dopo il pulsante della hero; si ritira ai contatti. */
export function MobileCallBar() {
  const visible = useContactVisibility();

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-bone/15 bg-deep/95 backdrop-blur-md transition-transform duration-300 lg:hidden",
        "pb-[env(safe-area-inset-bottom)]",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      inert={!visible}
      data-contact-affordance
      data-mobile-contact-bar
    >
      <div className="wrap flex items-center gap-2.5 py-3">
        <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className="whatsapp-cta whatsapp-cta-light min-w-0 flex-1 px-3">
          <WhatsAppIcon className="size-5 shrink-0" />
          Scrivi su WhatsApp
        </a>
        <a href={site.directions} target="_blank" rel="noopener noreferrer" aria-label="Come raggiungerci, apri le indicazioni" className="flex size-12 shrink-0 items-center justify-center rounded-sm text-bone ring-1 ring-inset ring-bone/30">
          <MapPin className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
        </a>
      </div>
    </div>
  );
}
