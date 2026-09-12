# IMPLEMENTATION V2 — Ambulatorio Veterinario Fornasarig

Data: 12 settembre 2026

Stato: V2 implementata e verificata in locale.

Ambito: passaggio da pagina unica a sito di cinque pagine. Sistema visivo,
immagini, contenuti, percorso WhatsApp, SEO locale.

Legenda checklist: `[ ]` da fare · `[x]` fatto

---

## Obiettivo

Portare il sito da «corretto» a un lavoro che regga la fascia di prezzo per cui
viene venduto, senza nuove fotografie, senza nuove informazioni dalla dottoressa
e senza backend.

Il salto di qualità non può più arrivare dalla fotografia né dal racconto
personale. Deve arrivare da: architettura dei contenuti, disegno su misura,
sistema tipografico, information design al posto delle immagini mancanti,
percorso WhatsApp curato, prestazioni, accessibilità e ricerca locale.

## Decisioni già concordate

Sono decisioni prese, non attività da svolgere.

- [x] Sito di cinque pagine.
- [x] Le due fotografie della dottoressa restano come sono: nessun ritaglio,
      nessuna correzione colore, nessuna sostituzione. La hero è chiusa.
- [x] Le altre pagine usano immagini di archivio con licenza documentata,
      illustrazione su misura e tipografia (opzione 2).
- [x] Nessuna pagina biografica dedicata: identità e credenziali aprono la
      pagina Medicina Felina.
- [x] Il quinto slot diventa una guida per chi ha un gatto.
- [x] WhatsApp unico canale. Etichetta unica: «Scrivici su WhatsApp».
- [x] Si riceve solo su appuntamento.
- [x] Eco-cardio ed eco-addome restano escluse da testi, elenchi, icone e
      immagini.
- [x] Nessun backend, nessun modulo, nessun calendario, nessun chatbot.

## Vincoli

Il primo vincolo è nuovo rispetto alla V1 ed è quello che governa tutto il resto.

- **Non è più possibile chiedere nulla alla dottoressa.** Nessuna nuova
  informazione, nessuna conferma, nessun nuovo materiale.
- Le uniche fotografie disponibili sono le due già nel repository.
- Si può scrivere solo ciò che è già confermato in `lib/site.ts` oppure ciò che
  è vero in generale e verificabile pubblicamente. Nulla di ciò che il sito
  afferma deve dipendere da una conferma che non si può ottenere.
- Non inventare orari, tariffe, tempi di risposta, recensioni, biografia,
  prassi interne dell'ambulatorio o promesse cliniche.
- Le immagini di archivio non devono mai essere presentate come la dottoressa,
  i suoi locali o i suoi pazienti. Testi alternativi e crediti restano onesti,
  come già impostato in `CREDITI-FOTO.md`.
- Immagini fotorealistiche generate: escluse. Le illustrazioni a linea sono
  ammesse, perché sono disegni e non affermano di documentare nulla.
- Nessuna dipendenza runtime aggiuntiva oltre a quelle già presenti.

---

## 0. Sistema visivo trasversale

Questa sezione viene prima delle pagine perché ne determina l'aspetto.

### 0.1 Principio

Oggi il sito si comporta come un sito fotografico che non ha fotografie: è la
posizione peggiore possibile. Con due immagini e nessuna in arrivo, la premessa
va invertita. **Il sito diventa tipografico e illustrativo, e le fotografie
diventano accenti rari.**

La scarsità di immagini legge come misura se è sistematica e come povertà se è
subita. La differenza sta nel fatto che le pagine con poche immagini devono
sembrare progettate così, non svuotate.

Regola: **ogni fotografia della dottoressa compare una volta sola.** Il gattino
apre la Home, il gatto bianco e nero apre Medicina Felina. Nessun riuso.

### 0.2 Trattamento del colore

Le foto della dottoressa sono approvate e restano invariate. Di conseguenza
**sono loro il riferimento, e sono le immagini di archivio ad adattarsi a loro**,
non il contrario.

Carattere da replicare, letto dalle due foto esistenti: luce naturale o comunque
non da studio, ambiente domestico, distanza ravvicinata, saturazione media,
nessuna patina editoriale. Un'immagine di archivio lucida e perfetta accanto
alle sue stonerebbe di più, non di meno.

Regole operative:

- gradazione applicata **solo** alle immagini di archivio, in fase di
  preparazione del file, e calibrata sulle due foto esistenti;
- ombre leggermente verso il verde-petrolio `#062726`, alte luci verso l'avorio
  `#f0ebe1`, saturazione riportata a quella delle foto della dottoressa;
- niente duotone secco a due colori: risulta datato e allontanerebbe le immagini
  di archivio dal riferimento;
- **grana leggera e uniforme applicata via CSS a tutti gli slot fotografici**,
  incluse le foto della dottoressa. La grana è una texture sovrapposta, non una
  correzione: i file originali restano bit per bit quelli forniti, come richiede
  `CREDITI-FOTO.md`, e la resa complessiva si uniforma.

La preparazione dei file di archivio va fatta con lo script già presente,
`scripts/scarica-foto.py`, estendendone la tabella: ritaglio in coordinate
pixel sull'originale e gradazione, così il risultato è riproducibile e
verificabile invece che frutto di ritocchi manuali non documentati.

