# IMPLEMENTATION V1 — Ambulatorio Veterinario Fornasarig

Data: 12 settembre 2026

Stato: V1 implementata e verificata in locale

Ambito: direzione visiva, contenuti e interfaccia frontend

## Obiettivo

Rifinire il sito mantenendo l'elemento apprezzato dalla dottoressa: una fotografia a tutta larghezza come sfondo della prima schermata, integrata con una morbida sfumatura verde petrolio e testo sovrapposto.

Il miglioramento deve arrivare da un'inquadratura più intenzionale, una velatura più precisa, una gerarchia tipografica più chiara e un percorso verso WhatsApp immediato. La percezione desiderata è professionale, accogliente e curata.

Il piano è stato inizialmente creato senza modificare il sito. Dopo la successiva autorizzazione dell’utente, gli interventi frontend V1 sono stati implementati e verificati in locale. Backend, dipendenze e configurazione di pubblicazione non sono stati modificati.

## Decisioni già concordate

- [x] Mantenere la fotografia come sfondo a tutta larghezza della prima schermata.
- [x] Mantenere la sfumatura verde petrolio e l'atmosfera morbida dell'apertura.
- [x] Escludere la proposta con immagine separata a destra del testo.
- [x] Conservare un titolo principale grande e serif.
- [x] Migliorare il ritaglio degli animali e ridurre il testo nella prima schermata.
- [x] Rendere WhatsApp il contatto principale.
- [x] Prevedere una sezione avorio luminosa dopo l'apertura fotografica.
- [x] Creare inizialmente il piano e la checklist; implementazione successivamente autorizzata dall’utente.

## Vincoli

- Non sono disponibili fotografie della dottoressa o degli interni dell'ambulatorio.
- Non chiedere nuovi materiali o informazioni alla dottoressa per portare avanti questa revisione.
- Non usare fotografie di repertorio o immagini generate come se rappresentassero la professionista, i locali o i suoi pazienti reali.
- La dottoressa preferisce i messaggi WhatsApp e non vuole incentivare le telefonate.
- Non proporre ecocardiografie o ecografie addominali, nemmeno attraverso immagini, icone o descrizioni ambigue.
- Non inventare orari, tempi di risposta, disponibilità, servizi, recensioni, qualifiche o promesse cliniche.
- Conservare i recapiti e le informazioni professionali già presenti nel progetto; la revisione visiva non ne costituisce una verifica indipendente.
- Non introdurre backend, moduli di raccolta dati, calendari di prenotazione, chatbot o automazioni.
- Le illustrazioni nelle sezioni successive restano un'idea facoltativa, esclusa dalle attività necessarie della V1. Non sostituiscono lo sfondo fotografico.

## 1. Fotografia e inquadratura

### Intervento previsto

Partire dalla fotografia attuale del cane e del gatto. Nell'inquadratura mostrata, il gatto è molto in basso, il cane si distingue poco e una grande area chiara occupa la parte superiore destra.

Studiare un ritaglio che renda riconoscibili entrambi gli animali e porti i volti più in alto, mantenendo sufficiente spazio visivo tranquillo dietro il testo. La fotografia deve continuare a occupare l'intera apertura: nessun pannello fotografico separato.

Solo se l'originale non consente una composizione soddisfacente, selezionare una fotografia alternativa con atmosfera simile e inquadratura più adatta. Preferire soggetti tranquilli, luce morbida e assenza di ambienti o strumenti che suggeriscano servizi non offerti. Verificare i diritti d'uso dell'eventuale immagine sostitutiva.

### Checklist

- [x] Esaminare l'originale della fotografia attuale e i margini disponibili per il ritaglio.
- [x] Definire un'inquadratura desktop con cane e gatto riconoscibili.
- [x] Ridurre il peso dell'area chiara priva di soggetti nella parte superiore destra.
- [x] Portare i volti in una posizione più equilibrata rispetto al testo.
- [x] Definire un'inquadratura mobile dedicata alla composizione verticale.
- [x] Evitare testo, pulsanti o barre sovrapposti agli occhi e ai musetti.
- [x] Registrare la scelta finale: fotografia attuale oppure alternativa motivata.
- [x] Non applicabile: nessuna fotografia alternativa selezionata; mantenuto il file già presente nel progetto.

**Criterio di completamento:** l'apertura conserva il carattere fotografico a pieno sfondo, gli animali sono leggibili e il ritaglio appare intenzionale sia su desktop sia su mobile.

## 2. Sfumatura e trattamento del colore

### Intervento previsto

Conservare il verde petrolio dell'identità attuale. Rendere la velatura più profonda dietro il testo, con un passaggio graduale nella parte centrale e maggiore leggibilità della fotografia in corrispondenza degli animali.

