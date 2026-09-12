import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Medicina felina";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("Il gatto non è un cane di piccola taglia.", "GPCert Medicina Felina: una certificazione post-laurea dedicata alla medicina del gatto.");
}
