import type { MetadataRoute } from "next";
import { isPreview, siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreview) return [];
  // Nessuna data artificiale: lastModified si aggiunge solo quando è nota
  // la data dell'ultima modifica sostanziale di ciascuna pagina.
  return ["", "/medicina-felina", "/prestazioni", "/guida-gatto", "/contatti"].map(
    (path) => ({ url: `${siteUrl}${path}` }),
  );
}
