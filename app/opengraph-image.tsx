import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Ambulatorio Veterinario Dott.ssa Elena Fornasarig, Percoto";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage();
}
