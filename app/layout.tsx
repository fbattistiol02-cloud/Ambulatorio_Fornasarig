import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";

import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const serifDisplay = Source_Serif_4({
  variable: "--font-serif-display",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Base per i metadati assoluti (canonical, Open Graph, dati strutturati),
 * risolta in tre gradini:
 *
 * 1. `NEXT_PUBLIC_SITE_URL`, da impostare a mano quando ci sarà un dominio
 *    proprio: ha sempre la precedenza;
 * 2. `VERCEL_PROJECT_PRODUCTION_URL`, che Vercel fornisce da sola in fase di
 *    build con il dominio di produzione del progetto — nessuna configurazione
 *    richiesta, e resta corretta anche nelle build di preview;
 * 3. localhost, che resta solo per lo sviluppo in locale.
 *
 * Il gradino 2 esiste perché senza di esso una build su Vercel priva della
 * variabile pubblicava `http://localhost:3000` come canonical e come og:image:
 * un canonical verso localhost impedisce la corretta indicizzazione e rompe
 * l'anteprima dei link condivisi.
 */
const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (productionUrl ? `https://${productionUrl}` : "http://localhost:3000");

const description =
  `Ambulatorio veterinario per cani e gatti a Percoto, Pavia di Udine. ` +
  `${site.doctor}, ${site.role} ${site.degree} con ${site.certification}. ` +
  `Diagnostica per immagini e di laboratorio, piccola chirurgia. ` +
  `${site.availability}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Percoto, Pavia di Udine`,
    template: `%s — ${site.shortName}`,
  },
  description,
  applicationName: site.shortName,
  authors: [{ name: site.doctor }],
  keywords: [
    "veterinario Percoto",
    "veterinario Pavia di Udine",
    "ambulatorio veterinario Udine",
    "medicina felina Udine",
    "GPCert medicina felina",
    "veterinario cani e gatti",
    "radiografia veterinaria Udine",
    site.doctor,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: site.name,
    title: `${site.name} — Percoto, Pavia di Udine`,
    description,
    images: [
      {
        url: "/foto/cane-gatto.jpg",
        width: 2400,
        height: 3600,
        alt: "Un cane bianco e un gattino rosso seduti a terra, vicini, che si guardano",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#062726",
  colorScheme: "light",
};

/**
 * Dati strutturati per la ricerca locale. Contengono esclusivamente
 * informazioni confermate: nessun orario di apertura, nessuna recensione,
 * nessuna valutazione aggregata.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: site.name,
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: `${site.address.locality}, ${site.address.municipality}`,
    addressRegion: site.address.province,
    addressCountry: site.address.country,
  },
  telephone: "+39 338 827 3705",
  email: site.email.label,
  image: `${siteUrl}/foto/cane-gatto.jpg`,
  hasMap: site.directions,
  currenciesAccepted: "EUR",
  founder: {
    "@type": "Person",
    name: site.doctor,
    jobTitle: site.role,
    hasCredential: [site.degree, site.certification],
    memberOf: { "@type": "Organization", name: site.order },
  },
  availableService: [
    { "@type": "MedicalProcedure", name: "Medicina veterinaria per cani e gatti" },
    { "@type": "MedicalProcedure", name: "Diagnostica per immagini" },
    { "@type": "MedicalProcedure", name: "Diagnostica di laboratorio" },
    { "@type": "MedicalProcedure", name: "Piccola chirurgia" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${serifDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bone">
        {children}
        <script
          type="application/ld+json"
          // Oggetto costruito internamente da `lib/site.ts`: nessun input esterno.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
