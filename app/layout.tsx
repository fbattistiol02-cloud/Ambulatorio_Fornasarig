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
 * Il dominio definitivo non è ancora assegnato: si legge da variabile
 * d'ambiente in fase di deploy, così i metadati assoluti (Open Graph,
 * canonical) restano corretti senza inventare un indirizzo.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
    "ecografia veterinaria Udine",
    "ecocardiografia veterinaria",
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
        url: "/foto/visita-gatto.jpg",
        width: 2200,
        height: 2200,
        alt: "Le mani guantate di un medico veterinario durante la visita di un gatto",
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
  image: `${siteUrl}/foto/visita-gatto.jpg`,
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
