# Ambulatorio Veterinario Dott.ssa Elena Fornasarig

Sito vetrina di una pagina per l'ambulatorio veterinario di Percoto (Pavia di
Udine). Statico, senza backend, senza database e senza raccolta di dati: il contatto principale
è WhatsApp, per informazioni e richieste di appuntamento.

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

Il repository è collegato al progetto Vercel `ambulatorio-fornasarig`: ogni push
su `main` fa partire un deploy di produzione.

Non ci sono variabili obbligatorie. I metadati assoluti (canonical, Open Graph,
dati strutturati) usano da soli `VERCEL_PROJECT_PRODUCTION_URL`, che Vercel
fornisce in fase di build.

Quando l'ambulatorio avrà un dominio proprio, impostare in Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://dominio-definitivo.it
```

ha la precedenza su tutto il resto. Serve un nuovo deploy perché il valore
venga fissato nella build.

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

La hero usa `public/foto/gattino-arancione.webp`, con posizionamento e
dissolvenza responsive. La sezione felina usa
`public/foto/gatto-bianco-nero-sdraiato.webp` nel formato originale 4:3.
Entrambe le fotografie sono state fornite dalla dottoressa e conservate
senza ricompressione. Provenienza e criteri sono in `CREDITI-FOTO.md`.
Lo script seguente rigenera soltanto le due immagini Unsplash precedenti
(`visita-gatto.jpg` e `gatto-in-braccio.jpg`), non le fotografie attualmente
mostrate nella pagina:

```bash
python3 scripts/scarica-foto.py
```

Lo script riscarica gli originali e riapplica gli stessi ritagli, producendo
file identici a quelli versionati.

## Scelte di accessibilità e prestazioni

- **Contrasto.** Il pulsante chiaro della hero usa testo verde scuro su
  fondo verde pallido (8.92:1). I pulsanti verdi con testo bianco raggiungono
  7.67:1; l'accento scuro sulle superfici sabbia raggiunge 4.59:1.
- **Contenuti sempre visibili.** L'HTML servito dal server non contiene mai
  `opacity: 0`. Le entrate in scorrimento (`components/Reveal.tsx`) nascondono
  un blocco *solo* tramite lo stesso IntersectionObserver che poi lo rivela: se
  lo script non parte, il contenuto resta semplicemente visibile. L'entrata
  della hero è in CSS puro per lo stesso motivo.
- **Movimento ridotto.** Con `prefers-reduced-motion` durata e ritardo delle
  animazioni sono azzerati e le entrate JavaScript non vengono nemmeno armate.
- **Bersagli tattili.** Sul mobile ogni link e pulsante supera i 44 px di
  altezza, e una barra WhatsApp compare dopo il pulsante della hero. Si ritira
  quando si raggiungono i contatti e durante l’apertura del menu.
- **Immagini.** Servite con `next/image`; la hero riutilizza un unico originale verticale (2400 × 3600).
  Il fondale cambia posizione su desktop, tablet e mobile, senza duplicare
  il file né alterare la fotografia. Il layout riserva lo spazio prima
  del caricamento dell’immagine.

## Revisione frontend V1

`IMPLEMENTATION_V1.MD` contiene la checklist e le evidenze della revisione:
nuova composizione fotografica, gerarchia della hero, presentazione avorio
e percorso WhatsApp coerente. Architettura, dipendenze e backend invariati.
