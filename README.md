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

Le icone di contenuto (prestazioni), la sequenza del trasportino e il diagramma
di orientamento sono disegnati per questo sito e vivono in `components/disegni/`.

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

I due script chiedono rispettivamente `Pillow` e `segno`. Sono strumenti di
sviluppo, non dipendenze del sito.

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
`IMPLEMENTATION_V2.MD`. La provenienza delle immagini è in `CREDITI-FOTO.md`.
