"use client";

import { site } from "@/lib/site";
import { useContactVisibility } from "@/lib/useContactVisibility";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloatingButton() {
  const visible = useContactVisibility();

  return (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivi su WhatsApp"
      inert={!visible}
      data-contact-affordance
      className={cn(
        "fixed right-6 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-deep/20 transition-[opacity,transform,background-color] duration-200 hover:bg-whatsapp-deep lg:flex",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0",
      )}
    >
      <WhatsAppIcon className="size-6 text-whatsapp-bright" />
    </a>
  );
}
