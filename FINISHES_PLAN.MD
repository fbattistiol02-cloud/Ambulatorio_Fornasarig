# Piano di rifinitura — feedback webdesigner

Stato: modifiche implementate e verificate in locale su `work-in-progress`. Restano aperte le verifiche su iPhone reale e il riscontro della webdesigner. Nessun push, merge o pubblicazione.

Repository: `/Users/utente/Claude Code project/ambulatorio-fornasarig/`
Branch di lavoro: `work-in-progress`
Data del feedback: 13 settembre 2026

## Obiettivo e perimetro

Recepire i rilievi di una webdesigner esterna (Cristina) su tre aree: l'header su telefono, una fotografia che non si aggancia allo scorrimento, e i collegamenti nel piè di pagina.

Nessun backend, nessun database, nessun modulo di prenotazione, nessuna nuova API. Nessuna nuova fotografia: restano le sole immagini già presenti nel repository. Si conserva il sistema grafico esistente — verde petrolio, avorio, ambra, tipografia editoriale — e i testi non cambiano se non dove indicato.

Le informazioni sull'attività restano aderenti ai dati confermati: non aggiungere orari, servizi, tempi di risposta, qualifiche o recensioni non verificati.

## Fonti del feedback

| Fonte | Contenuto |
|---|---|
| Screenshot chat | Consiglio: header a "blocco unico" con effetto vetro tipo iOS |
| Screenshot pagina cane | Pulsante menu cerchiato: "da telefono non mi funziona" |
| Video `9af4559c` (5,6 s) | Registrazione schermo iPhone, pagina Contatti |
| Video `ScreenRecording_09-13` (6,2 s) | Stessa scena, ripresa più lunga |
| Video `e0335a0b` (1:33, con audio) | Rilievi sulle fotografie e conferma sull'header desktop |
| Video `aec27c2c` (0:29, con audio) | Rilievi sul piè di pagina |

Le tracce audio sono state trascritte in locale sul Mac dell'utente tramite il framework Speech di macOS; nessun audio è stato inviato a servizi esterni.

### Citazioni rilevanti

> "Questa barra qui è già fatta molto bene, solo che dal telefono si vedeva male. Però per il resto è bellissimo quando scrolli. Quindi dovresti modificare **solo sul telefono**. E quando cliccavo sul telefono lì non mi funzionava niente."

> "Sembra che sia troppo su, cioè si potrebbe metterla un po' più in giù e che si adatti sempre come questa qua che c'è in Prestazioni."

> "Vorrei che questa cosa qua sia cliccabile come questa, e che quando passo con il mouse diventa arancione. E sarebbe meglio se vicino ci fosse questo simbolo qui, come hai su WhatsApp, così che quando clicco mi porta subito lì."

## Precisazioni ricevute dall'utente

Due punti del brainstorm iniziale erano stati letti male e sono stati corretti dall'utente:

1. **La foto sticky del trasportino piace e non va toccata.** La fotografia da rendere sticky è quella della sezione "Quando farlo vedere" nella stessa pagina.
2. **Il piè di pagina**: l'indirizzo deve diventare cliccabile e cambiare colore in ambra al passaggio del mouse, come già fanno gli altri collegamenti. Non serve uno sfondo pieno.

## Come usare la checklist

Spuntare una voce solo quando il risultato è stato verificato, non quando il codice è stato scritto. Annotare sotto la voce eventuali impedimenti o evidenze. Le voci della sezione 6 richiedono un iPhone reale e non possono essere chiuse in emulazione.

---

## 1. Preparazione

- [x] Verificare di essere su `work-in-progress` con albero pulito.
- [x] Leggere `AGENTS.md` e la documentazione Next.js locale in `node_modules/next/dist/docs/` prima di scrivere codice.
      Consultate le pagine su CSS/Tailwind e sulla direttiva `use client`: nessuna deprecazione che riguardi queste modifiche.
- [x] Acquisire un riferimento visivo delle cinque pagine su desktop e su mobile, per confronto a fine lavoro.
- [ ] Preparare un unico URL di anteprima da condividere con la webdesigner, per evitare che riveda versioni diverse.

