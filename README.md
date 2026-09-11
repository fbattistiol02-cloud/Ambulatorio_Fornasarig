# Ambulatorio Veterinario Dott.ssa Elena Fornasarig

Sito vetrina di una pagina per l'ambulatorio veterinario di Percoto (Pavia di
Udine). Statico, senza backend, senza database e senza raccolta di dati: l'unico
invito all'azione è la telefonata.

## Stack

- Next.js 16 (App Router) con Turbopack
- TypeScript, Tailwind CSS v4
- `lucide-react` per le icone, `framer-motion` per le entrate in scorrimento
- Nessuna dipendenza runtime aggiuntiva: la pagina è prerenderizzata come
  contenuto statico

## Comandi

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run lint
```

## Deploy su Vercel

Il progetto non ha variabili obbligatorie: `npm run build` produce una pagina
statica ed è sufficiente collegare il repository.

Quando il dominio definitivo è noto, impostare la variabile in Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://dominio-definitivo.it
```

Serve a rendere assoluti il canonical, gli Open Graph e l'immagine nei dati
strutturati. Senza la variabile il sito funziona comunque, ma quei riferimenti
puntano a `http://localhost:3000`: va impostata **prima** di segnalare il sito a
Google.

## Dove stanno i contenuti

`lib/site.ts` è l'unica fonte dei dati dell'attività: nome, recapiti, indirizzo,
qualifiche, elenco delle prestazioni. Header, hero, contatti, footer e dati
strutturati leggono tutti da lì, quindi un recapito si corregge in un punto solo.

### Cosa non aggiungere senza conferma diretta

Il sito è stato costruito per non dichiarare nulla che l'ambulatorio non possa
sostenere. In particolare **non** vanno inseriti senza verifica:

- tabelle di orari — l'unica formula ammessa è «Si riceve su appuntamento»;
- recensioni, stelle, testimonianze o metriche («oltre N pazienti»);
- pronto soccorso h24, prenotazione online, calendari, chat automatiche;
- certificazioni, titoli o esperienze diverse da D.V.M. e GPCert Medicina
  Felina;
- fotografie di volti presentate come ritratto della professionista, o di
  interni presentati come i locali dell'ambulatorio (vedi `CREDITI-FOTO.md`).

## Fotografie

Due immagini Unsplash in `public/foto/`, con crediti e criteri in
`CREDITI-FOTO.md`. Per rigenerarle:

```bash
python3 scripts/scarica-foto.py
```

Lo script riscarica gli originali e riapplica gli stessi ritagli, producendo
file identici a quelli versionati.

## Scelte di accessibilità e prestazioni

- **Contrasto.** Ogni combinazione di testo raggiunge almeno 4.59:1, sopra la
  soglia WCAG AA. L'ambra di partenza (`#d97706`) sotto il testo bianco delle
  CTA si fermava a 3.19:1: la tonalità operativa è `#ab4f08`, mentre `#f59e0b`
  resta riservato al verde profondo, dove arriva a 7.37:1.
- **Contenuti sempre visibili.** L'HTML servito dal server non contiene mai
  `opacity: 0`. Le entrate in scorrimento (`components/Reveal.tsx`) nascondono
  un blocco *solo* tramite lo stesso IntersectionObserver che poi lo rivela: se
  lo script non parte, il contenuto resta semplicemente visibile. L'entrata
  della hero è in CSS puro per lo stesso motivo.
- **Movimento ridotto.** Con `prefers-reduced-motion` durata e ritardo delle
  animazioni sono azzerati e le entrate JavaScript non vengono nemmeno armate.
- **Bersagli tattili.** Sul mobile ogni link e pulsante supera i 44 px di
  altezza, e una barra di chiamata fissa compare dopo la hero.
- **Immagini.** Servite con `next/image`; la hero è un unico ritaglio quadrato
  che `object-cover` inquadra correttamente sia in orizzontale sia in verticale,
  così non esiste un secondo download per il mobile.
