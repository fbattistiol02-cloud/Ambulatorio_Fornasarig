# Piano di implementazione — Ambulatorio Veterinario Fornasarig

Stato: frontend implementato e verificato in locale su `work-in-progress`; pubblicazione e verifiche negli account esterni ancora aperte. Dominio e lancio rinviati a dopo la revisione e approvazione del cliente.

Repository: `/Users/utente/Claude Code project/ambulatorio-fornasarig/`
Branch di lavoro: `work-in-progress`

## Obiettivo e perimetro

Completare l’identità del sito nelle schede del browser e nelle condivisioni, rendere più chiari e accoglienti i percorsi di contatto e rifinire la SEO locale prima della consegna.

L’utente ha autorizzato l’implementazione del piano. Le modifiche sono applicate localmente; non sono stati eseguiti push, merge o pubblicazioni. Non sono previsti backend, database, moduli di prenotazione, account o nuove API. Le fotografie e il loro trattamento visivo restano invariati. Si conserva il sistema grafico esistente: verde petrolio, avorio, ambra e tipografia editoriale.

Le informazioni sull’attività devono restare aderenti ai dati confermati: non aggiungere orari, servizi, tempi di risposta, qualifiche o recensioni non verificati.

## Sequenza concordata con il cliente

La fase attuale riguarda esclusivamente lo sviluppo sul branch `work-in-progress` e la preparazione della versione da revisionare. Il dominio non è ancora pronto e non è un requisito per completare questa fase. Prima si presenta il sito al cliente, si recepiscono gli eventuali feedback e si ottiene la sua approvazione; solo dopo si affrontano dominio, pubblicazione, Search Console e verifiche pubbliche. Non sono previsti merge su `main` o pubblicazioni in produzione durante la fase di sviluppo.

## Come usare la checklist

Spuntare una voce solo quando il risultato è stato verificato. La sezione 6 è una checklist futura, da avviare solo dopo l’approvazione del cliente: le sue voci non contano come attività mancanti per la consegna della versione di revisione. Annotare sotto la voce eventuali impedimenti o evidenze. Concept, asset definitivi e integrazione sono completati. I controlli ancora aperti richiedono dominio pubblico, accessi esterni o dispositivi reali.

## 1. Preparazione e verifica iniziale

- [x] Individuato e verificato il branch `work-in-progress`.
- [x] Esaminati struttura, testi, metadati e asset esistenti nel repository.
- [x] Approvata dall’utente la direzione delle modifiche.
- [x] Creato il piano con checklist.
- [x] All’avvio dell’implementazione, verificare nuovamente branch e modifiche locali.
- [x] Leggere le istruzioni del repository e la documentazione Next.js locale pertinente prima di scrivere codice.
- [x] Acquisire un riferimento visivo delle cinque pagine su desktop e mobile per confrontare il risultato finale.
- [ ] Identificare l’ambiente locale o di anteprima disponibile per la revisione, senza richiedere un dominio definitivo.
- [ ] Verificare che eventuali anteprime pubbliche di sviluppo siano escluse dall’indicizzazione.

## 2. Favicon e identità nelle condivisioni

### Direzione approvata

Monogramma F avorio con accento verticale ambra su verde petrolio. Copertina tipografica coordinata con nome della professionista, attività e località.

Concept approvati disponibili nella conversazione e nella cartella outputs del piano originale:

- `favicon-fornasarig-concept.png`
- `condivisione-fornasarig-concept.png`

I concept sono stati tradotti in asset definitivi: monogramma a tracciati SVG, ICO, Apple Touch, PNG 512 e cinque copertine statiche da 1200 × 630 px. La copertina usa Newsreader e Inter Tight locali, con le rispettive licenze OFL.

### Favicon