---

## 2. Header su telefono — priorità massima

### Il problema, accertato

Su Safari iOS l'header **non passa mai allo stato solido**: resta trasparente con il testo avorio per tutto lo scorrimento. Sul fondo verde della testata il testo della pagina scorre dietro il marchio e i due si accavallano; appena inizia la sezione avorio, il marchio sparisce del tutto e resta visibile solo il filetto ambra.

Non è un difetto di transizione momentanea: nei fotogrammi lo stato sbagliato persiste per tutta la registrazione.

**Sospetto tecnico principale:** `overflow-x: clip` applicato a `html` in `app/globals.css:58`. Il commento accanto alla regola spiega che `clip` è stato scelto al posto di `hidden` proprio per non creare un contenitore di scorrimento; il ragionamento è corretto sui browser Chromium, ma su Safari iOS questa dichiarazione ha un comportamento noto come problematico e può lasciare `window.scrollY` fermo a zero mentre la pagina scorre davvero. Se è così, il `scroll` listener di `components/Header.tsx:21` non scatta mai.

**Difetto secondario, confermato in locale:** in `components/Header.tsx:70` lo sfondo cambia con `transition-colors duration-300`, mentre i colori del testo si invertono istantaneamente al re-render. Questo apre una finestra di circa 300 ms in cui testo e fondo sono entrambi chiari o entrambi scuri. Riprodotto aprendo il menu a 375 px.

### Vincolo esplicito

La webdesigner ha approvato il comportamento su desktop. **Le modifiche devono essere circoscritte al mobile** (sotto i 1280 px, la soglia `xl` già usata nel componente). Il desktop non va ridisegnato.

### Diagnosi

- [ ] Chiedere alla webdesigner versione di iOS e di Safari: cambia la diagnosi.
- [ ] Verificare su iPhone reale se `window.scrollY` resta a zero durante lo scorrimento.
- [ ] Confermare o escludere `overflow-x: clip` come causa, isolandolo temporaneamente.
- [ ] Verificare se il menu si apre davvero e il problema è solo la mancanza di riscontro visivo, oppure se non si apre affatto.

### Correzione dello stato dell'header

- [x] Sostituire il rilevamento basato su `window.scrollY` con un elemento sentinella osservato da `IntersectionObserver`: immune al difetto iOS e più efficiente del listener su `scroll`.
      Stessa correzione applicata a `lib/useContactVisibility.ts`, che sulle pagine interne usava la stessa soglia su `window.scrollY`: anche la barra di contatto non sarebbe mai comparsa.
- [x] Sostituire `overflow-x: clip` su `html` con un contenimento applicato a un wrapper interno, lasciando `html` pulito.
      Spostato su `main` e `footer`. Non su `body`: senza `overflow` esplicito su `html`, il valore del body si propaga al viewport e il problema si ripresenterebbe identico. Nessuno scorrimento orizzontale su nessuna pagina a 320, 375, 768, 1024, 1280 e 1440 px.
- [x] Sotto i 1280 px eliminare del tutto lo stato trasparente: l'header è sempre un blocco opaco o in vetro.
- [x] Sotto i 1280 px fissare il testo del marchio sempre scuro: è il fondo chiaro a garantire il contrasto, non l'inversione del testo.
- [x] Far transitare i colori del testo con la stessa durata dello sfondo, così che nessuno stato intermedio resti illeggibile.

### Blocco unico in vetro, solo mobile

- [x] Realizzare l'header mobile come blocco chiuso e sempre distinguibile dalla pagina, secondo il suggerimento della webdesigner.
- [x] Ricetta vetro: fondo semi-trasparente, `backdrop-blur` già presente, aggiunta di `backdrop-saturate`, bordo interno chiaro, ombra minima.
      Classi `.vetro`, `.vetro-chiaro` e `.vetro-scuro`. Scritta solo la proprietà standard `backdrop-filter`: dichiarando a mano anche `-webkit-`, Lightning CSS teneva il prefisso e lasciava cadere la versione senza.
