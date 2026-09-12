import { site } from "@/lib/site";

/**
 * Dati strutturati del percorso di navigazione.
 *
 * Serve ai motori per mostrare il percorso al posto dell'URL nudo. L'URL
 * assoluto si costruisce qui e non nel chiamante, così resta una cosa sola da
 * cambiare quando arriverà il dominio definitivo.
 */
export function Briciole({ pagina, href }: { pagina: string; href: string }) {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: site.shortName,
        item: base,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pagina,
        item: `${base}${href}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
