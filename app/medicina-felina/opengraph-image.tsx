import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Medicina felina";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage("Medicina felina", "GPCert Medicina Felina · Una preparazione dedicata alla medicina del gatto.");
}