La sensazione morbida deve derivare principalmente dalla velatura di colore. Evitare una sfocatura uniforme aggiuntiva che cancelli occhi, pelo e dettagli espressivi. Mantenere gli accenti caldi con discrezione.

### Checklist

- [x] Definire la distribuzione della velatura in funzione della fotografia scelta.
- [x] Assicurare un fondo sufficientemente scuro dietro titoli, descrizioni e navigazione.
- [x] Conservare dettaglio visibile sui volti degli animali.
- [x] Eliminare eventuali stacchi netti o aree dall'aspetto grigio e spento.
- [x] Adattare la sfumatura alla disposizione verticale del mobile.
- [x] Verificare il contrasto del testo e la riconoscibilità dei pulsanti.

**Criterio di completamento:** la fotografia appare morbida e integrata con il sito, mentre testi e soggetti restano chiaramente leggibili.

## 3. Gerarchia e contenuti della prima schermata

### Intervento previsto

Conservare il titolo principale e ridurre il peso della frase sulla medicina felina, che oggi compete visivamente con esso. Mantenere un accento caldo sulle parole «medicina felina», eliminando la sottolineatura decorativa che può suggerire un collegamento.

Spostare il paragrafo sulla diagnostica nella sezione delle prestazioni, integrandolo con i contenuti esistenti senza duplicazioni. Nella prima schermata devono emergere attività, luogo, identità professionale e contatto.

### Gerarchia editoriale proposta

| Livello | Contenuto | Indicazione visiva |
| --- | --- | --- |
| Occhiello | Ambulatorio veterinario · Percoto | Piccolo e discreto |
| Titolo principale | Cura veterinaria per cani e gatti. | Grande, serif, elemento testuale dominante |
| Frase di accompagnamento | Con un'attenzione particolare alla medicina felina. | Più piccola del titolo; accento caldo sulla medicina felina |
| Identità professionale | Dott.ssa Elena Fornasarig — D.V.M. · GPCert Medicina Felina | Compatta, leggibile, distinta dalla frase di accompagnamento |
| Azione principale | Scrivi su WhatsApp | Pulsante ben riconoscibile |
| Microtesto | Per informazioni e appuntamenti. | Vicino al pulsante, breve e leggibile |
| Azione secondaria | Come raggiungerci | Collegamento alle indicazioni, subordinato a WhatsApp |
| Informazione locale | Via Marconi 7/B · Percoto | Riga discreta nella parte bassa |

La gerarchia è una proposta operativa: gli a capo devono essere adattati allo spazio disponibile senza cambiare il significato dei contenuti.

### Checklist

- [x] Conservare il titolo principale grande e serif.
- [x] Ridurre dimensione e peso visivo della frase sulla medicina felina.
- [x] Rimuovere la sottolineatura decorativa da «medicina felina».
- [x] Rendere compatta e leggibile la riga con nome e qualifiche.
- [x] Spostare il paragrafo sulla diagnostica nell'area prestazioni senza ripeterlo.
- [x] Presentare le radiografie con un nome preciso, evitando di suggerire ecografie disponibili.
- [x] Rivedere spaziature e lunghezza delle righe per dare respiro al pulsante principale.
- [x] Controllare gli a capo su desktop e mobile.

**Criterio di completamento:** si distinguono immediatamente il titolo principale, la breve presentazione e l'azione WhatsApp; nessun blocco secondario compete con il titolo.

## 4. WhatsApp e indicazioni

### Intervento previsto

Mantenere il collegamento WhatsApp esistente e uniformare il testo del pulsante a «Scrivi su WhatsApp». Farlo emergere chiaramente dal verde dello sfondo attraverso contrasto, spaziatura e gerarchia.

Sostituire «Risposta rapida su WhatsApp» con «Per informazioni e appuntamenti». Non promettere tempi di risposta. Presentare l'appuntamento come una richiesta da concordare.

Usare «Come raggiungerci» per le indicazioni stradali. Eliminare formulazioni come «Oppure vieni in ambulatorio», che possono suggerire una visita senza appuntamento. Dove serve una distinzione, preferire «Richiedi un appuntamento» a «Prenota una visita».

### Checklist

- [x] Uniformare i pulsanti di contatto a «Scrivi su WhatsApp».
- [x] Rendere il pulsante principale chiaramente distinguibile dallo sfondo petrolio.
- [x] Sostituire il riferimento alla risposta rapida con il microtesto concordato.
- [x] Dare alle indicazioni stradali un peso visivo secondario.
- [x] Usare «Come raggiungerci» al posto dell'invito generico a presentarsi.
- [x] Eliminare la formula «Oppure vieni in ambulatorio» nella sezione contatti.
- [x] Mantenere chiara l'indicazione «Si riceve su appuntamento».
- [x] Rivedere gli inviti alla prenotazione per chiarire che giorno e orario vanno concordati.
- [x] Sostituire l'icona del telefono accanto a «Su appuntamento» con un calendario.
- [x] Verificare la coerenza di header, prima schermata, barra mobile, pulsante flottante, contatti e footer.
- [x] Verificare i collegamenti WhatsApp e alle indicazioni senza inviare messaggi.

