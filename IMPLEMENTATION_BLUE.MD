# IMPLEMENTATION BLUE — Ambulatorio Fornasarig

Data: 14 settembre 2026  
Stato: implementazione completata e verificata, inviata su `origin/codex/blue-palette`; revisione dell’utente e pubblicazione in produzione da eseguire.

## 1. Richiesta e obiettivo

La dottoressa ha chiesto «cambierei lo sfondo in azzurro o blu chiaro» e ha successivamente confermato che si riferisce a tutto il sito. La migrazione interessa quindi l'intera identità cromatica, inclusi marchio, favicon e immagini di condivisione.

L'aspetto più clinico e luminoso è la direzione progettuale proposta sulla base della conversazione; non è una citazione della dottoressa. Le tonalità esatte sotto riportate sono una proposta operativa, da verificare nella resa finale.

L’implementazione è stata successivamente autorizzata dall’utente ed eseguita nel progetto. La checklist riporta il lavoro completato e distingue i controlli locali dalla verifica su dispositivo iOS reale e dalle attività successive alla pubblicazione.

## 2. Direzione visiva

Bianco dominante, azzurro chiaro nelle aperture e nelle fasce di contenuto, blu per titoli, link e azioni. L'intero sito deve apparire chiaro: trasformare le superfici petrolio in superfici azzurre, senza sostituirle con altre grandi superfici blu scuro.

Conservare struttura delle cinque pagine, testi, font, geometria del marchio, fotografie, navigazione e funzioni. Il cambiamento di colore comporta anche l'adeguamento di testi, bordi, ombre e stati interattivi. Eventuali interventi di layout devono limitarsi a quanto strettamente necessario alla leggibilità.

Le annotazioni storiche nel codice che descrivono hero o palette come approvate documentano la versione precedente: la nuova richiesta riguarda esplicitamente anche quelle superfici. Non costituiscono un vincolo al mantenimento del petrolio.

### Palette adottata

| Ruolo | Colore iniziale proposto | Uso |
| --- | --- | --- |
| Fondo principale | `#FFFFFF` | Contenuti e pannelli |
| Fondo secondario | `#F3F8FC` | Alternanza delle sezioni, sostituzione del beige |
| Fondo azzurro | `#E4F1FA` | Hero, testate interne, fasce oggi scure, footer |
| Azzurro di supporto | `#D3E7F5` | Gradienti leggeri e decorazioni |
| Titoli e marchio | `#173B57` | Gerarchia principale su superfici chiare |
| Testo principale | `#243746` | Paragrafi e informazioni |
| Testo secondario | `#506477` | Didascalie e informazioni subordinate |
| Blu azione | `#17649A` | Link, pulsanti generici, filetti, icone e focus |
| Blu azione attiva | `#104D78` | Hover e pressione dei pulsanti |
| Bordo decorativo | `#CBDDEB` | Separatori e cornici non essenziali |

I colori sono valori di partenza, non una certificazione di contrasto. Verificare gli abbinamenti effettivi, incluse trasparenze, immagini e stati interattivi. I bordi che identificano controlli richiedono contrasto adeguato e non devono usare automaticamente il bordo decorativo.

Su successiva richiesta dell’utente, anche tutti i pulsanti WhatsApp adottano il blu azione del sito, con icona e testo bianchi e blu più scuro per hover e pressione. I colori naturali nelle fotografie rimangono invariati.

## 3. Inventario verificato e punti delicati

Percorsi relativi alla radice del progetto `ambulatorio-fornasarig`.

