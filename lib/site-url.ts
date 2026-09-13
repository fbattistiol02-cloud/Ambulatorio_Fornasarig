/** URL canonica condivisa da metadati, sitemap e dati strutturati. */
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

const url = new URL(
  configuredUrl || (productionHost ? `https://${productionHost}` : "http://localhost:3000"),
);

if (!['http:', 'https:'].includes(url.protocol) || url.pathname !== '/' || url.search || url.hash || url.username || url.password) {
  throw new Error("NEXT_PUBLIC_SITE_URL deve essere l'origine HTTP(S) del sito, senza percorsi, parametri o credenziali.");
}

export const siteUrl = url.origin;
export const isPreview = process.env.VERCEL_ENV === "preview";
