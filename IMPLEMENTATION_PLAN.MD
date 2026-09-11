# Piano di implementazione — Ambulatorio Fornasarig

Piano di lavoro per le tre modifiche richieste dalla Dott.ssa Fornasarig. Nessuna riga di codice è stata scritta: questo documento serve solo a tracciare cosa va fatto, dove, e in che ordine.

Legenda checklist: `[ ]` da fare · `[x]` fatto

---

## 1. WhatsApp come canale di contatto prioritario

Obiettivo: ovunque oggi c'è "chiama", WhatsApp deve diventare l'azione principale e il telefono un'alternativa secondaria — non sparire, ma passare in secondo piano.

Punti di contatto da aggiornare (in ordine di impatto):

- [ ] **[MobileCallBar.tsx](components/MobileCallBar.tsx)** — barra fissa in fondo su mobile, il punto più visibile durante lo scroll. Il pulsante WhatsApp diventa quello grande/primario; la chiamata resta come icona piccola accanto.
- [ ] **[Hero.tsx](components/Hero.tsx)** — CTA principale sotto il titolo. WhatsApp come primo pulsante, "Chiama per un appuntamento" come secondo pulsante (stile meno marcato, come già è oggi il pulsante "Scopri l'ambulatorio").
- [ ] **[Header.tsx](components/Header.tsx)** — pillola desktop e voce nel menu mobile: WhatsApp al posto del numero come azione primaria, telefono spostato più in basso/più piccolo.
- [ ] **[ContactSection.tsx](components/ContactSection.tsx)** — blocco "Prenota una visita": WhatsApp come modo di contatto in evidenza, numero di telefono mantenuto come alternativa sotto.
- [ ] **[Footer.tsx](components/Footer.tsx)** — aggiungere la voce WhatsApp nell'elenco contatti, accanto a telefono ed email.
- [ ] **Bottone WhatsApp fluttuante** — nuovo elemento persistente (in basso a destra), visibile su tutte le pagine e anche su desktop, non solo nella call bar mobile.

Dettagli trasversali:

- [ ] Definire il **testo precompilato** del messaggio WhatsApp (es. "Ciao, vorrei prenotare una visita per il mio gatto/cane...") da usare in tutti i link `wa.me`.
- [ ] Ottenere/confermare il **numero WhatsApp** da usare (può coincidere con `338 827 3705` o essere un altro numero — da verificare con la dottoressa).
- [ ] Decidere lo **stile del pulsante**: verde WhatsApp ufficiale (massima riconoscibilità) vs colore accent del sito con icona WhatsApp (più coerente con la palette).
- [ ] Aggiungere una microcopy tipo *"Risposta rapida su WhatsApp"* vicino ai CTA principali.
- [ ] Verificare che ogni bottone telefono rimasto sia visivamente secondario rispetto a WhatsApp, in ogni sezione.

---

## 2. Sostituzione dell'immagine hero (il "gatto enorme")

Obiettivo: eliminare l'effetto "primo piano animale enorme e invadente" nella sezione [Hero.tsx](components/Hero.tsx), che oggi usa `visita-gatto.jpg` a schermo intero.

Nota importante: `visita-gatto.jpg` è riusata anche come immagine di anteprima social e nei dati strutturati in [layout.tsx](app/layout.tsx) (righe con `url:` e `image:`) — qualsiasi sostituzione va valutata anche come miniatura/anteprima link, non solo come sfondo desktop.

- [ ] **Decidere la direzione** con la dottoressa tra le opzioni emerse nel brainstorming:
  - [ ] Stessa foto (o simile), ma con inquadratura meno ravvicinata / più spazio negativo
  - [ ] Hero non più a schermo intero: foto in un riquadro/pannello laterale invece che sfondo pieno
  - [ ] Hero senza foto: sfondo a colore/texture (verde già in palette), fotografia spostata più in basso nella pagina
  - [ ] Cambio soggetto: immagine che includa anche un cane, non solo un gatto, coerente con "cani e gatti"
  - [ ] Nuovo scatto fotografico in ambulatorio
- [ ] Reperire/produrre il **nuovo asset immagine** (file da inserire in `public/foto/`)
- [ ] Aggiornare il riferimento immagine in [Hero.tsx](components/Hero.tsx)
- [ ] Aggiornare i riferimenti alla stessa immagine in [layout.tsx](app/layout.tsx) (Open Graph / JSON-LD) se il file cambia nome o contenuto
- [ ] Verificare come rende la nuova immagine anche in formato anteprima link (card social) oltre che come sfondo hero

---

## 3. Rimozione di eco-cardio ed eco-addome

Obiettivo: il sito non deve più indicare esami che la dottoressa invia sempre a un collega esterno.

- [ ] **Confermare con la dottoressa** se vuole:
  - [ ] (a) taglio secco — la voce sparisce e basta, oppure
  - [ ] (b) reinquadrare come rete di collaborazione (es. "per esami più approfonditi ci appoggiamo a specialisti esterni di fiducia")
- [ ] Aggiornare la descrizione del servizio "Diagnostica per immagini" in [site.ts](lib/site.ts) (riga `"Radiografie, ecografie ed ecocardiografie."`) — verificare anche se le "radiografie" restano un esame effettivamente svolto in ambulatorio
- [ ] Valutare se, dopo il taglio, "Diagnostica per immagini" ha ancora senso come voce numerata a sé in [ServicesSection.tsx](components/ServicesSection.tsx), o va accorpata/riformulata
- [ ] Aggiornare le keyword SEO in [layout.tsx](app/layout.tsx) che citano "ecografia veterinaria" ed "ecocardiografia veterinaria", per coerenza con la nuova descrizione dei servizi

---

## Ordine di lavoro consigliato

1. Punto 3 (rimozione eco-cardio/addome) — modifica di solo testo, a basso rischio, sblocca subito
2. Punto 1 (WhatsApp) — richiede numero/testo confermati, poi tocca più file ma è tutto frontend
3. Punto 2 (immagine hero) — richiede prima una decisione/asset, quindi va sbloccato per ultimo salvo che l'asset sia già pronto