- [x] Generato il concept grafico.
- [x] Preparare una versione definitiva con forme nitide, colori coerenti e proporzioni leggibili in piccolo.
- [x] Uniformare posizione e proporzioni di F e filetto tra favicon e marchio nella copertina.
- [x] Preparare favicon SVG, fallback ICO nelle dimensioni utili e icona Apple Touch da 180 × 180 px.
- [x] Integrare gli asset nel sistema di icone già presente, evitando riferimenti duplicati o obsoleti.
- [x] Verificare la leggibilità a 16, 32 e 48 px e la resa nelle schede chiare e scure del browser.
- [ ] Verificare il caricamento delle icone e i riferimenti nell’HTML della home nell’ambiente di sviluppo.

Criterio di completamento: monogramma riconoscibile anche in miniatura, senza ritagli o dipendenze da font installati sul dispositivo. La comparsa nei risultati Google dipende anche dalla successiva scansione.

### Copertina per la condivisione dei link

- [x] Generato il concept grafico.
- [x] Preparare il master definitivo da 1200 × 630 px, ottimizzato per il web.
- [x] Conservare il testo approvato: “Ambulatorio Veterinario”, “Dott.ssa Elena Fornasarig”, “Cura veterinaria per cani e gatti”, “Percoto · Pavia di Udine”.
- [x] Rifinire tipografia e spaziature usando il sistema visivo del sito e margini sicuri.
- [x] Integrare il nuovo design nel sistema Open Graph esistente.
- [x] Mantenere le anteprime specifiche delle pagine interne, applicando la stessa identità a Medicina felina, Prestazioni, Guida e Contatti.
- [x] Verificare titolo, descrizione, URL e immagine di condivisione per ciascuna pagina; predisporre i metadati della card per X se mancanti.
- [x] Verificare leggibilità in anteprima piccola e comportamento nei ritagli quadrati, senza presumere una resa identica su tutte le piattaforme.
- [ ] Verificare in locale o in anteprima le immagini generate e i metadati delle cinque pagine. I test delle piattaforme sul dominio definitivo sono rinviati alla sezione 6.

Criterio di completamento: nome, attività e località leggibili, identità coerente tra pagine e immagini correttamente caricate nell’ambiente di sviluppo. La copertina è un asset del sito e non configura automaticamente la foto del profilo WhatsApp dell’ambulatorio.

## 3. Testi e percorsi UX

### Prenotazione più accogliente

- [x] Nella pagina Contatti sostituire il passaggio che inizia con “Non esiste un accesso libero…” con: “Si riceve su appuntamento. Scrivici prima di venire, così possiamo concordare giorno e orario della visita.”
- [x] Evitare di ripetere “Si riceve su appuntamento” nello stesso blocco dopo la sostituzione.
- [x] Verificare coerenza con gli altri testi di prenotazione nelle cinque pagine.

### Spiegazione del pulsante WhatsApp

- [x] Inserire vicino ai pulsanti principali: “Si apre WhatsApp con un messaggio già pronto da completare.”
- [x] Usare la spiegazione nei punti di ingresso e di prenotazione senza ripeterla a ogni pulsante o appesantire la barra mobile.
- [x] Verificare che il testo precompilato sia corretto per la pagina di provenienza e resti modificabile dall’utente.
- [x] Verificare i collegamenti su mobile e desktop, senza inviare messaggi.

### Sezione dedicata ai cani

- [x] Sostituire “I cani restano una parte centrale dell’attività.” con “Cura e attenzione anche per il tuo cane.”
- [x] Rileggere il paragrafo collegato e armonizzarne il tono con il nuovo titolo, mantenendo esclusivamente le prestazioni già confermate.
- [x] Verificare gli a capo del titolo su mobile e desktop, lasciando invariata la fotografia.

### Navigazione e collegamenti

- [x] Rinominare “Guida” in “Guida al gatto” nella navigazione visibile, senza modificare l’URL `/guida-gatto`.
- [x] Sostituire i tre “Vai alla pagina” della home con “Scopri la medicina felina”, “Scopri le prestazioni” e “Leggi la guida”.
- [x] Controllare coerenza delle etichette negli altri elementi di navigazione pertinenti.
- [x] Verificare che il menu rimanga leggibile e utilizzabile a tutte le larghezze.