### 0.3 Regole di selezione delle immagini di archivio

Ammesso: luce naturale, ambiente domestico, soggetto a proprio agio, distanza
ravvicinata, palette che tende al caldo e ai neutri.

Escluso senza eccezioni: stetoscopio appoggiato al petto di un cane; veterinario
in camice che sorride in camera; soggetto ritagliato su fondo bianco; siringhe,
aghi, flebo; sala visita riconoscibile; qualunque apparecchiatura ecografica o
sonda; animale con collare elisabettiano; volti umani riconoscibili.

Il divieto dei volti umani non è estetico: un volto in un'immagine di archivio
su un sito di questo tipo viene letto come la professionista. Le mani no.

### 0.4 Bilanciamento cani e gatti

Entrambe le foto della dottoressa ritraggono gatti, ma il sito dichiara di
curare cani e gatti e le prestazioni valgono per entrambi.

Senza almeno un'immagine canina il sito contraddice visivamente ciò che scrive,
e chi ha un cane non si riconosce. **L'immagine del cane sulla Home non è
decorazione: è necessaria alla coerenza.**

### 0.5 Shortlist delle immagini di archivio

Candidate verificate una per una: esistenza della pagina, autore e licenza
controllati il 12 settembre 2026. Tutte risultano **gratuite sotto Licenza
Unsplash**; nessuna è Unsplash+ a pagamento.

Nessun file va scaricato prima dell'approvazione esplicita di questa tabella.

| Slot | Pagina | Soggetto | Autore | Pagina originale |
| --- | --- | --- | --- | --- |
| Cane a riposo | Home | Cane sdraiato su un divano, luce a strisce da persiana | belettenoir | https://unsplash.com/photos/NcM8r8uM4s8 |
| Mani e gatto | Prestazioni | Una mano tiene delicatamente la zampa di un gatto addormentato | DL314 Lin | https://unsplash.com/photos/6KUYdFD6HYs |
| Trasportino | Guida | Gatto bianco e arancione dentro un trasportino trasparente, luce diffusa | Oles Borys | https://unsplash.com/photos/OBu_nabEpAw |
| Gatto nascosto | Guida | Gatto grigio sdraiato sul tappeto sotto un divano | Peyman Shojaei | https://unsplash.com/photos/69jt0MnXL8E |
| Gatto che riposa | Guida | Gatto che dorme in una lama di sole | Alexander Chupikov | https://unsplash.com/photos/VVecHII1Abs |

Alternative già individuate, da verificare solo se una delle precedenti viene
scartata: `ymITgrOdv2c` (Andy Luo, due mani accarezzano un gatto rosso,
verificata e gratuita), `T-nPYpDTVxA`, `Cck4MGOFA9Y`, `pFLoVu4IKWI`.

Escluse a priori perché Unsplash+ a pagamento: `d7KktajtN6Q`, `QxRBQKGpZZE`,
`4-BumD3OBnA`, `IgGdwOeSy9A`, `g1GjUP0Lg5k`, `XY8FAdgfCXM`.

### 0.6 Illustrazione e icone su misura

È la voce che sostituisce la fotografia mancante e che giustifica concretamente
la fascia di prezzo. Tratto uniforme, stessa griglia, stesso spessore.

- quattro icone per le prestazioni, disegnate, al posto delle icone `lucide`
  generiche attualmente in uso;
- una sequenza illustrata per la Guida: trasportino aperto in casa, coperta di
  casa, telo sopra il trasportino, viaggio;
- una mappa disegnata di Percoto per la pagina Contatti, al posto di un riquadro
  Maps grigio;
- un monogramma per marchio e favicon;
- eventuale sigillo tipografico per il numero di albo.

`lucide-react` resta come dipendenza per le icone di interfaccia (frecce, menu,
chiusura); esce dalle icone di contenuto.

### 0.7 Tipografia

Inter e Source Serif 4 sono corrette e invisibili: sono le due scelte più
prevedibili di Google Fonts. Il cambio è uno degli interventi a più alta resa
per costo nullo.

- titoli: **Newsreader** al posto di Source Serif 4 (alternativa: Fraunces);
- testo corrente: **Inter Tight** al posto di Inter;
- entrambi disponibili tramite `next/font/google`, già configurato in
  `app/layout.tsx`; nessuna dipendenza nuova;
- le variabili `--font-sans` e `--font-serif` in `globals.css` restano le stesse:
  cambia solo ciò che ci viene assegnato dentro.

### 0.8 Gradiente, grana, movimento

- il gradiente verde-petrolio resta ed è la firma del sito. Va riusato come
  testata di ognuna delle cinque pagine — ogni pagina ne mostra una fetta
  diversa — così il sito si legge come un oggetto unico;
- grana uniforme sopra le superfici fotografiche e sopra il gradiente;
- transizioni tra pagine con View Transitions API: con cinque pagine è ciò che
  dà la sensazione di applicazione invece che di sito ricaricato;
- **correggere il comportamento di `Reveal`**: oggi, scorrendo velocemente, si
  vedono sezioni completamente vuote in attesa dell'intersection observer. Il
  contenuto deve essere visibile per impostazione predefinita e l'animazione
  deve essere un sovrappiù, mai una condizione per vedere il testo;
