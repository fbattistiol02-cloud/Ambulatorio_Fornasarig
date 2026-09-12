import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Prestazioni dell'ambulatorio";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("Che cosa si fa in ambulatorio.", "Visite per cani e gatti, radiografie, esami di laboratorio, piccola chirurgia.");
}