**Criterio di completamento:** l'utente comprende che deve scrivere su WhatsApp per concordare l'appuntamento; le indicazioni aiutano a raggiungere lo studio senza suggerire accesso libero o contatto telefonico.

## 5. Passaggio alla sezione successiva

### Intervento previsto

Dopo l'apertura fotografica, introdurre una superficie avorio luminosa con una presentazione breve della dottoressa. Usare nome, qualifica e informazioni già presenti, senza aggiungere una biografia immaginata o una fotografia sostitutiva del ritratto.

Integrare questo contenuto nell'attuale area di presentazione dell'ambulatorio, coordinandolo con il profilo professionale già presente più avanti. Evitare di creare un nuovo blocco che ripeta gli stessi dati. La fascia informativa sotto l'apertura può restare, purché compatta e coerente con il passaggio alla sezione chiara.

Questa V1 non richiede una riorganizzazione completa delle altre sezioni.

### Checklist

- [x] Definire il passaggio dalla fotografia alla superficie avorio.
- [x] Preparare una presentazione breve della dottoressa usando le informazioni esistenti.
- [x] Dare rilievo tipografico al nome senza simulare un ritratto o una firma personale.
- [x] Ridurre le ripetizioni tra presentazione dell'ambulatorio e profilo professionale.
- [x] Mantenere ordinata e compatta l'eventuale fascia informativa intermedia.
- [x] Verificare che il cambio di luminosità dia risalto all'apertura e continuità alla pagina.

**Criterio di completamento:** lo scorrimento introduce una sezione chiara, breve e utile, con una presentazione riconoscibile della professionista e senza informazioni duplicate inutilmente.

## 6. Verifica finale della V1

Verifiche completate dopo l’implementazione. Metodi, formati e limiti della verifica sono riportati nelle evidenze qui sotto.

### Checklist di accettazione

- [x] La fotografia è ancora uno sfondo a tutta larghezza, con testo sovrapposto.
- [x] L'atmosfera verde petrolio morbida apprezzata dalla cliente è conservata.
- [x] Gli animali hanno un'inquadratura equilibrata e restano riconoscibili.
- [x] Il titolo principale prevale chiaramente sul resto del testo.
- [x] La prima schermata contiene meno testo e più spazio intorno all'azione principale.
- [x] WhatsApp è immediatamente identificabile come contatto principale.
- [x] Non compaiono promesse di risposta rapida o inviti a presentarsi senza appuntamento.
- [x] Le indicazioni stradali sono accessibili e visivamente secondarie.
- [x] La sezione avorio successiva presenta la dottoressa in modo breve e coerente.
- [x] Nessun contenuto suggerisce ecocardiografie o ecografie addominali disponibili.
- [x] Il layout è controllato su mobile stretto, mobile standard, tablet e desktop.
- [x] Testi, pulsanti e navigazione non si sovrappongono ai volti o tra loro.
- [x] La barra mobile e il pulsante flottante non coprono informazioni o azioni utili.
- [x] Testi e comandi restano leggibili e utilizzabili con ingrandimento e navigazione da tastiera.
- [x] Il caricamento della fotografia non produce spostamenti visivi fastidiosi.
- [x] Eventuali transizioni rimangono discrete e rispettano la preferenza per movimento ridotto.
- [x] Il risultato è confrontato con lo screenshot di partenza, sugli stessi formati.

## Ordine di lavoro e avanzamento

Prima definire fotografia e ritaglio; poi regolare la sfumatura sulla composizione scelta. Procedere con gerarchia e contenuti, percorso WhatsApp e sezione successiva. Concludere con la verifica dell'insieme.

| Fase | Stato | Evidenza del completamento |
| --- | --- | --- |
| Brief e vincoli | Completato | Decisioni riportate in questo documento |
| 1. Fotografia e inquadratura | Completato | Originale invariato; composizioni desktop, tablet e mobile verificate |
| 2. Sfumatura e colore | Completato | Maschera e velatura responsive; contrasto CTA calcolato |
| 3. Gerarchia e contenuti | Completato | Hero alleggerita, medicina felina subordinata, radiografie esplicite |
| 4. WhatsApp e indicazioni | Completato | URL invariati, etichette coerenti, barre e menu verificati |
| 5. Sezione successiva | Completato | Presentazione avorio e profilo professionale coordinati |
| 6. Verifica finale | Completato | Build, TypeScript, lint e controlli nel browser completati |

