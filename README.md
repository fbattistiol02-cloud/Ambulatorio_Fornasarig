# Ambulatorio Veterinario Dott.ssa Elena Fornasarig

Sito vetrina di cinque pagine per l'ambulatorio veterinario di Percoto (Pavia di
Udine). Statico, senza backend, senza database e senza raccolta di dati: il
contatto è WhatsApp, per informazioni e richieste di appuntamento.

## Le cinque pagine

| Rotta | Pagina | Ruolo |
| --- | --- | --- |
| `/` | Pagina iniziale | Chi, che cosa, dove; apre le tre strade di approfondimento |
| `/medicina-felina` | Medicina felina | Identità, credenziali, che cos'è il GPCert, perché il gatto è diverso |
| `/prestazioni` | Prestazioni | Le quattro prestazioni, il perimetro, che cosa portare |
| `/guida-gatto` | Guida per chi ha un gatto | Trasportino, segni che meritano una visita, preparazione |
| `/contatti` | Contatti e come arrivare | Appuntamento, modello di messaggio, QR, indirizzo, urgenze |

Non esiste una pagina biografica separata: identità e credenziali aprono la
pagina di medicina felina, perché la certificazione **è** il profilo.

## Stack

- Next.js 16 (App Router) con Turbopack
- TypeScript, Tailwind CSS v4
- `lucide-react` per le icone di interfaccia, `framer-motion` per le entrate in
  scorrimento
- Nessuna dipendenza runtime aggiuntiva: le cinque pagine, le anteprime Open
  Graph, la sitemap e il robots sono prerenderizzati come contenuto statico

Le icone di contenuto (prestazioni) e la sequenza del trasportino sono disegnate
per questo sito e vivono in `components/disegni/`. Nella stessa cartella c'è la
mappa di Percoto: strade reali da OpenStreetMap, disegnate con la palette del
sito.

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

Rigenerare le immagini di archivio — ritagli e gradazione sono documentati nello
script, i file sono già versionati:

```bash
python3 scripts/scarica-foto.py
```

Rigenerare il codice QR verso WhatsApp:

```bash
python3 scripts/genera-qr.py
```

Rigenerare la mappa. Senza argomenti riusa la risposta OpenStreetMap già
conservata in `scripts/percoto.osm.json`; con `--aggiorna` la riscarica:

```bash
python3 scripts/genera-mappa.py
```

`scarica-foto.py` chiede `Pillow`, `genera-qr.py` chiede `segno`,
`genera-mappa.py` non chiede nulla. Sono strumenti di sviluppo, non dipendenze
del sito: nessuno dei tre viene invocato dalla build.

## Deploy su Vercel

Il repository è collegato al progetto Vercel `ambulatorio-fornasarig`: ogni push
su `main` fa partire un deploy di produzione.

Non ci sono variabili obbligatorie. I metadati assoluti (canonical, Open Graph,
sitemap, dati strutturati) usano da soli `VERCEL_PROJECT_PRODUCTION_URL`, che
Vercel fornisce in fase di build.

Quando l'ambulatorio avrà un dominio proprio, impostare in Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://dominio-definitivo.it
```

ha la precedenza su tutto il resto. Serve un nuovo deploy perché il valore
venga fissato nella build.

## Dove stanno i contenuti

`lib/site.ts` è l'unica fonte dei dati dell'attività: nome, recapiti, indirizzo,
qualifiche, prestazioni, messaggi WhatsApp precompilati, comuni limitrofi.
Header, footer, pagine, metadati e dati strutturati leggono da lì.

## Regole di contenuto

Queste regole non sono preferenze di stile: riguardano ciò che il sito afferma.

- **Non è più possibile chiedere informazioni alla dottoressa.** Si scrive solo
  ciò che è già in `lib/site.ts` o ciò che è vero in generale e verificabile
  pubblicamente. In caso di dubbio si omette.
- Mai la parola **«clinica»**: ambulatorio e clinica sono strutture con requisiti
  diversi.
- Mai **«specialista»** o **«specializzazione»**: il GPCert è una certificazione
  post-laurea. La pagina di medicina felina lo dice esplicitamente.
- Mai **«diagnostica per immagini»** in forma generica: si legge come
  comprensiva delle ecografie. Si scrive **«radiografie»**.
- **Ecocardiografia ed ecografia addominale sono escluse** da testi, elenchi,
  icone e immagini.
- Nessun orario, nessuna tariffa, nessun tempo di risposta, nessuna recensione,
  nessuna promessa clinica.
- Nessuna descrizione della prassi interna dell'ambulatorio: le indicazioni sono
  sempre scritte dal lato del proprietario.

I piani di lavoro sono in `IMPLEMENTATION_PLAN.MD`, `IMPLEMENTATION_V1.MD` e
`IMPLEMENTATION_V2.MD`. La provenienza delle immagini e dei dati della mappa è in
`CREDITI-FOTO.md`.


## Identità, contatto e SEO — V3

Il piano e la checklist aggiornati sono in `IMPLEMENTATION_V3.MD`.

- `app/icon.svg` contiene il monogramma a tracciati, senza font esterni.
- `node scripts/genera-icone.mjs` rigenera ICO 16/32/48, Apple Touch 180 e
  il PNG 512 in `public/brand/`. Usa sharp già installato con Next.js.
- `lib/brand.ts` conserva lo stesso tracciato per le immagini Open Graph:
  se cambia il monogramma, aggiornare insieme questo file e `app/icon.svg`.
- `lib/og.tsx` produce le cinque copertine da 1200 × 630 in fase di build.
  I font statici ridotti al set latino e le licenze OFL sono in `assets/fonts/`.
  Le card X riusano titolo, descrizione e immagine Open Graph della pagina.
- `public/contatto-fornasarig.vcf` è una vCard 3.0 statica: quando cambiano i
  recapiti in `lib/site.ts`, aggiornare anche la scheda, mantenendo UTF-8,
  terminatori CRLF e righe ripiegate entro 75 ottetti. Non raccoglie dati.
  Aggiungere la proprietà URL solo dopo la conferma del dominio definitivo.
- `lib/site-url.ts` centralizza il dominio: `NEXT_PUBLIC_SITE_URL` prevale
  su `VERCEL_PROJECT_PRODUCTION_URL`, con fallback locale. Il valore deve
  essere un’origine HTTP(S) senza percorsi, query o credenziali.
- Con `VERCEL_ENV=preview`, le pagine espongono `noindex, follow`, la sitemap
  è vuota e robots non la pubblicizza. La scansione rimane consentita per
  permettere ai crawler di leggere il noindex. La configurazione normale
  mantiene `index, follow` e le cinque URL nella sitemap.
- La sitemap omette `lastModified` finché non sono disponibili date di
  modifica sostanziale attendibili. Non usa la data della build.

Prima della consegna pubblica completare le voci aperte della checklist:
dominio definitivo, accessibilità pubblica, anteprime effettive WhatsApp,
importazione vCard su dispositivi reali, Profilo dell’attività e Search Console.
