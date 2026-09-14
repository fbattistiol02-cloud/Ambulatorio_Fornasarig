import type { Metadata, Viewport } from "next";
import { Inter_Tight, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { site } from "@/lib/site";
import { isPreview, siteUrl } from "@/lib/site-url";
import "./globals.css";

/*
 * Inter e Source Serif 4 erano corretti e invisibili: le due scelte più
 * prevedibili di Google Fonts. Newsreader ha un asse verticale più marcato e
 * una grazia meno neutra, Inter Tight stringe il testo corrente senza perdere
 * leggibilità. Nessuna dipendenza nuova: `next/font/google` era già in uso.
 */
const sans = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const serifDisplay = Newsreader({
  variable: "--font-serif-display",
  subsets: ["latin"],
  display: "swap",
});

const description =
  `Ambulatorio veterinario per cani e gatti a Percoto, Pavia di Udine. ` +
  `${site.doctor}, ${site.role} ${site.degree} con ${site.certification}. ` +
  `Radiografie, esami di laboratorio, piccola chirurgia. ` +
  `${site.availability}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Percoto, Pavia di Udine`,
    template: "%s | Fornasarig",
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
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: !isPreview,
    follow: true,
    googleBot: {
      index: !isPreview,
      follow: true,
      "max-image-preview": "large",
    },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#e4f1fa",
  colorScheme: "light",
};

/**
 * Dati strutturati per la ricerca locale. Contengono esclusivamente
 * informazioni confermate: nessun orario di apertura, nessuna recensione,
 * nessuna valutazione aggregata.
 *
 * `availableService` nomina le radiografie e non «diagnostica per immagini»:
 * la formula generica si leggerebbe come comprensiva delle ecografie.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  "@id": `${siteUrl}/#ambulatorio`,
  name: site.name,
  description,
  url: siteUrl,
  logo: `${siteUrl}/brand/fornasarig-512.png`,
  image: `${siteUrl}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: `${site.address.locality}, ${site.address.municipality}`,
    addressRegion: site.address.province,
    addressCountry: site.address.country,
  },
  telephone: "+39 338 827 3705",
  email: site.email.label,
  hasMap: site.directions,
  currenciesAccepted: "EUR",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Pavia di Udine e comuni limitrofi",
  },
  founder: {
    "@type": "Person",
    name: site.doctor,
    jobTitle: site.role,
    hasCredential: [site.degree, site.certification],
    memberOf: { "@type": "Organization", name: site.order },
  },
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Visita veterinaria per cani e gatti",
    },
    { "@type": "MedicalProcedure", name: "Radiografie" },
    { "@type": "MedicalProcedure", name: "Diagnostica di laboratorio" },
    { "@type": "MedicalProcedure", name: "Piccola chirurgia" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${sans.variable} ${serifDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <script
          type="application/ld+json"
          // Oggetto costruito internamente da `lib/site.ts`: nessun input esterno.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
