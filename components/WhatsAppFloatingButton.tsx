import { site } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Bottone WhatsApp fisso, solo desktop: su mobile lo stesso ruolo lo copre
 * già la MobileCallBar, e i due sovrapposti sarebbero ridondanti.
 */
export function WhatsAppFloatingButton() {
  return (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="fixed bottom-8 right-8 z-40 hidden size-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-deep/20 transition-colors hover:bg-whatsapp-deep lg:flex"
    >
      <WhatsAppIcon className="size-7 text-whatsapp-bright" />
    </a>
  );
}