- [x] Usare una tinta neutra coerente con la palette (avorio o verde chiarissimo) invece del bianco puro.
- [x] Fallback `@supports not (backdrop-filter)` con fondo pieno: senza, sui browser datati l'header diventa illeggibile.
- [x] Rispettare `prefers-reduced-transparency` e `prefers-reduced-motion`.
- [x] Verificare la leggibilità nel caso peggiore, cioè con una fotografia chiara che scorre sotto il vetro.
      Il caso peggiore non è la fotografia chiara ma la sezione verde scura: il vetro scende a un grigio chiaro e l'occhiello da 10 px, in `text-muted`, si fermava a 3,4:1 — sotto la soglia AA. Portato a `text-ink`, che nello stesso caso misura oltre 8:1. Il nome resta a 9:1.
- [x] Mantenere una sola grammatica di vetro fra header, barra contatti mobile e indice di pagina: non devono convivere tre vetri diversi.
      L'indice di pagina non è una superficie sospesa ma parte della testata: resta com'è. Vetro condiviso fra header e barra contatti.

### Menu mobile

- [x] Sostituire il blocco dello scorrimento `document.body.style.overflow = "hidden"` con la tecnica `position: fixed` più ripristino della posizione, l'unica affidabile su Safari iOS.
      L'offset si legge da `getBoundingClientRect()` dell'elemento radice e non da `window.scrollY`: se quel valore fosse sbagliato, alla chiusura la pagina salterebbe in cima. Verificato: apertura a 1500 px, ripristino esatto a 1500 px.
- [x] Valutare il pannello come overlay a schermo intero invece che in coda all'header: meno dipendente dal comportamento di `dvh` su iOS.
- [x] Aggiungere uno stato `:active` visibile al pulsante, così che il tocco dia riscontro immediato.
- [x] Portare il bersaglio da 44 a 48 px e affiancare all'icona la parola "Menu": la clientela dell'ambulatorio non è giovanissima.
- [x] Animare l'apertura del pannello con uno scorrimento breve, come conferma che il tocco è stato registrato.
- [ ] Verificare che `inert` su `MobileCallBar` e `WhatsAppFloatingButton` non interferisca sulle versioni iOS più datate.
      Mitigato a monte: il pannello del menu usa l'attributo `hidden`, che funziona ovunque, e non dipende da `inert`. Dove `inert` non è supportato viene semplicemente ignorato, quindi non può rompere nulla; resta da confermare su dispositivo.

---

## 3. Fotografia "Quando farlo vedere" — da rendere sticky

### Il problema, accertato

Nella pagina Guida al gatto, sezione "Quando farlo vedere — Cambiamenti che vale la pena non lasciar passare", la fotografia del gatto sotto il divano resta in alto mentre l'elenco dei segnali prosegue per oltre settecento pixel, lasciando un vuoto.

La classe `lg:sticky lg:top-32` **è già presente** su `app/guida-gatto/page.tsx:302`, ma non produce alcun effetto. Misurazione in locale a 1440×900:

| Blocco | Altezza elemento | Altezza del genitore | Margine di scorrimento |
|---|---|---|---|
| Prestazioni (funziona) | 773 px | 990 px | 217 px |
| Trasportino (funziona, approvato) | 773 px | 990 px | 217 px |
| **Quando farlo vedere (rotto)** | **361 px** | **361 px** | **0 px** |

La causa è strutturale: la classe `sticky` è applicata al `<figure>`, che si trova **dentro** `<Reveal>`. Il genitore diretto diventa quindi il `motion.div` di `Reveal`, alto esattamente quanto la figura. Un elemento `sticky` si muove solo all'interno del proprio genitore: con margine zero non ha spazio per agganciarsi.

Nelle due sezioni che funzionano la classe `sticky` è su un `div` che è figlio diretto della cella della griglia, e `Reveal` sta **dentro** quel div.

### Interventi