| Area | File | Intervento previsto |
| --- | --- | --- |
| Palette e superfici | `app/globals.css` | Token, gradienti, colori RGB incorporati, selezione testo, focus, bordi, ombre, vetro e fallback |
| Apertura home | `components/Hero.tsx` | Testi scuri, sfumature azzurre, collegamenti e CTA leggibili |
| Testate interne | `components/PageHeader.tsx` | Titolo, introduzione, percorso, indice e separatori su fondo chiaro |
| Navigazione | `components/Header.tsx` | Stato iniziale, scorrimento, menu mobile, voci attive, hover e focus |
| Marchio | `components/Wordmark.tsx` | Filetto blu e varianti cromatiche coerenti con i nuovi fondi |
| Footer | `components/Footer.tsx` | Fondo chiaro, testi scuri, marchio, link e separatori |
| Pagine | `app/page.tsx`, `app/medicina-felina/page.tsx`, `app/prestazioni/page.tsx`, `app/guida-gatto/page.tsx`, `app/contatti/page.tsx` | Tutte le fasce, testi, elenchi, riquadri e richiami |
| Componenti secondari | `components/Briciole.tsx`, `components/ModelloMessaggio.tsx`, `components/WhatsAppCTA.tsx`, `components/WhatsAppFloatingButton.tsx`, `components/WhatsAppIcon.tsx` | Colori propri o ereditati, stati interattivi e ombre |
| Illustrazioni | `components/disegni/IconaPrestazione.tsx`, `components/disegni/Trasportino.tsx`, `components/disegni/MappaPercoto.tsx` | Tratti, riempimenti, opacità e gerarchia della mappa |
| QR | `public/qr-whatsapp.svg` | Sostituire il tratto petrolio con blu scuro; preservare dati e geometria |
| Icona sorgente | `app/icon.svg` | Fondo azzurro, monogramma blu scuro e dettaglio blu |
| Icone derivate | `app/favicon.ico`, `app/apple-icon.png`, `public/brand/fornasarig-512.png` | Rigenerare dalla sorgente aggiornata |
| Generazione icone | `scripts/genera-icone.mjs` | Usare il generatore esistente; verificarne compatibilità e risultati |
| Identità vettoriale | `lib/brand.ts` | Conservare il tracciato del monogramma |
| Anteprime social | `lib/og.tsx` e i cinque `opengraph-image.tsx` | Aggiornare colori incorporati e verificare tutte le immagini |
| Metadati | `app/layout.tsx` | `themeColor`, collegamenti delle icone, Open Graph, Twitter e logo nei dati strutturati |

Non basta cambiare il valore di `deep`: viene usato sia per sfondi sia per testi e tracciati. Separare i ruoli cromatici ed evitare che i titoli diventino azzurri quasi invisibili. Analogamente, le classi con testo bianco e opacità pensate per sfondi scuri vanno riesaminate singolarmente.

## 4. Fasi di implementazione e checklist

Spuntare una voce solo dopo il completamento. Per verifiche visive o funzionali, registrare in fondo al documento data, esito e riferimento all'evidenza. Le voci di rilascio restano aperte finché non viene eseguita quella fase.

### Fase 0 — Preparazione

- [x] Confermato dalla conversazione che la richiesta riguarda tutto il sito.
- [x] Esaminati palette attuale, componenti principali, asset e generatore delle icone.
- [x] Definita una proposta cromatica e redatto il piano senza modificare il sito.
- [x] All'avvio dell'implementazione, rileggere le istruzioni applicabili e le guide locali Next.js richieste da `AGENTS.md`.
- [x] Rilevare lo stato Git e preservare eventuali modifiche dell'utente.
- [x] Acquisire riferimenti visivi della versione precedente sulle cinque pagine, desktop e mobile.
- [x] Registrare la palette adottata e misurare i principali abbinamenti; adeguare i testi secondari dove necessario.

### Fase 1 — Palette condivisa

- [x] Separare i token per superfici, testi, azioni e bordi; migrare gli utilizzi ambigui di `deep`, `bone`, `sand` e `accent-warm`.
- [x] Sostituire arancione e ambra con blu nei richiami grafici e negli stati attivi.
- [x] Sostituire bianco caldo e beige con bianco e bianco ghiaccio.
- [x] Aggiornare colori incorporati in esadecimale, RGB e gradienti, comprese ombre e trasparenze.
- [x] Aggiornare selezione del testo, focus, note, elenchi e separatori.
- [x] Adeguare superfici traslucide e fallback senza trasparenza.
- [x] Aggiornare commenti che descrivono la palette precedente ed evitare valori duplicati divergenti tra sito e asset.

### Fase 2 — Componenti comuni e apertura

