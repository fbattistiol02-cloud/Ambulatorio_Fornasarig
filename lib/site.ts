/**
 * Unica fonte dei dati dell'ambulatorio.
 *
 * Tutto ciò che compare qui è stato fornito direttamente dalla Dott.ssa
 * Fornasarig. Non aggiungere orari, tariffe, titoli, recensioni o servizi
 * clinici senza una conferma diretta: il sito non deve dichiarare nulla che
 * l'ambulatorio non possa sostenere.
 *
 * Dalla V2 non è più possibile porre domande alla dottoressa. Di conseguenza
 * ogni testo del sito deve poggiare su questo file oppure su fatti veri in
 * generale e verificabili pubblicamente. In caso di dubbio, si omette.
 *
 * Mai usare la parola «clinica»: ambulatorio e clinica sono strutture con
 * requisiti diversi. Mai «specialista» o «specializzazione»: il GPCert è una
 * certificazione post-laurea, non una specializzazione.
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
  /** Stesso numero del telefono, usato anche su WhatsApp. */
  whatsapp: {
    label: "338 827 3705",
    number: "393388273705",
  },
  email: {
    label: "elenafornasarig@hotmail.com",
    href: "mailto:elenafornasarig@hotmail.com",
  },
  address: {
    street: "Via Guglielmo Marconi 7/B",
    /** CAP della località, dato postale pubblico e non un'affermazione sull'attività. */
    postalCode: "33050",
    locality: "Percoto",
    municipality: "Pavia di Udine",
    province: "UD",
    region: "Friuli-Venezia Giulia",
    country: "IT",
    /** Forma estesa, per footer e dati strutturati. */
    full: "Via Guglielmo Marconi 7/B, 33050 Percoto — Pavia di Udine (UD)",
    /** Forma breve, per hero e barre compatte. */
    short: "Via Marconi 7/B · Percoto",
  },
  /**
   * Link diretto a Google Maps: nessuna API a pagamento, nessuna chiave.
   */
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Via Guglielmo Marconi 7/B, 33050 Percoto, Pavia di Udine, UD",
    ),
} as const;

/**
 * Costruisce un collegamento WhatsApp con messaggio precompilato.
 *
 * Il messaggio cambia da pagina a pagina: non è un vezzo, serve a far arrivare
 * alla dottoressa richieste già distinguibili senza alcun backend.
 */
export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Messaggi precompilati, uno per contesto. */
export const whatsappMessages = {
  generale: "Ciao, vorrei prenotare una visita per il mio gatto/cane.",
  gatto: "Ciao, vorrei prenotare una visita per il mio gatto.",
  prestazioni: "Ciao, vorrei un'informazione sulle prestazioni dell'ambulatorio.",
  guida: "Ciao, ho notato qualcosa nel mio gatto e vorrei fissare una visita.",
  appuntamento: "Ciao, vorrei fissare un appuntamento.",
} as const;

export type WhatsAppContext = keyof typeof whatsappMessages;

/** Modello suggerito per il primo messaggio, copiabile dalla pagina contatti. */
export const messageTemplate = [
  "Buongiorno, vorrei fissare un appuntamento.",
  "",
  "Nome e specie: ",
  "Età: ",
  "Da quando: ",
  "Che cosa ho notato: ",
].join("\n");

export const navLinks = [
  /*
   * «Home» come prima voce, e non soltanto il logo cliccabile in alto: chi non
   * naviga abitualmente non sa che il logo riporta alla pagina iniziale e
   * resta bloccato sulle pagine interne.
   */
  { href: "/", label: "Home" },
  { href: "/medicina-felina", label: "Medicina felina" },
  { href: "/prestazioni", label: "Prestazioni" },
  { href: "/guida-gatto", label: "Guida" },
  { href: "/contatti", label: "Contatti" },
] as const;

/**
 * Prestazioni fornite dall'ambulatorio. Le descrizioni riportano solo gli
 * esami esplicitamente indicati: non ampliarle con tecniche non confermate.
 *
 * Mai «diagnostica per immagini» in forma generica: si leggerebbe come
 * comprensiva delle ecografie, che non sono fra le prestazioni.
 */
export const services = [
  {
    number: "01",
    title: "Medicina veterinaria",
    description: "Visite di base per cani e gatti.",
    detail:
      "La visita clinica è il punto di partenza di ogni percorso: è lì che si decide se servono esami e quali.",
    icon: "visita",
  },
  {
    number: "02",
    title: "Radiografie",
    description: "Diagnostica radiografica a supporto della visita.",
    detail:
      "L'esame si esegue in ambulatorio: l'animale non deve essere spostato in un'altra struttura per una radiografia.",
    icon: "radiografia",
  },
  {
    number: "03",
    title: "Diagnostica di laboratorio",
    description: "Esami clinici, esami delle urine ed esami delle feci.",
    detail:
      "Gli esami danno alla visita i numeri che l'osservazione da sola non può dare, soprattutto nel gatto.",
    icon: "laboratorio",
  },
  {
    number: "04",
    title: "Piccola chirurgia",
    description: "Interventi di piccola chirurgia.",
    detail:
      "Interventi di piccola chirurgia eseguiti in ambulatorio, concordati con il proprietario prima di procedere.",
    icon: "chirurgia",
  },
] as const;

export type ServiceIcon = (typeof services)[number]["icon"];

/** Dati professionali verificabili, usati in profilo e footer. */
export const credentials = [
  { label: "Titolo", value: `${site.role} — ${site.degree}` },
  { label: "Certificazione", value: site.certification },
  { label: "Ordine professionale", value: site.order },
  { label: "Albo", value: site.registration },
] as const;

/**
 * Comuni da cui si raggiunge l'ambulatorio in pochi minuti. Descrive la
 * geografia della zona, non un bacino dichiarato dall'ambulatorio.
 */
export const nearbyTowns = [
  "Percoto",
  "Pavia di Udine",
  "Buttrio",
  "Pradamano",
  "Trivignano Udinese",
  "Santa Maria la Longa",
  "Palmanova",
  "Udine sud",
] as const;
