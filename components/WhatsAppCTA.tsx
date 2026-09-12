import { ArrowUpRight } from "lucide-react";

import { whatsappHref, whatsappMessages, type WhatsAppContext } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  /** Determina il messaggio precompilato: cambia da pagina a pagina. */
  contesto: WhatsAppContext;
  /** `light` sul verde profondo, `solid` sulle superfici chiare. */
  variante?: "solid" | "light";
  /** Freccia di uscita: si usa solo dove la CTA è l'azione principale. */
  freccia?: boolean;
  className?: string;
  /** Marcatore per le affordance fisse: vedi `useContactVisibility`. */
  marcatore?: "inizio" | "fine";
};

/**
 * Unico punto da cui passano tutte le chiamate all'azione verso WhatsApp.
 *
 * L'etichetta è sempre «Scrivici su WhatsApp»: è la formula scelta dal
 * committente e non va declinata diversamente da pagina a pagina.
 */
export function WhatsAppCTA({
  contesto,
  variante = "solid",
  freccia = false,
  className,
  marcatore,
}: Props) {
  return (
    <a
      href={whatsappHref(whatsappMessages[contesto])}
      target="_blank"
      rel="noopener noreferrer"
      data-contact-start={marcatore === "inizio" ? "" : undefined}
      className={cn(
        "whatsapp-cta",
        variante === "light" && "whatsapp-cta-light",
        className,
      )}
    >
      <WhatsAppIcon
        className={cn(
          "size-5 shrink-0",
          variante === "solid" && "text-whatsapp-bright",
        )}
      />
      Scrivici su WhatsApp
      {freccia ? (
        <ArrowUpRight className="ml-2 size-4 shrink-0" strokeWidth={1.75} aria-hidden />
      ) : null}
    </a>
  );
}