- [x] Convertire la hero al fondo azzurro con titoli e descrizioni scuri.
- [x] Ricostruire le sfumature sulla fotografia a tutte le larghezze interessate, mantenendo naturale il gattino e leggibile il testo.
- [x] Verificare fascia inferiore della hero, indicazioni, invito a scorrere e pulsante WhatsApp.
- [x] Adattare header e marchio sia in cima sia dopo lo scorrimento; rivedere la variante `adaptive`, che oggi diventa chiara su desktop.
- [x] Verificare menu mobile aperto/chiuso, voce attiva, hover, pressione e focus.
- [x] Convertire le testate interne, compresi indice, percorso e numerazioni.
- [x] Convertire footer, marchio, dati professionali, collegamenti e filetti.
- [x] Uniformare componenti secondari e WhatsApp, compresa l'ombra del pulsante flottante.

### Fase 3 — Tutte le pagine

- [x] Home `/`: apertura, ambulatorio, approfondimenti, sezione dedicata ai cani e contatti.
- [x] Medicina felina `/medicina-felina`: testata, profilo, certificazione, fasce informative e chiusura.
- [x] Prestazioni `/prestazioni`: testata, elenco, icone, fascia oggi scura e sezione finale.
- [x] Guida gatto `/guida-gatto`: testata, trasportino, sezione sul dolore, segnali e indicazioni finali.
- [x] Contatti `/contatti`: testata, modalità di contatto, modello messaggio, QR, mappa e fascia conclusiva.
- [x] Rivedere tutte le illustrazioni e le opacità della mappa affinché strade, segnaposto ed etichette rimangano distinguibili.
- [x] Aggiornare il colore del QR e verificarne la scansione verso la destinazione originale.
- [x] Controllare fotografie, cornici e grana sulle nuove superfici; intervenire sui trattamenti di presentazione senza alterare i file fotografici originali.

### Fase 4 — Favicon e identità esterna

Il generatore esistente legge `app/icon.svg` e produce ICO a 16/32/48 px, Apple Touch a 180 px e marchio PNG a 512 px. Aggiornare prima la sorgente e poi rigenerare tutti i derivati, evitando modifiche manuali incoerenti tra formati.

- [x] Ricolorare `app/icon.svg` mantenendo forma e monogramma.
- [x] Rigenerare `app/favicon.ico` e controllare ogni dimensione inclusa.
- [x] Rigenerare `app/apple-icon.png` a 180 × 180.
- [x] Rigenerare `public/brand/fornasarig-512.png` a 512 × 512.
- [x] Verificare leggibilità della favicon a dimensione reale su interfacce browser chiare e scure.
- [x] Aggiornare `viewport.themeColor` al nuovo fondo chiaro.
- [x] Verificare i riferimenti generati alle icone e il logo nei dati strutturati; cercare eventuali ulteriori manifest o asset aggiunti nel frattempo.

### Fase 5 — Immagini di condivisione

Il generatore comune `lib/og.tsx` contiene colori petrolio, ambra e grigio-verdi propri, indipendenti dal CSS. Impostare fondo azzurro chiaro, marchio e titoli blu scuro, dettagli blu e sottotitoli leggibili, conservando formato 1200 × 630 e contenuti specifici di ogni pagina.

- [x] Aggiornare fondo, monogramma, filetto, titoli, sottotitoli, separatore e punto decorativo nel generatore comune.
- [x] Generare e ispezionare l'immagine della home tramite `app/opengraph-image.tsx`.
- [x] Generare e ispezionare l'immagine di medicina felina.
- [x] Generare e ispezionare l'immagine delle prestazioni.
- [x] Generare e ispezionare l'immagine della guida gatto.
- [x] Generare e ispezionare l'immagine dei contatti.
- [x] Controllare che ogni pagina emetta i metadati Open Graph e Twitter corretti, con URL assoluti coerenti con l'ambiente e immagini raggiungibili.
- [x] Verificare `og:image`, relativi dati dimensionali e `twitter:image`; se l'immagine Twitter non viene risolta dalla configurazione attuale, prevedere il riferimento esplicito alla nuova immagine.
- [x] Verificare anche il riferimento all'immagine nei dati strutturati della home.
- [x] Controllare margini, ritagli e leggibilità delle immagini in anteprime ridotte.

### Fase 6 — Verifica prima del rilascio