- `prefers-reduced-motion` resta rispettato ovunque, come già oggi.

### Checklist

- [x] Definire e documentare la gradazione calibrata sulle due foto esistenti.
- [x] Estendere `scripts/scarica-foto.py` con le nuove voci, ritagli e gradazione.
- [x] Far approvare la shortlist prima di scaricare qualunque file.
- [x] Verificare una seconda volta licenza e autore al momento del download.
- [x] Aggiornare `CREDITI-FOTO.md` con provenienza, autore e licenza di ogni nuovo file.
- [x] Applicare la grana uniforme senza modificare i file della dottoressa.
- [x] Disegnare le quattro icone delle prestazioni.
- [x] Disegnare la sequenza illustrata della Guida.
- [x] Disegnare la mappa di Percoto. — **Variato:** realizzato come diagramma di orientamento dichiaratamente non in scala. Motivo nelle evidenze.
- [x] Disegnare il monogramma e generare la favicon. — **Non applicabile:** `app/icon.svg` usa già lo stesso dispositivo del lockup (filetto ambra e iniziale in grazie). Ridisegnarlo avrebbe rotto la coerenza che si voleva costruire.
- [x] Sostituire i due caratteri e ricontrollare gerarchia e interlinee.
- [x] Portare il gradiente su tutte e cinque le testate.
- [x] Correggere `Reveal` perché il contenuto sia visibile senza JavaScript.
- [x] Introdurre le transizioni di pagina rispettando il movimento ridotto.

**Criterio di completamento:** aperte in sequenza, le cinque pagine sembrano
disegnate dalla stessa persona nello stesso momento; nessuna pagina sembra
svuotata per mancanza di materiale.

---

## 1. Architettura delle cinque pagine

### Intervento previsto

Il sito passa da pagina unica con ancore a cinque rotte reali. I `navLinks` in
`lib/site.ts` passano da ancore `#` a percorsi, e l'header va adeguato di
conseguenza.

| # | Rotta | Titolo pagina | H1 |
| --- | --- | --- | --- |
| 1 | `/` | *(titolo predefinito esistente)* | Cura veterinaria per cani e gatti. |
| 2 | `/medicina-felina` | Medicina felina | Il gatto non è un cane di piccola taglia. |
| 3 | `/prestazioni` | Prestazioni | Che cosa si fa in ambulatorio. |
| 4 | `/guida-gatto` | Guida per chi ha un gatto | Guida per chi ha un gatto. |
| 5 | `/contatti` | Contatti e come arrivare | Richiedi un appuntamento. |

Il modello `%s — Ambulatorio Veterinario Fornasarig` già presente in
`app/layout.tsx` resta valido per le pagine interne.

**Nota sull'H1 della Home.** La frase «Il gatto non è un cane di piccola taglia»
è la migliore del sito e meriterebbe l'apertura. Non viene però spostata in
Home, perché la gerarchia della prima schermata è stata approvata dalla
dottoressa nella V1 e non è possibile sottoporle una variante. Diventa quindi
l'H1 di Medicina Felina, dove è pertinente e dove non scavalca nulla di
approvato.

### Checklist

- [x] Creare le quattro rotte nuove sotto `app/`.
- [x] Convertire `navLinks` da ancore a percorsi.
- [x] Adeguare header desktop e menu mobile alla navigazione a cinque voci.
- [x] Indicare la pagina corrente nella navigazione, anche per lo screen reader.
- [x] Mantenere il footer identico su tutte le pagine.
- [x] Verificare che nessun collegamento interno punti più a un'ancora morta.

**Criterio di completamento:** le cinque pagine sono raggiungibili, la
navigazione segnala dove ci si trova e non resta alcun collegamento rotto.

---

## 2. Home

### Intervento previsto

La Home smette di contenere tutto e diventa una soglia: dice chi, cosa, dove, e
apre tre strade.

Struttura:

1. **Hero** — invariata. Fotografia del gattino, gradiente, gerarchia approvata
   nella V1, CTA WhatsApp.
2. **Presentazione breve** — superficie avorio, come da V1.
3. **Tre porte** verso Medicina Felina, Prestazioni e Guida. Ognuna con una
   frase vera, non una scheda con icona e tre parole.
4. **Fascia cane** — l'immagine canina con una riga che chiarisce che i cani
   sono parte centrale dell'attività. Il testo esiste già, oggi sepolto nella
   sezione felina.
5. **Chiusura contatti** — indirizzo, «Si riceve su appuntamento», CTA WhatsApp.

La fascia con le quattro icone (`TrustBar`) va rimossa: quattro riquadri con
icona sono il segnale visivo più comune dei siti sanitari di fascia bassa. I
contenuti che vale la pena tenere (certificazione, cani e gatti, su
appuntamento) rientrano nel testo.

### Checklist