Spuntare ogni voce solo quando l'attività è stata svolta e verificata. Per le voci condizionali non necessarie, annotare «Non applicabile» con una breve motivazione. Aggiornare gli stati della tabella in «In corso» o «Completato» e registrare gli eventuali punti rimasti aperti.

## Registro aggiornamenti

| Data | Aggiornamento | Punti aperti |
| --- | --- | --- |
| 12 settembre 2026 | Creato il piano V1 sulla base delle modifiche concordate. Nessun intervento sul sito eseguito in questa fase. | Tutte le attività operative sono da iniziare. |
| 12 settembre 2026 | Implementata la V1 e completata la verifica locale dopo il ripristino dell’anteprima. | Nessuna attività frontend V1 aperta. Commit e pubblicazione delle modifiche non eseguiti in questa fase. |

## Evidenze della verifica V1

- **Fotografia:** mantenuto `public/foto/cane-gatto.jpg`, originale 2400 × 3600 già nel repository. Nessuna modifica al file, nessun nuovo asset e nessuna immagine generata. La provenienza disponibile è registrata in `CREDITI-FOTO.md`.
- **Composizione:** fondale continuo con maschera ai bordi; soggetti fuori dall’area principale del testo su desktop e sopra il testo su mobile. Posizionamento specifico per tablet per sollevare i musetti rispetto all’occhiello.
- **Formati controllati:** 320 × 740, 390 × 844, 768 × 1024, 1024 × 768, 1280 × 900 e 1440 × 900. La hero è stata confrontata con la schermata di partenza, inclusa la composizione desktop da 1440 pixel.
- **Reflow e ingrandimento:** verificato anche il layout a 640 × 450 CSS pixel, equivalente allo spazio di impaginazione disponibile al 200% su una finestra 1280 × 900. Nessun overflow orizzontale e nessun titolo, paragrafo o collegamento tagliato lateralmente. Questa è una verifica di reflow: il comando di zoom nativo non è esposto dal browser di verifica e non viene dichiarato come test eseguito su un dispositivo reale.
- **Tastiera:** verificati Tab, Shift+Tab, ciclo del focus nel menu mobile, chiusura con Escape e ritorno del focus al pulsante menu. Il menu si chiude selezionando una sezione.
- **Contatti:** i collegamenti WhatsApp mantengono numero e messaggio precompilato originali. Controllati gli href senza inviare messaggi. Nessun link `tel:` nella pagina. Indicazioni Maps mantenute sul recapito esistente.
- **Barre flottanti:** assenti all’inizio; disponibili dopo il pulsante della hero; nascoste nel menu aperto e quando si raggiungono contatti e footer. Verificati stato e disposizione nel browser.
- **Leggibilità:** contrasto del nuovo pulsante chiaro 8.92:1; pulsante verde con testo bianco 7.67:1. Titolo principale distinto dalla frase sulla medicina felina. Focus della hero evidenziato con l’accento caldo.
- **Caricamento e movimento:** entrambe le fotografie risultano caricate. Spazio della hero riservato prima del caricamento; nessun salto visivo osservato nelle verifiche. Conservate le regole `prefers-reduced-motion` e la gestione corrispondente di `Reveal`, verificate nel codice. Non è stato eseguito un benchmark Lighthouse né un cambio delle preferenze del sistema operativo.
- **Verifica tecnica:** `npm run build` completato con controllo TypeScript e prerendering statico; `npm run lint` completato senza errori; `git diff --check` senza errori.
- **Perimetro:** nessun backend, modulo, calendario, chatbot, dipendenza o configurazione di hosting aggiunti. Nessun servizio clinico inventato; ecocardiografie ed ecografie addominali non sono presentate tra le prestazioni.

## Aggiornamento fotografie fornite dalla dottoressa — 12 settembre 2026

Questo aggiornamento successivo sostituisce la scelta fotografica iniziale
registrata nelle evidenze V1; il fondale sfumato e l’impostazione approvata
restano invariati.

- [x] Inserito il gattino arancione come sfondo della hero.
- [x] Sostituito il gatto con la zampa sollevata con il gatto bianco e nero sdraiato.
- [x] Conservati i due WebP originali e il formato 4:3 nella sezione felina.
- [x] Aggiornati testi alternativi, README e provenienza delle fotografie.
- [x] Verificati ritagli e caricamento su desktop (1440 × 900), tablet (768 × 1024) e mobile (390 × 844); nessun overflow orizzontale su mobile.
- [x] Completati lint e build dopo la sostituzione; hash dei WebP identici ai file forniti.
