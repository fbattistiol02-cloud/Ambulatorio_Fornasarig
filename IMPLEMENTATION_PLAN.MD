# Piano di implementazione — Ambulatorio Fornasarig

Piano di lavoro per le tre modifiche richieste dalla Dott.ssa Fornasarig.

Legenda checklist: `[ ]` da fare · `[x]` fatto

---

## 1. WhatsApp come canale di contatto prioritario ✅

Obiettivo: la dottoressa vuole evitare le telefonate. WhatsApp è l'azione principale ovunque; il telefono non è più offerto come opzione da nessuna parte — al suo posto, "vieni in ambulatorio" (indicazioni stradali).

Punti di contatto aggiornati (in ordine di impatto):

- [x] **[MobileCallBar.tsx](components/MobileCallBar.tsx)** — barra fissa in fondo su mobile. WhatsApp è il pulsante grande/primario; l'icona secondaria porta alle indicazioni stradali, non più al telefono.
- [x] **[Hero.tsx](components/Hero.tsx)** — CTA principale sotto il titolo. WhatsApp come primo pulsante, "Vieni in ambulatorio" (indicazioni) come secondo.
- [x] **[Header.tsx](components/Header.tsx)** — pillola desktop e voce nel menu mobile: WhatsApp come azione primaria, l'icona/voce secondaria porta alle indicazioni stradali.
- [x] **[ContactSection.tsx](components/ContactSection.tsx)** — blocco "Prenota una visita": WhatsApp in evidenza, "Oppure vieni in ambulatorio" (indicazioni) al posto del numero di telefono.
- [x] **[Footer.tsx](components/Footer.tsx)** — nell'elenco contatti resta solo WhatsApp ed email; il numero di telefono è stato tolto.
- [x] **[WhatsAppFloatingButton.tsx](components/WhatsAppFloatingButton.tsx)** — nuovo bottone fluttuante, visibile su desktop (su mobile il ruolo è già coperto dalla barra fissa).
- [x] **[ProfileSection.tsx](components/ProfileSection.tsx)** — tolto ogni riferimento al telefono come modo di prenotare.

Dettagli trasversali:

- [x] Testo precompilato definito: *"Ciao, vorrei prenotare una visita per il mio gatto/cane."* — usato in tutti i link `wa.me` (vedi [site.ts](lib/site.ts)).
- [x] Numero WhatsApp confermato: stesso del telefono, `338 827 3705` (il campo `phone` resta in `site.ts` solo come dato informativo/strutturato, non più collegato a nessun pulsante "chiama").
- [x] Stile del pulsante deciso: verde WhatsApp dedicato (nuovi token `whatsapp` / `whatsapp-deep` / `whatsapp-bright` in [globals.css](app/globals.css), scelti per contrasto AA con testo bianco), non l'accent del sito — massima riconoscibilità come CTA WhatsApp.
- [x] Microcopy *"Risposta rapida su WhatsApp"* aggiunta sotto i CTA dell'hero.
- [x] Verificato che nessun bottone "chiama"/telefono resti come opzione cliccabile in nessuna sezione.

Verificato in locale (mobile e desktop) prima di considerarlo concluso.

---

## 2. Sostituzione dell'immagine hero (il "gatto enorme") ✅

Obiettivo: sostituire la foto dell'hero, mantenendo la stessa struttura di prima (foto a schermo intero come sfondo, dietro al testo) — non un redesign della sezione.

- [x] **Foto scelta**: cane e gatto insieme (Thomas de Fretes, Unsplash, licenza gratuita), al posto del primo piano sul gatto.
- [x] Nuovo asset scaricato e inserito in `public/foto/cane-gatto.jpg` (2400×3600, ~1,8 MB, scaricato solo dopo conferma esplicita in chat).
- [x] Riferimento immagine aggiornato in [Hero.tsx](components/Hero.tsx) mantenendo esattamente lo stesso meccanismo di prima (`fill` + `object-cover` a schermo intero, stesse velature): un primo tentativo aveva trasformato l'hero desktop in un riquadro laterale — corretto su segnalazione, ripristinata la foto come sfondo pieno su entrambi i formati.
- [x] Aggiornati i riferimenti alla vecchia immagine in [layout.tsx](app/layout.tsx) (Open Graph e JSON-LD) sulla nuova foto.
- [x] Verificato visivamente su mobile e desktop.

Nota: `visita-gatto.jpg` non è più referenziata da nessun componente ma è stata lasciata in `public/foto/` (è un file della dottoressa, non l'ho cancellato di mia iniziativa).

---

## 3. Rimozione di eco-cardio ed eco-addome ✅

Obiettivo: il sito non deve più indicare esami che la dottoressa invia sempre a un collega esterno.

- [x] Confermato con te: **taglio secco** (nessun accenno alla rete di specialisti esterni), radiografie confermate come esame svolto in ambulatorio.
- [x] Descrizione del servizio "Diagnostica per immagini" in [site.ts](lib/site.ts) aggiornata a `"Radiografie."`.
- [x] Valutato se la voce avesse ancora senso da sola: sì, resta un servizio a sé (radiografie restano un esame reale offerto).
- [x] Keyword SEO in [layout.tsx](app/layout.tsx) aggiornate: rimosse "ecografia veterinaria" ed "ecocardiografia veterinaria", aggiunta "radiografia veterinaria Udine".

---

## Stato generale

Tutti e tre i punti sono implementati e verificati in locale (`npx tsc --noEmit` e `npx eslint` puliti). Non ancora committati/pushati su GitHub — da fare quando confermi che va bene così.
