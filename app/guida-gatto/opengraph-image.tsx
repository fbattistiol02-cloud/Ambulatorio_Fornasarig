import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Guida per chi ha un gatto";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("Guida per chi ha un gatto.", "Il trasportino, i segni che meritano una visita, come prepararsi.");
}
