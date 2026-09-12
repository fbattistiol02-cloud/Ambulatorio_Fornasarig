import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Contatti e come arrivare";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("Richiedi un appuntamento.", "Si scrive su WhatsApp. Via Marconi 7/B, Percoto — Pavia di Udine.");
}