- [x] Lasciare la hero esattamente com'è.
- [x] Riscrivere la presentazione breve senza duplicare la pagina felina.
- [x] Scrivere le tre porte con una frase di sostanza ciascuna.
- [x] Inserire la fascia cane con l'immagine approvata.
- [x] Rimuovere `TrustBar` e ricollocarne i contenuti nel testo.
- [x] Chiudere con indirizzo, appuntamento e WhatsApp.
- [x] Verificare che la Home non ripeta contenuti delle pagine interne.

**Criterio di completamento:** la Home si legge in meno di un minuto, dice cosa
si fa e dove, e porta con chiarezza alle altre quattro pagine.

---

## 3. Medicina Felina

### Intervento previsto

È la pagina che regge il posizionamento: nessun altro ambulatorio della zona può
rivendicare la stessa cosa. Tutto il resto — radiografie, esami, piccola
chirurgia — ce l'hanno tutti.

Struttura:

1. **Apertura con identità e credenziali.** Dott.ssa Elena Fornasarig, Medico
   Veterinario, D.V.M., GPCert Medicina Felina, Ordine dei Medici Veterinari di
   Udine, iscrizione albo n. 366 UD. È qui che sostituiamo la pagina biografica:
   la certificazione è il profilo.
2. **Fotografia del gatto bianco e nero**, invariata, con la didascalia
   esistente.
3. **Che cos'è il GPCert.** Certificazione post-laurea rilasciata da ESVPS
   nell'ambito ISVPS, primo livello riconosciuto fra la laurea e il diploma
   europeo; in Italia si consegue attraverso gli itinerari didattici SCIVAC.
   Tutto pubblicamente documentato, nessuna conferma necessaria. Nessun altro
   nella zona lo spiega.
4. **Perché il gatto è diverso.** I tre punti già scritti e ben scritti —
   comportamento e stress, fisiologia e farmacologia, patologie della specie —
   ampliati con la tendenza a mascherare il dolore.
5. **I cani restano centrali.** Il riquadro già presente, mantenuto.
6. **Rimando alla Guida** e CTA WhatsApp.

### Checklist

- [x] Portare identità e credenziali in apertura di pagina.
- [x] Eliminare la sezione profilo dalla Home per non duplicare.
- [x] Scrivere la spiegazione del GPCert citando ESVPS, ISVPS e SCIVAC.
- [x] Ampliare i tre punti esistenti senza aggiungere affermazioni cliniche nuove.
- [x] Sostituire l'occhiello «La specializzazione» (vedi sezione 8).
- [x] Mantenere la fotografia e la didascalia invariate.
- [x] Collegare alla Guida e ai Contatti.

**Criterio di completamento:** un proprietario di gatto capisce che cosa
distingue questo ambulatorio, e capisce che la certificazione è verificabile e
non autoattribuita.

---

## 4. Prestazioni

### Intervento previsto

Le quattro voci esistenti restano quattro. Cambia il modo di descriverle: non
una voce di catalogo ma il beneficio per chi porta l'animale.

Esempio di riscrittura: «Radiografie — l'immagine si fa qui, senza spostare
l'animale in un'altra struttura.»

Struttura:

1. Apertura e immagine mani-gatto.
2. Le quattro prestazioni con le icone disegnate.
3. **Perimetro dichiarato.** Una sezione che dice con calma che l'ambulatorio
   svolge queste attività e che per il resto si indirizza altrove. È raro,
   costruisce fiducia, ed è anche il modo pulito per tenere fuori
   ecocardiografie ed ecografie addominali: non nominandole mai e delimitando il
   perimetro.
4. **Cosa portare alla visita** — libretto sanitario, elenco dei farmaci in
   corso, quando serve un campione. Formulato dal lato del proprietario, quindi
   generico e verificabile, senza descrivere prassi interne dell'ambulatorio.
5. CTA WhatsApp.

Da **non** scrivere: «come si svolge la visita» nel suo ambulatorio.
Descriverebbe una prassi che non è possibile conoscere né far confermare.

### Checklist

- [x] Riscrivere le quattro descrizioni per beneficio.
- [x] Sostituire le icone `lucide` con quelle disegnate.
- [x] Scrivere la sezione sul perimetro senza nominare le prestazioni escluse.
- [x] Scrivere «cosa portare alla visita» dal lato del proprietario.
- [x] Non introdurre la sequenza della visita.
- [x] Verificare che nessuna immagine o icona richiami sonde o ecografi.

**Criterio di completamento:** le quattro prestazioni sono chiare, il perimetro
è esplicito e nessun elemento della pagina lascia intendere prestazioni non
offerte.

---

## 5. Guida per chi ha un gatto

### Intervento previsto

È la pagina che il vincolo ci ha regalato: parla di gatti in generale, non
dell'ambulatorio, quindi si può scrivere per intero senza chiedere nulla a
nessuno. Ed è l'unica pagina del sito che qualcuno salverà o manderà a un amico.

Struttura:

1. **Il trasportino.** Tenerlo aperto in casa tutto l'anno invece di tirarlo
   fuori il giorno della visita; metterci dentro una coperta che sa di casa; non
   forzare l'ingresso; coprire con un telo durante il viaggio; fissarlo in auto.
   Con la sequenza illustrata. Immagine: trasportino.
