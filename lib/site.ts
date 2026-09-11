/**
 * Unica fonte dei dati dell'ambulatorio.
 *
 * Tutto ciò che compare qui è stato fornito direttamente dalla Dott.ssa
 * Fornasarig. Non aggiungere orari, tariffe, titoli, recensioni o servizi
 * clinici senza una conferma diretta: il sito non deve dichiarare nulla che
 * l'ambulatorio non possa sostenere.
 */
export const site = {
  name: "Ambulatorio Veterinario Dott.ssa Elena Fornasarig",
  shortName: "Ambulatorio Veterinario Fornasarig",
  doctor: "Dott.ssa Elena Fornasarig",
  role: "Medico Veterinario",
  degree: "D.V.M.",
  certification: "GPCert Medicina Felina",
  order: "Ordine dei Medici Veterinari di Udine",
  registration: "Iscrizione albo n. 366 UD",
  /** Testo unico consentito sugli orari: non esistono fasce orarie pubblicate. */
  availability: "Si riceve su appuntamento.",
  patients: "Cani e gatti",
  phone: {
    label: "338 827 3705",
    href: "tel:+393388273705",
  },
  email: {
    label: "elenafornasarig@hotmail.com",
    href: "mailto:elenafornasarig@hotmail.com",
  },
  address: {
    street: "Via Guglielmo Marconi 7/B",
    locality: "Percoto",
    municipality: "Pavia di Udine",
    province: "UD",
    region: "Friuli-Venezia Giulia",
    country: "IT",
    /** Forma estesa, per footer e dati strutturati. */
    full: "Via Guglielmo Marconi 7/B, Percoto — Pavia di Udine (UD)",
    /** Forma breve, per hero e barre compatte. */
    short: "Via Marconi 7/B · Percoto",
  },
  /**
   * Link diretto a Google Maps: nessuna API a pagamento, nessuna chiave.
   * Il CAP è volutamente assente perché non è tra i dati confermati.
   */
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Via Guglielmo Marconi 7/B, Percoto, Pavia di Udine, UD",
    ),
} as const;

export const navLinks = [
  { href: "#ambulatorio", label: "Ambulatorio" },
  { href: "#medicina-felina", label: "Medicina Felina" },
  { href: "#prestazioni", label: "Prestazioni" },
  { href: "#contatti", label: "Contatti" },
] as const;

/**
 * Prestazioni fornite dall'ambulatorio. Le descrizioni riportano solo gli
 * esami esplicitamente indicati: non ampliarle con tecniche non confermate.
 */
export const services = [
  {
    number: "01",
    title: "Medicina veterinaria",
    description: "Visite di base per cani e gatti.",
    icon: "stethoscope",
  },
  {
    number: "02",
    title: "Diagnostica per immagini",
    description: "Radiografie, ecografie ed ecocardiografie.",
    icon: "scan",
  },
  {
    number: "03",
    title: "Diagnostica di laboratorio",
    description: "Esami clinici, esami delle urine ed esami delle feci.",
    icon: "lab",
  },
  {
    number: "04",
    title: "Piccola chirurgia",
    description: "Interventi di piccola chirurgia.",
    icon: "surgery",
  },
] as const;

export type ServiceIcon = (typeof services)[number]["icon"];
