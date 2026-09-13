import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Contatti e come arrivare";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("Richiedi un appuntamento", "Contattaci su WhatsApp · Via Guglielmo Marconi 7/B");
}