- [x] Eseguire una ricerca finale dei vecchi colori in sorgenti e generatori, distinguendo fotografie, maschere tecniche e note storiche dai residui da correggere.
- [x] Eseguire `npm run lint` e `npm run build`, registrando gli esiti e distinguendo eventuali problemi preesistenti.
- [x] Verificare tutte le cinque pagine almeno a 375, 768 e 1440 px, con controllo aggiuntivo vicino al cambio dell'header a 1280 px.
- [x] Controllare header iniziale e dopo scroll, menu, footer, pulsanti, hover, focus e selezione testo.
- [x] Misurare contrasto minimo 4,5:1 per testo normale e 3:1 per testo grande; verificare 3:1 per componenti e indicatori visivi essenziali rispetto ai colori adiacenti, dove applicabile.
- [x] Verificare contrasto reale su fotografie, gradienti e superfici traslucide, senza affidarsi solo ai token nominali.
- [x] Verificare Chrome e il browser integrato, inclusi breakpoint, favicon e superfici traslucide.
- [ ] Verificare Safari e un dispositivo iOS reale prima della pubblicazione; la verifica responsive a 375 px non sostituisce questo controllo.
- [x] Confermare che navigazione, ancore, WhatsApp, indicazioni e copia del messaggio mantengano il comportamento precedente.
- [x] Confrontare prima/dopo e documentare eventuali difetti residui.
- [x] Preparare un'anteprima completa con home, pagina interna, favicon e immagini social per la revisione dell'utente.

### Fase 7 — Rilascio successivo e cache

L’implementazione locale è completata. La pubblicazione e i controlli sulle cache esterne restano una fase successiva, da eseguire quando richiesta.

- [ ] Pubblicare la versione verificata quando richiesto, conservando un riferimento alla versione precedente per ripristino.
- [ ] Controllare sul dominio pubblico tutte le icone e le cinque immagini social, inclusi URL e risposta HTTP.
- [ ] Verificare anteprime per WhatsApp, Facebook, LinkedIn e X tramite strumenti disponibili, senza inviare messaggi o pubblicare post non richiesti.
- [ ] Richiedere una nuova acquisizione delle anteprime tramite strumenti delle piattaforme, dove disponibile; non assumere che una nuova build svuoti le loro cache.
- [ ] Se necessario, adottare URL versionati degli asset e aggiornare coerentemente i metadati, senza cambiare gli URL canonici delle pagine.
- [ ] Verificare favicon con cache pulita e in una nuova sessione browser; annotare eventuali cache residue delle piattaforme come verifica ancora aperta.

## 5. Criteri di completamento

La migrazione è pronta per il rilascio quando tutte le pagine usano la nuova palette, nessun testo è rimasto configurato per il vecchio fondo scuro, header e menu funzionano in ogni stato, e favicon, marchio, QR e cinque immagini social sono stati aggiornati e verificati. L'aspetto complessivo deve essere luminoso, con bianco e azzurro predominanti e blu scuro riservato soprattutto ai contenuti.

Il completamento sul sito pubblico richiede anche le verifiche della fase 7. Non segnare come verificate le anteprime di piattaforme non accessibili: riportare la limitazione e lasciare aperta la relativa voce.

## 6. Registro progressi

| Data | Attività | Stato / evidenza |
| --- | --- | --- |
| 14 settembre 2026 | Analisi dei file e redazione del piano | Completato; nessuna modifica a codice o asset |
| 14 settembre 2026 | Palette adottata e contrasti misurati | Completato; rapporti riportati sotto |
| 14 settembre 2026 | Migrazione delle cinque pagine e dei componenti | Completato; 15 verifiche responsive senza overflow o immagini mancanti |
| 14 settembre 2026 | Icone, marchio, QR e immagini social | Completato; dimensioni verificate e QR decodificato |
| 14 settembre 2026 | Lint, build e verifica visiva locale | Superati lint, build e controlli Chrome/browser integrato; Safari/iOS reale da verificare |
| 14 settembre 2026 | Anteprima preparata | Disponibile su http://127.0.0.1:3100/; revisione dell’utente da eseguire |
| — | Pubblicazione e controlli cache | Fase futura |


## 7. Evidenze dell’implementazione