Criterio di completamento: percorso comprensibile dalla prima visita fino all’apertura di WhatsApp, senza promesse nuove e senza modifiche alla struttura generale del sito.

## 4. Funzione “Salva il contatto” senza backend

- [x] Preparare un file vCard statico con nome dell’ambulatorio, nome della professionista, telefono, email e indirizzo. Omettere per ora il sito web: non inserire localhost, URL di anteprima o domini ipotetici.
- [x] Aggiungere “Salva il contatto” nella pagina Contatti come azione secondaria rispetto a WhatsApp.
- [x] Rendere comprensibile che l’azione apre o scarica una scheda da aggiungere alla rubrica.
- [x] Verificare caratteri accentati, numero con prefisso internazionale e indirizzo importato.
- [ ] Verificare il comportamento su iOS, Android e desktop, registrando eventuali piattaforme non disponibili per il test.

Criterio di completamento: il visitatore può aggiungere il contatto con gli strumenti del proprio dispositivo. Nessun dato viene raccolto dal sito e nessuna integrazione server è necessaria.

## 5. SEO delle pagine e sitemap

La base esistente include già canonical, descrizioni, sitemap e dati strutturati. Questa fase rifinisce e verifica quanto presente.

### Titoli

- [x] Aggiornare il titolo SEO della pagina Medicina felina verso “Medicina felina a Percoto | Fornasarig”.
- [x] Aggiornare il titolo SEO della pagina Prestazioni verso “Visite e prestazioni veterinarie a Percoto | Fornasarig”.
- [x] Gestire il template globale affinché non aggiunga una seconda volta il nome del sito.
- [x] Rivedere home, Guida e Contatti per ottenere titoli unici, descrittivi e coerenti; conservare quelli già adeguati.
- [x] Verificare che descrizioni e metadati social riflettano correttamente ogni pagina.

### Date della sitemap

- [x] Sostituire l’attuale data generata con `new Date()` con date di modifica sostanziale attendibili per pagina; se non disponibili, omettere `lastModified`.
- [x] Verificare che una build senza modifiche ai contenuti non produca nuove date editoriali.
- [ ] Controllare che la sitemap contenga i cinque percorsi previsti e che la base degli URL dipenda dalla configurazione dell’ambiente. In sviluppo sono attesi URL locali o di anteprima; la verifica del dominio definitivo è rinviata alla sezione 6.
- [ ] Verificare in sviluppo la coerenza dei dati strutturati con i contenuti visibili, senza fissare un dominio non ancora scelto.

Criterio di completamento: titoli senza duplicazioni e sitemap predisposta correttamente per le cinque pagine e i loro aggiornamenti, senza dipendenze dal dominio definitivo.

## 6. Fase futura — solo dopo l’approvazione del cliente

Questa fase resta rinviata: non va avviata durante l’attuale sviluppo e non blocca la revisione del cliente. Comprende dominio, lancio, SEO locale e controlli pubblici. Queste verifiche dipendono dalla disponibilità del dominio e, per gli account esterni, dall’accesso del proprietario. Non comportano la creazione di un backend. Gli aggiornamenti agli account saranno preparati per revisione e applicati nel perimetro successivamente autorizzato.

### Dominio e preparazione del lancio

- [ ] Confermare che il cliente abbia approvato la versione da pubblicare.
- [ ] Definire e configurare il dominio definitivo quando richiesto.
- [ ] Aggiungere il dominio confermato al file vCard.
- [ ] Preparare merge e pubblicazione in produzione nel perimetro richiesto.

### Profilo dell’attività su Google

- [ ] Identificare la scheda corretta dell’ambulatorio e verificarne lo stato di gestione.
- [ ] Confrontare nome, indirizzo, telefono e sito con i dati pubblicati sul sito.
- [ ] Verificare categoria, descrizione e prestazioni dichiarate, senza ampliare i servizi confermati.
- [ ] Individuare e documentare eventuali informazioni incomplete o incoerenti.
- [ ] Preparare gli aggiornamenti necessari e farli applicare dall’account autorizzato.
- [ ] Verificare il collegamento dalla scheda al dominio definitivo.