- [x] Spostare `lg:sticky lg:top-32` dal `<figure>` a un `div` contenitore figlio diretto della cella `lg:col-span-5 lg:col-start-8`, replicando il pattern di `app/prestazioni/page.tsx:63`.
      Margine di scorrimento passato da 0 a 683 px. Verificato l'aggancio a `top: 128px` per 539 px di scorrimento, con rilascio corretto a fine colonna.
- [x] Lasciare `<Reveal>` all'interno del blocco sticky, non all'esterno.
- [x] Verificare che la didascalia resti agganciata alla fotografia.
- [x] **Non toccare** la sezione "Il trasportino": la webdesigner l'ha approvata esplicitamente.

### Controllo di robustezza

Il blocco sticky del trasportino misura 773 px contro uno spazio utile di 772 px a 1440×900. Rientra per un pixel: su una finestra più bassa, o con la barra dei preferiti aperta, smetterebbe di agganciarsi.

- [x] Verificare il comportamento delle tre sezioni sticky a 1280×720 e a 1440×800.
      Misurazioni (spazio utile = altezza finestra meno l'offset di 128 px):

      | Blocco | Altezza | 1280×720 (592 px) | 1440×800 (672 px) |
      |---|---|---|---|
      | Prestazioni | 495 px | entra | entra |
      | Medicina felina | 141 px | entra | entra |
      | Quando farlo vedere | 361 px | entra | entra |
      | **Il trasportino** | **773 px** | **sfora** | **sfora** |
- [x] Adottare come regola che nessun blocco `sticky` superi `100dvh` meno il proprio offset superiore, e annotarla dove serve.
      Annotata nel commento della sezione corretta in `app/guida-gatto/page.tsx`.
- [ ] Se una sezione sfora, ridurre il blocco sticky anziché spostare la fotografia.
      **Non applicato, in attesa di decisione.** L'unico blocco che sfora è "Il trasportino", che il cliente ha chiesto esplicitamente di non toccare. Su finestre più basse di circa 900 px la fotografia si aggancia comunque, ma la didascalia resta sotto il bordo inferiore mentre è agganciata. Non è rotto, è subottimale. Per rientrare basterebbe portare occhiello e titolo fuori dal blocco sticky, come in Prestazioni: a riposo l'aspetto non cambierebbe di un pixel, cambierebbe solo che al fissaggio si aggancia la sola fotografia.

---

## 4. Piè di pagina — collegamenti e icone

### Il problema, accertato

In `components/Footer.tsx:41` l'indirizzo è un elemento `<address>` semplice: non è un collegamento, non ha icona, non ha alcuno stato al passaggio del mouse. L'email invece è già un collegamento con passaggio in ambra, ma senza icona. Il solo collegamento completo di icona è WhatsApp.

Nel video la webdesigner passa sull'icona segnaposto dell'header e mostra in basso l'indirizzo di destinazione delle indicazioni stradali: è quel comportamento che chiede di replicare nel piè di pagina.

### Interventi

- [x] Rendere l'indirizzo un collegamento alle indicazioni stradali, con lo stesso `href` già usato dall'icona segnaposto dell'header (`site.directions`).
- [x] Affiancare all'indirizzo l'icona segnaposto, la stessa `MapPin` già in uso nell'header.
- [x] Portare l'indirizzo al passaggio del mouse in ambra, come gli altri collegamenti del piè di pagina.
      Verificato al passaggio reale del puntatore: `rgb(245, 158, 11)`, cioè `--color-accent-warm`.
- [x] Affiancare all'email un'icona busta, per simmetria con WhatsApp.
- [x] Applicare `min-h-11` all'indirizzo una volta diventato collegamento, per il tocco su mobile.
- [x] Mantenere l'indirizzo leggibile come dato anche per chi non lo clicca: resta testo, non diventa un bottone.
- [x] Conservare la semantica `<address>` attorno al collegamento, per non perdere il valore per i motori di ricerca.
- [x] Verificare che il collegamento apra le indicazioni in una scheda nuova con `rel="noopener noreferrer"`, coerentemente con l'header.

---

## 5. Da non toccare

Elementi approvati esplicitamente dalla webdesigner. Vanno protetti da regressioni.

- [x] Fotografia sticky della pagina Prestazioni — "mi piace un sacco".
- [x] Sezione con fotografia sticky in Medicina felina — "si adatta sempre".
- [x] Fotografia della sezione "Il trasportino" in Guida al gatto — approvata.
- [x] Comportamento dell'header su desktop durante lo scorrimento — "già fatta molto bene, è bellissimo quando scrolli".
      Confrontati i valori calcolati prima e dopo: in cima fondo trasparente, nessun `backdrop-filter`, bordo trasparente, marchio avorio; scorrendo fondo avorio al 90%, `blur(12px)`, bordo `line-soft`, marchio verde scuro. Identico a prima.
- [x] Testi, fotografie e palette: nessuna modifica prevista.

---

## 6. Verifica

### In locale

- [x] Controllo visivo delle cinque pagine a 320, 375, 768, 1024, 1280 e 1440 px.
- [x] Header leggibile in ogni punto dello scorrimento, su ogni pagina, a ogni larghezza.
- [x] Le tre sezioni sticky si agganciano e si sganciano correttamente.
- [x] Nessun errore in console né richiesta fallita.
- [x] Collegamenti del piè di pagina tutti funzionanti, indicazioni stradali comprese.
- [x] Navigazione da tastiera: apertura e chiusura del menu, ordine di tabulazione, tasto Esc.
      Esc chiude il pannello, il fuoco torna al pulsante e gli stili inline sul body vengono rimossi.
- [x] Contrasto del testo sull'header in vetro verificato sul caso peggiore.
- [x] `npm run lint` e `npm run build` senza errori.

### Su dispositivo reale — non sostituibile con l'emulazione

- [ ] Su iPhone: l'header diventa opaco durante lo scorrimento e il marchio resta sempre leggibile.
- [ ] Su iPhone: il pulsante menu si apre, si chiude e dà riscontro al tocco.
- [ ] Su iPhone: con il menu aperto la pagina sotto non scorre.
- [ ] Su Android: nessuna regressione introdotta dalle correzioni per iOS.
- [ ] Verifica su una seconda versione di iOS, se disponibile.

### Con la webdesigner

- [ ] Inviare un unico URL di anteprima aggiornato.
- [ ] Chiederle di ripetere la prova sullo stesso telefono usato per i video.
- [ ] Raccogliere la conferma sui tre punti, prima di considerare chiusa la fase.

---

## 7. Dopo l'approvazione

Voci da avviare solo a fase conclusa e approvata. Non contano come attività mancanti per la consegna di questa revisione.

- [ ] Aggiornare `IMPLEMENTATION_V3.MD` o aprire una V4 se le modifiche cambiano decisioni già documentate.
- [ ] Valutare se la regola sui blocchi sticky merita una nota permanente nella documentazione del progetto.
- [ ] Riallineare `main` solo su indicazione esplicita dell'utente.

---

## Ordine consigliato

1. **Header su telefono** — è l'unico difetto che rende il sito inutilizzabile per un visitatore reale.
2. **Piè di pagina** — intervento breve, chiude un feedback intero.
3. **Fotografia "Quando farlo vedere"** — modifica strutturale piccola e circoscritta.

## Rischi noti

- La causa del difetto su iOS è una **ipotesi motivata, non una certezza**: finché non è riprodotta su iPhone reale, le correzioni della sezione 2 vanno considerate provvisorie. Le voci sullo stato dell'header risolvono comunque il sintomo, perché eliminano il meccanismo che si rompe.
- L'effetto vetro è una tendenza del 2025-26 e potrebbe datare il sito. La versione più sobria — fondo chiaro, riflessi minimi, ombra quasi assente — riduce il rischio e resta coerente con un ambulatorio veterinario di paese.
- Ogni modifica all'header tocca tutte e cinque le pagine: la verifica va ripetuta su ciascuna, non solo sulla Home.