2. **Segni che meritano una visita.** Beve di più, mangia meno, si nasconde,
   dimagrisce, non usa più la lettiera, respira a bocca aperta, cambia
   improvvisamente abitudini. Formulato come «vale la pena farlo vedere», mai
   come diagnosi e mai come elenco di malattie. Immagine: gatto nascosto.
3. **Perché il gatto nasconde il dolore.** Ponte verso la pagina felina.
   Immagine: gatto che riposa.
4. **Come prepararsi alla visita.** Libretto, farmaci in corso, da quando dura
   il sintomo, cosa si è notato.
5. CTA WhatsApp con messaggio precompilato dedicato.

Tutto ciò che compare qui deve essere vero per i gatti in generale. Nessuna
affermazione su cosa succede in questo ambulatorio.

### Checklist

- [x] Scrivere la sezione trasportino e disegnare la sequenza.
- [x] Scrivere i segni d'allarme in forma non diagnostica.
- [x] Rileggere ogni frase verificando che non descriva l'ambulatorio.
- [x] Collegare alla pagina Medicina Felina.
- [x] Inserire le tre immagini approvate.
- [x] Impostare il messaggio WhatsApp dedicato.

**Criterio di completamento:** la pagina è utile a chi ha un gatto anche se non
verrà mai in ambulatorio, e non contiene una sola affermazione che richieda una
conferma della dottoressa.

---

## 6. Contatti e come arrivare

### Intervento previsto

Nessuna fotografia: mappa disegnata, tipografia e gradiente. È la pagina dove
una foto di archivio sarebbe più facilmente scambiata per una foto dei locali.

Contenuti:

1. **Appuntamento.** «Si riceve su appuntamento», parole già confermate.
2. **WhatsApp** come unica azione, con il blocco «cosa scrivere» (sezione 7).
3. **Indirizzo.** Via Guglielmo Marconi 7/B, Percoto — Pavia di Udine (UD).
   Valutare l'aggiunta del CAP **33050**: è il codice postale della località,
   dato pubblico e verificabile, non un'affermazione sull'attività. Se resta il
   dubbio, si lascia com'è oggi.
4. **Come arrivare.** Mappa disegnata, collegamento alle indicazioni Google già
   presente, riferimenti a terra, parcheggio solo se ricavabile da fonti
   pubbliche.
5. **Da dove arrivano i pazienti.** Percoto, Pavia di Udine, Buttrio, Pradamano,
   Trivignano Udinese, Santa Maria la Longa, Palmanova, Udine sud. Utile alla
   ricerca locale e onesto: descrive la geografia, non un bacino dichiarato.
6. **Urgenze.** Riga neutra, senza nomi: «In caso di urgenza fuori orario,
   rivolgersi al servizio di pronto soccorso veterinario più vicino.» Non è
   possibile sapere quale struttura indichi la dottoressa, ma il dovere
   informativo va assolto.
7. Email, già confermata.

Niente orari. Le direttorie esterne ne pubblicano di contraddittori
(PagineGialle indica fasce orarie, Il Fatto Veterinario indica appuntamento
telefonico): non è possibile correggerle né farle correggere, e il sito resta
sulla formulazione confermata dalla dottoressa. Rischio residuo dichiarato.

### Checklist

- [x] Disegnare la mappa di Percoto. — **Variato:** realizzato come diagramma di orientamento dichiaratamente non in scala. Motivo nelle evidenze.
- [x] Scrivere la pagina senza fotografie.
- [x] Decidere e motivare l'inserimento o l'esclusione del CAP.
- [x] Inserire i comuni di provenienza.
- [x] Inserire la riga sulle urgenze in forma neutra.
- [x] Non pubblicare orari in nessuna forma.
- [x] Verificare i collegamenti WhatsApp e Maps senza inviare messaggi.

**Criterio di completamento:** chi deve raggiungere l'ambulatorio ci riesce, sa
che si va su appuntamento e sa cosa fare in caso di urgenza fuori orario.

---

## 7. Sistema WhatsApp

### Intervento previsto

Il canale unico va trattato come una funzione progettata, non come un pulsante.

1. **Etichetta unica: «Scrivici su WhatsApp»**, ovunque. Oggi è «Scrivi».
2. **Messaggio precompilato diverso per pagina.** Costa nulla, non richiede
   backend, e fa arrivare alla dottoressa messaggi già smistati.

| Pagina | Testo precompilato |
| --- | --- |
| Home | Ciao, vorrei prenotare una visita per il mio gatto/cane. *(invariato)* |
| Medicina Felina | Ciao, vorrei prenotare una visita per il mio gatto. |
| Prestazioni | Ciao, vorrei un'informazione sulle prestazioni dell'ambulatorio. |
| Guida | Ciao, ho notato qualcosa nel mio gatto e vorrei fissare una visita. |
| Contatti | Ciao, vorrei fissare un appuntamento. |

3. **Blocco «cosa scrivere nel primo messaggio»** sulla pagina Contatti: nome e
   specie, età, da quando, cosa si è notato. Con pulsante «copia il modello».
   Riduce gli scambi e comunica cura.
4. **QR code** verso la chat, nella pagina Contatti: stampabile per la porta
   dell'ambulatorio. Generato come file statico, nessun servizio esterno.