Non inserire orari inventati per completare campi mancanti e non intervenire sulle fotografie della scheda.

### Dominio, indicizzazione e dati strutturati

- [ ] Confermare l’URL di produzione e la configurazione che genera gli URL assoluti.
- [x] Controllare in locale i canonical delle cinque pagine e la coerenza con sitemap e Open Graph.
- [ ] Ripetere la verifica sul dominio pubblico definitivo.
- [x] Verificare `index, follow` nella configurazione normale e `noindex, follow` su tutte le cinque pagine in modalità preview Vercel.
- [ ] Confermare la stessa configurazione nelle risposte del dominio pubblico.
- [ ] Verificare codici di risposta e redirect verso la variante canonica del dominio.
- [x] Verificare parsing dei dati strutturati e coerenza dei recapiti con i dati del sito; aggiungere logo e immagine.
- [ ] Eseguire la validazione esterna dei dati strutturati sul dominio pubblico.
- [ ] Accedere alla proprietà corretta in Search Console o farne completare la verifica al proprietario.
- [ ] Inviare la sitemap definitiva e ispezionare le cinque URL.
- [ ] Registrare eventuali problemi di scansione o indicizzazione e le azioni necessarie.
- [ ] Verificare accessibilità pubblica di favicon e immagini social e lettura dei metadati con gli strumenti di anteprima.
- [ ] Verificare il risultato effettivo su WhatsApp e gestire eventuali anteprime in cache, senza inviare messaggi ad altre persone salvo richiesta esplicita.
- [ ] Ripetere i controlli essenziali sul sito pubblicato e aggiornare la checklist.

Criterio di completamento: configurazione pubblica coerente e verifiche documentate. L’effettiva indicizzazione e la comparsa delle nuove anteprime nei motori di ricerca possono richiedere tempo e non sono garantite dall’invio della sitemap.

## 7. Verifica della versione di sviluppo e revisione del cliente

- [x] Controllare tutte le cinque pagine su mobile e desktop.
- [x] Verificare menu, navigazione da tastiera, focus visibile, pulsanti e assenza di sovrapposizioni con la barra mobile.
- [x] Verificare a capo, leggibilità e contrasto dei nuovi elementi.
- [x] Verificare download del contatto, collegamenti WhatsApp e indicazioni stradali.
- [x] Eseguire build e controlli statici appropriati alle modifiche implementate.
- [x] Controllare il diff: nessuna fotografia alterata, nessun backend introdotto, nessun cambiamento fuori perimetro.
- [x] Preparare un riepilogo delle modifiche con anteprime dei nuovi asset e stato dei controlli.
- [x] Distinguere chiaramente attività completate, verifiche non eseguibili e dipendenze dagli account esterni.
- [ ] Presentare al cliente la versione sul branch `work-in-progress` tramite l’ambiente di revisione disponibile.
- [ ] Raccogliere e recepire gli eventuali feedback del cliente.
- [ ] Verificare nuovamente le parti modificate in seguito ai feedback.
- [ ] Registrare l’approvazione del cliente prima di passare alla fase futura della sezione 6.

## Ordine operativo consigliato

1. Preparazione e riferimento visivo.
2. Asset definitivi e loro integrazione.
3. Testi UX, navigazione e contatto salvabile.
4. Titoli SEO e sitemap.
5. Verifica completa della versione di sviluppo e presentazione al cliente.
6. Eventuali revisioni e approvazione del cliente.
7. Solo dopo l’approvazione: dominio, lancio quando richiesto, controlli pubblici e attività negli account Google.

## Riferimenti

