"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

import { messageTemplate } from "@/lib/site";

/**
 * Modello per il primo messaggio, copiabile negli appunti.
 *
 * Non serve a fare bella figura: serve a far arrivare alla dottoressa un primo
 * messaggio già completo, evitando il giro di domande che altrimenti si ripete
 * ogni volta. È l'unico pezzo di interattività del sito.
 */
export function ModelloMessaggio() {
  const [stato, setStato] = useState<"pronto" | "copiato" | "errore">("pronto");

  // Il ritorno allo stato iniziale è un effetto, non un timeout lasciato
  // appeso: smontando il componente non deve restare nulla in coda.
  useEffect(() => {
    if (stato === "pronto") return;
    const timer = setTimeout(() => setStato("pronto"), 2600);
    return () => clearTimeout(timer);
  }, [stato]);

  async function copia() {
    try {
      await navigator.clipboard.writeText(messageTemplate);
      setStato("copiato");
    } catch {
      // Contesti non sicuri, permessi negati, browser più vecchi: il testo
      // resta comunque visibile e selezionabile qui sotto.
      setStato("errore");
    }
  }

  return (
    <div className="border-t border-line-soft pt-6">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        Che cosa scrivere
      </p>
      <p className="mt-3 max-w-[32rem] text-[0.9375rem] leading-[1.7] text-ink/75">
        Più informazioni contiene il primo messaggio, meno scambi servono per
        fissare l&rsquo;appuntamento.
      </p>

      <pre className="mt-5 overflow-x-auto rounded-sm bg-sand p-5 font-sans text-[0.9375rem] leading-[1.8] whitespace-pre-wrap text-ink/85">
        {messageTemplate}
      </pre>

      <button
        type="button"
        onClick={copia}
        className="mt-4 inline-flex min-h-11 items-center gap-2.5 rounded-sm px-4 py-2.5 text-[0.9375rem] font-medium text-accent ring-1 ring-inset ring-accent/30 transition-colors hover:bg-accent/5 hover:ring-accent/50"
      >
        {stato === "copiato" ? (
          <Check className="size-4 shrink-0" strokeWidth={2} aria-hidden />
        ) : (
          <Copy className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
        )}
        {stato === "copiato" ? "Copiato" : "Copia il modello"}
      </button>

      {/* Un solo punto di annuncio, così lo screen reader legge ogni esito. */}
      <p role="status" aria-live="polite" className="mt-2 text-sm text-muted">
        {stato === "copiato" ? "Modello copiato negli appunti." : null}
        {stato === "errore"
          ? "Non è stato possibile copiare: seleziona il testo qui sopra."
          : null}
      </p>
    </div>
  );
}