5. **Nessun pulsante «Chiama».** Il numero resta come testo, come oggi.
6. **Nessuna promessa di tempi di risposta**, coerentemente con la V1.
7. Pulsante flottante e barra mobile: comportamento attuale conservato e
   verificato su tutte e cinque le pagine.

### Checklist

- [x] Sostituire ovunque «Scrivi su WhatsApp» con «Scrivici su WhatsApp».
- [x] Portare i messaggi precompilati in `lib/site.ts`, uno per pagina.
- [x] Realizzare il blocco «cosa scrivere» con copia negli appunti.
- [x] Generare il QR code come file statico e inserirlo in Contatti.
- [x] Verificare che non compaia alcun pulsante telefonico.
- [x] Verificare barra mobile e pulsante flottante su tutte le pagine.
- [x] Controllare tutti gli href `wa.me` senza inviare messaggi.

**Criterio di completamento:** da qualunque pagina si parta, si capisce che si
scrive su WhatsApp per concordare l'appuntamento, e il messaggio che parte dice
già da dove arriva.

---

## 8. Correzioni deontologiche e di perimetro

### Intervento previsto

Tre correzioni. Non sono rifiniture: riguardano ciò che il sito afferma.

1. **Mai «specializzazione» o «specialista».** In Italia «specialista» è
   riservato a chi possiede un Diploma di Specializzazione o un diploma di
   College europeo. Il GPCert è una certificazione post-laurea, non una
   specializzazione. L'occhiello attuale «La specializzazione» in
   `FelineSection` va sostituito con «La certificazione» o «La preparazione».
2. **Mai «clinica».** Ambulatorio e clinica sono strutture con requisiti
   diversi. Il sito deve usare sempre e solo «ambulatorio». Da verificare anche
   nei metadati e nei dati strutturati. Una direttoria esterna
   (`clinicaveterinaria24`) la scheda come clinica: non è correggibile da noi,
   ma il sito non deve confermare quella formulazione.
3. **«Radiografie», non «Diagnostica per immagini».** La formula generica può
   essere letta come comprensiva delle ecografie. Va corretta anche in
   `app/layout.tsx`, dove `availableService` contiene ancora «Diagnostica per
   immagini», e nella descrizione usata per i metadati.

### Checklist

- [x] Sostituire l'occhiello «La specializzazione».
- [x] Cercare «specializz» e «specialist» in tutto il progetto e correggere.
- [x] Cercare «clinica» in tutto il progetto e correggere.
- [x] Correggere `availableService` nei dati strutturati.
- [x] Correggere la descrizione condivisa nei metadati.
- [x] Verificare che nessun testo, icona o immagine richiami ecografie.

**Criterio di completamento:** una ricerca testuale sul progetto non trova più
«clinica», «specialista», «specializzazione» né riferimenti ecografici.

---

## 9. SEO locale, metadati e dati strutturati

### Intervento previsto

- `title`, `description`, `canonical` e Open Graph propri per ognuna delle
  cinque pagine;
- **immagini Open Graph tipografiche**, generate dal gradiente più titolo e
  monogramma: non servono fotografie e il risultato è migliore di una foto di
  archivio riusata;
- `sitemap.xml` e `robots.txt`;
- dati strutturati: `VeterinaryCare` sulla Home (come oggi, corretto),
  `Person` per la dottoressa, `FAQPage` su Medicina Felina e Guida —
  le domande frequenti sono il risultato arricchito più ottenibile su queste
  ricerche — e `BreadcrumbList` sulle pagine interne;
- parole chiave locali distribuite sulle pagine giuste invece che accumulate
  nel `layout`;
- **dominio proprio.** Finché l'indirizzo resta `.vercel.app` il sito non verrà
  percepito come un lavoro professionale. `NEXT_PUBLIC_SITE_URL` è già previsto
  in `app/layout.tsx`: serve solo acquistare il dominio e impostarlo.

Fuori dal nostro perimetro ma da segnalare al committente: il profilo Google
Business è la fonte principale di contatti per un ambulatorio di paese, e le
direttorie esistenti riportano dati incoerenti fra loro. Non sono correggibili
senza accesso, ma vanno messi per iscritto come attività successive.

### Checklist

- [x] Metadati completi e distinti per le cinque pagine.
- [x] Generare le immagini Open Graph tipografiche.
- [x] Aggiungere `sitemap.xml` e `robots.txt`.
- [x] Aggiungere `FAQPage` alle due pagine di contenuto.
- [x] Aggiungere `BreadcrumbList` alle pagine interne.
- [x] Ridistribuire le parole chiave per pagina.
- [x] Documentare l'impostazione del dominio definitivo.
- [x] Mettere per iscritto le attività esterne non eseguibili da noi.

**Criterio di completamento:** ogni pagina ha metadati propri e coerenti, i dati
strutturati sono validi e non contengono affermazioni non confermate.

---

## 10. Accessibilità, prestazioni e verifica

### Intervento previsto

Sono la parte che rende il lavoro dimostrabile invece che opinabile, e vanno
consegnate come documento al committente.

Obiettivi: WCAG AA su tutte e cinque le pagine, navigazione completa da
tastiera, contrasti calcolati e non stimati — l'impostazione è già quella, va
estesa alle pagine nuove — nessuno spostamento visivo al caricamento delle
immagini, `prefers-reduced-motion` rispettato, `npm run build` e `npm run lint`
puliti.