- Stato iniziale Git: nessuna modifica a file tracciati; presente il solo piano non tracciato. La successiva richiesta dell’utente autorizza commit e push su un nuovo branch; nessun deploy manuale eseguito.
- Palette applicata in `app/globals.css`; token distinti `surface`, `surface-alt`, `surface-blue`, `heading`, `ink`, `muted`, `action`, `action-hover`. Nessun residuo dei vecchi token o codici petrolio/ambra/beige nei sorgenti attivi e negli asset vettoriali controllati.
- Header bianco traslucido al 92% anche sopra la foto; marchio blu scuro in ogni stato. Eliminati gli stati del marchio e del pulsante principale progettati per fondi scuri.
- Gradienti fotografici azzurri, grana attenuata, fotografie originali invariate. Footer e fasce interne convertiti in azzurro chiaro. Testi secondari a bassa opacità sostituiti con `muted` opaco.
- Contrasti calcolati su bianco / bianco ghiaccio / azzurro / azzurro di supporto: titoli 11,67 / 10,92 / 10,15 / 9,18; testo principale 12,28 / 11,49 / 10,68 / 9,66; testo secondario 6,12 / 5,73 / 5,32 / 4,82; azioni 6,31 / 5,91 / 5,49 / 4,97. Sono misure degli abbinamenti della palette, accompagnate da controllo visivo delle sovrapposizioni: non una certificazione completa di accessibilità.
- Controllate le cinque pagine a 375, 768 e 1440 px: nessun overflow orizzontale, nessuna immagine mancante. Verificati in Chrome anche 1024, 1279 e 1280 px: il menu cambia al breakpoint previsto e l’header mantiene testo scuro leggibile.
- Verificati apertura/chiusura del menu, chiusura con Escape, navigazione dal menu a Prestazioni, ancoraggio alla certificazione, header dopo scorrimento e focus da tastiera (outline blu da 2 px). La copia del modello restituisce «Modello copiato negli appunti». Link WhatsApp, destinazione delle indicazioni e contenuti sono conservati.
- `node scripts/genera-icone.mjs` completato. Frame ICO 16/32/48, Apple 180 × 180 e marchio 512 × 512 verificati; favicon ispezionata a dimensione reale su campiture chiare e scure.
- QR: modificato solo il colore del tracciato e aggiornato anche `scripts/genera-qr.py`. Geometria confrontata con Git e decodifica locale macOS Vision riuscita: `https://wa.me/393388273705`.
- Le cinque immagini social generate dalla build misurano 1200 × 630 e sono state ispezionate. Negli HTML prodotti dalla build, Open Graph e Twitter puntano alla stessa immagine corretta per ogni pagina; presenti tre riferimenti alle icone e `theme-color` azzurro. Nessuna necessità di duplicare le immagini Twitter.
- `npm run lint`, `npm run build` e `git diff --check` superati dopo le ultime modifiche; build statica di 17 route completata.
- Evidenze locali: `/Users/utente/Documents/Codex/2026-09-14/la-x20/work/blue-qa/`. Il report responsive è `responsive.json`. Le catture full-page del browser integrato presentano artefatti di composizione e non vengono usate come anteprime finali; per queste sono state scelte catture del viewport e immagini social generate dalla build.
- Consegna: anteprima locale, cattura della home e tavola delle immagini social in `/Users/utente/Documents/Codex/2026-09-14/la-x20/outputs/blue/`. I controlli Safari/iOS reale e cache delle piattaforme rimangono esplicitamente aperti.


## 8. Estensione — pulsanti WhatsApp e branch

- [x] Uniformare al blu azione tutti i pulsanti WhatsApp: hero, header, menu mobile, CTA nelle pagine e pulsante flottante.
- [x] Usare testo e icona bianchi, con hover e pressione in blu più scuro.
- [x] Eliminare i token verdi WhatsApp non più utilizzati.
- [x] Creare il branch `codex/blue-palette`.
- [x] Verificare lint, build e resa visiva finale: lint e build superati; pulsanti blu e icone bianche verificati nel browser.
- [x] Eseguire commit e push di tutte le modifiche sul nuovo branch: commit di implementazione `9e27e85`, pubblicato su `origin/codex/blue-palette`.

Repository di consegna: https://github.com/fbattistiol02-cloud/Ambulatorio_Fornasarig/tree/codex/blue-palette. Il branch `main` non è stato modificato.
