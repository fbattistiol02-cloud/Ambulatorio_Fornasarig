import type { MetadataRoute } from "next";

import { isPreview, siteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // Lasciare la scansione libera permette di leggere il noindex delle preview.
    sitemap: isPreview ? undefined : `${siteUrl}/sitemap.xml`,
  };
}
