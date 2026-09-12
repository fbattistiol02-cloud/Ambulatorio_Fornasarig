import type { MetadataRoute } from "next";

import { siteUrl } from "./layout";

/**
 * Mappa del sito. Cinque pagine, nessuna esclusa.
 *
 * `changeFrequency` e `priority` restano volutamente sobrie: sono suggerimenti,
 * e dichiarare aggiornamenti che non avvengono non aiuta nessuno.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pagine = [
    { path: "/", priority: 1 },
    { path: "/medicina-felina", priority: 0.9 },
    { path: "/prestazioni", priority: 0.8 },
    { path: "/guida-gatto", priority: 0.8 },
    { path: "/contatti", priority: 0.7 },
  ];

  return pagine.map(({ path, priority }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority,
  }));
}