### Checklist

- [x] Verificare le cinque pagine a 320, 390, 768, 1024, 1280 e 1440 pixel.
- [x] Verificare il reflow equivalente allo zoom 200%.
- [x] Verificare tastiera, focus e menu mobile su tutte le pagine.
- [x] Calcolare i contrasti dei nuovi elementi.
- [x] Verificare che nessuna sezione resti vuota scorrendo velocemente.
- [x] Verificare le immagini: dimensioni, `sizes`, spazio riservato.
- [x] Eseguire build e lint.
- [x] Redigere il documento di verifica da consegnare.

**Criterio di completamento:** le cinque pagine superano le stesse verifiche già
applicate alla V1, e la verifica è documentata.

---

## Ordine di lavoro

Il sistema visivo viene prima, altrimenti ogni pagina va rifatta due volte.

| Fase | Stato | Dipendenze |
| --- | --- | --- |
| 0. Sistema visivo e immagini | Completato | Approvazione della shortlist |
| 1. Architettura a cinque pagine | Completato | — |
| 2. Home | Completato | 0, 1 |
| 3. Medicina Felina | Completato | 0, 1 |
| 4. Prestazioni | Completato | 0, 1 |
| 5. Guida per chi ha un gatto | Completato | 0, 1 |
| 6. Contatti | Completato | 0, 1 |
| 7. Sistema WhatsApp | Completato | 1 |
| 8. Correzioni deontologiche | Completato | — |
| 9. SEO e metadati | Completato | 1 |
| 10. Verifica finale | Completato | tutte |

La fase 8 può essere eseguita subito e in modo indipendente: sono correzioni che
migliorano il sito attuale a prescindere dal resto.

---

## Cosa resta fuori, e perché

Elenco esplicito, perché l'assenza di queste voci è una scelta e non una
dimenticanza.

| Escluso | Motivo |
| --- | --- |
| Orari di apertura | Non confermabili. La dottoressa ha indicato solo «su appuntamento». |
| Tariffe e preventivi | Mai confermati. |
| Testimonianze e recensioni | Nessuna autorizzazione ottenibile. |
| Testo in prima persona firmato | Richiederebbe la sua approvazione. |
| Biografia, università, anno di laurea | Non confermabili. |
| Fotografie della dottoressa o dei locali | Non disponibili e non sostituibili con archivio. |
| «Come si svolge la visita» in questo ambulatorio | Descriverebbe una prassi non verificabile. |
| Nome del pronto soccorso di riferimento | Non conosciuto. Sostituito da una riga neutra. |
| Tempi di risposta su WhatsApp | Già escluso in V1. |
| Ecocardiografia ed ecografia addominale | Escluse dalla committente. |
| Backend, moduli, calendario, chatbot | Fuori perimetro. |
| Immagini fotorealistiche generate | Vietate dalle regole del progetto. |
| Marchio «Cat Friendly Clinic» | Certificazione ISFM formale: non rivendicabile. |

---

## Registro aggiornamenti

| Data | Aggiornamento | Punti aperti |
| --- | --- | --- |
| 12 settembre 2026 | Creato il piano V2. Nessun intervento sul sito eseguito. Shortlist immagini verificata su Unsplash: esistenza, autore e licenza gratuita controllati per le cinque candidate principali e per l'alternativa `ymITgrOdv2c`. | Approvazione della shortlist immagini. Scelta fra Newsreader e Fraunces. Decisione sul CAP. Acquisto del dominio. Tutte le attività operative sono da iniziare. |
| 12 settembre 2026 | Implementata la V2 e completata la verifica locale. Struttura a cinque pagine, sistema visivo, immagini, percorso WhatsApp, correzioni deontologiche e SEO. Una sostituzione nella shortlist e una variazione sulla mappa, motivate nelle evidenze. | Dominio da acquistare. Prova di scansione del QR. Il lavoro è committato sul ramo `work-in-progress`: la pubblicazione in produzione richiede un merge su `main`, non eseguito in questa fase. |

---

## Evidenze dell'implementazione V2 — 12 settembre 2026

### Struttura

Cinque rotte statiche più `sitemap.xml`, `robots.txt` e cinque anteprime Open
Graph, tutte prerenderizzate. Ogni pagina ha un solo `h1`, `title`,
`description` e `canonical` propri; tutte le immagini hanno un testo
alternativo. Rimossi i sei componenti di sezione della pagina unica
(`AmbulatorioSection`, `FelineSection`, `ServicesSection`, `ProfileSection`,
`ContactSection`, `TrustBar`): i contenuti sono stati portati nelle pagine, non
duplicati.

### Immagini

Le due fotografie della dottoressa non sono state toccate: nessun ritaglio,
nessuna gradazione, file invariati. Le cinque immagini di archivio sono state
verificate una per una su Unsplash — esistenza, autore e licenza gratuita — e
preparate con `scripts/scarica-foto.py`, che documenta ritagli in coordinate
pixel e gradazione.