- [Google: favicon nei risultati di ricerca](https://developers.google.com/search/docs/appearance/favicon-in-search)
- [Google: titoli descrittivi delle pagine](https://developers.google.com/search/docs/appearance/title-link)
- [Google: sitemap e date di modifica](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: visibilità locale del Profilo dell’attività](https://support.google.com/business/answer/7091?hl=it)
- [Google: dati strutturati delle attività locali](https://developers.google.com/search/docs/appearance/structured-data/local-business)

## Evidenze dell’implementazione

- Branch: `work-in-progress`; modifiche locali non pubblicate.
- `npm run lint`: superato.
- `npm run build`: superato, inclusa verifica TypeScript; pagine, icone e copertine prerenderizzate staticamente.
- Browser: Chrome automatizzato, cinque pagine a 320, 390, 768, 1280 e 1440 px; 25 controlli senza overflow orizzontale e nessun errore JavaScript rilevato.
- Menu mobile: apertura, etichetta “Guida al gatto” e chiusura con Escape verificate.
- Metadati: cinque copertine PNG da 1200 × 630, card X coerenti con Open Graph, icone SVG/ICO/Apple Touch collegate.
- Contatto: download riuscito, formato vCard 3.0, CRLF, righe entro 75 ottetti, numero internazionale, email e indirizzo verificati. L’importazione nella rubrica su iPhone e Android reali resta da provare. La vCard omette l’URL web finché il dominio definitivo non è confermato; i recapiti sono già utilizzabili.
- Configurazione URL: verificati fallback locale, hostname di produzione Vercel e precedenza del dominio personalizzato, inclusa normalizzazione della barra finale.
- Preview: `noindex, follow` su tutte le cinque pagine; sitemap vuota; robots consente la scansione affinché il noindex venga letto.
- Fotografie, CSS fotografico, dipendenze applicative e backend: nessuna modifica.

## Dipendenze esterne e dati pronti per la consegna

Il deployment di produzione individuato nei metadati GitHub rimanda alla pagina di login Vercel. Non è stato possibile verificare pubblicamente le cinque pagine tramite quell’URL. Non viene assunto che questo sia anche il comportamento del dominio canonico, che resta da confermare. La ricerca pubblica non ha identificato con certezza la scheda Google dell’ambulatorio: non è stata dichiarata assente e non sono stati effettuati aggiornamenti ad account.

Per completare la parte esterna servono il dominio pubblico definitivo, la scheda corretta del Profilo dell’attività e l’accesso autorizzato alla proprietà Search Console. Nessuna pubblicazione è stata eseguita.

| Campo | Dato già confermato da usare nel confronto con Google |
| --- | --- |
| Nome | Ambulatorio Veterinario Dott.ssa Elena Fornasarig |
| Indirizzo | Via Guglielmo Marconi 7/B, 33050 Percoto — Pavia di Udine (UD) |
| Telefono / WhatsApp | +39 338 827 3705 |
| Email | elenafornasarig@hotmail.com |
| Ricevimento | Su appuntamento; nessuna fascia oraria da inventare |
| Prestazioni | Visite per cani e gatti, radiografie, esami di laboratorio, piccola chirurgia |
| Qualifica | Medico Veterinario, D.V.M., GPCert Medicina Felina |
| Sito | Da confermare prima di aggiornare scheda e vCard |

Testo pronto per un’eventuale descrizione della scheda, da confrontare prima con quella esistente:

> Ambulatorio veterinario della Dott.ssa Elena Fornasarig a Percoto, Pavia di Udine, dedicato alla salute di cani e gatti. Visite veterinarie, radiografie, esami di laboratorio e piccola chirurgia, con una preparazione specifica in medicina felina e certificazione GPCert Medicina Felina. Si riceve su appuntamento. Per informazioni e per concordare giorno e orario della visita, scrivi su WhatsApp.

Verifica conclusiva sulla build di produzione servita in locale: HTTP 200 per le cinque pagine, le cinque copertine, SVG, ICO, Apple Touch, logo PNG e vCard; indicizzazione normale e sitemap verificate. Anteprima delle icone a 16/32/48 px su sfondo chiaro/scuro e ritaglio quadrato della copertina controllati visivamente.