**Una sostituzione rispetto alla shortlist approvata.** `6KUYdFD6HYs` è stata
scartata dopo averla aperta a piena risoluzione: dominante fredda lontana dalle
foto della dottoressa e steli d'erba sugli occhi del gatto, che la fanno leggere
come animale in difficoltà anziché accudito. Al suo posto `T-nPYpDTVxA`, che era
già fra le alternative del piano ed è stata verificata come gratuita.

La gradazione è stata tarata misurando le due foto della dottoressa
(saturazione media 0,33 e 0,13; luminosità 0,65 e 0,64) e riportando le immagini
di archivio in quell'intorno, con un viraggio lieve. Una sola immagine ha
richiesto un limite di luminosità più alto, annotato nello script.

### Il diagramma al posto della mappa

Il piano prevedeva una mappa disegnata di Percoto. **Non è stata realizzata**, e
la decisione è deliberata: non disponiamo di un rilievo attendibile delle strade
del paese, e una mappa disegnata a memoria è peggio di nessuna mappa, perché chi
la seguisse potrebbe sbagliare strada. Al suo posto c'è un diagramma di
orientamento che dichiara di non essere in scala, accompagnato dall'indirizzo per
esteso, dal riferimento ai trecento metri dal centro e dal collegamento alle
indicazioni reali.

### Verifiche eseguite

- **Build e qualità:** `npm run build` completato con controllo TypeScript e
  prerendering statico delle quindici rotte; `npm run lint` senza errori.
- **Larghezze:** 320, 375, 640, 768, 1024 e 1440 pixel CSS. Nessuno scorrimento
  orizzontale su nessuna pagina a nessuna larghezza. La verifica a 640 × 450
  equivale allo spazio di impaginazione disponibile al 200% su una finestra
  1280 × 900: è una verifica di reflow, non uno zoom eseguito su un dispositivo
  reale.
- **Contrasti,** calcolati sui colori realmente renderizzati: titolo di testata
  15,2:1; introduzione di testata 9,7:1; briciola della pagina corrente 10,1:1;
  collegamento nelle briciole 5,4:1; etichette «Passo n» 5,6:1; didascalie
  5,6:1; elenco dei segnali su sabbia 8,0:1. Tutti sopra la soglia AA.
- **Correzione trovata in verifica:** le etichette «Passo n» erano in
  `text-line`, circa 1,2:1 su avorio. Portate a `text-muted`.
- **Sezioni vuote:** il difetto della V1 non si ripresenta. `Reveal` era già
  corretto sul render iniziale; il caso non gestito era un blocco superato senza
  che arrivasse mai una soglia di intersezione — con uno scorrimento rapido
  restava a opacità zero per sempre. Ora un blocco che finisce sopra la finestra
  viene sempre rivelato.
- **Tastiera:** tabulazione dell'intestazione verificata, contorno di fuoco
  visibile su fondo scuro e su fondo chiaro. Il ciclo del fuoco nel menu mobile
  e la chiusura con Escape sono invariati rispetto alla V1.
- **Modello di messaggio:** copia negli appunti provata; lo stato accessibile
  annuncia l'esito. In caso di errore il testo resta selezionabile.
- **Contenuti:** ricerca testuale sull'HTML generato delle cinque pagine. Non
  compaiono «clinica», «ecografia», «ecocardiografia», «diagnostica per
  immagini» né «Scrivi su WhatsApp». «Specialista» e «specializzazione»
  compaiono in un solo punto, la precisazione della pagina felina che spiega che
  il GPCert **non** è una specializzazione.
- **Collegamenti WhatsApp:** controllati gli `href` delle cinque varianti senza
  inviare messaggi.

### Non verificato

- **Il codice QR non è stato provato con una fotocamera reale.** È generato da
  `segno` con correzione d'errore alta e l'URL codificato è
  `https://wa.me/393388273705`, ma una prova di scansione su telefono resta da
  fare prima di stamparlo.
- Nessun benchmark Lighthouse eseguito.
- Nessun controllo su dispositivi fisici né con screen reader reali.

### Decisioni prese in assenza della committente

- **Newsreader** per i titoli, **Inter Tight** per il testo. Newsreader e non
  Fraunces: su un sito sanitario una grazia con meno carattere proprio invecchia
  meglio e non compete con il contenuto.
- **CAP 33050 inserito.** È il codice postale della località, dato pubblico e
  verificabile, non un'affermazione sull'attività.
- **Titolo della pagina iniziale invariato.** «Il gatto non è un cane di piccola
  taglia» è diventato l'`h1` della pagina felina e non ha scavalcato la gerarchia
  della prima schermata, approvata dalla dottoressa in V1.

### Punti aperti

- Dominio proprio da acquistare e impostare in `NEXT_PUBLIC_SITE_URL`. Finché
  l'indirizzo resta `.vercel.app` il sito non verrà percepito come un lavoro
  professionale.
- Prova di scansione del QR.
- Profilo Google Business e bonifica delle direttorie con orari incoerenti:
  fuori dal nostro accesso, restano attività per il committente.
- `main` è indietro rispetto a questo ramo, e lo era già prima della V2: in
  produzione gira ancora una build precedente alle fotografie della dottoressa.
  La pubblicazione richiede un merge su `main`, non eseguito in questa fase.
