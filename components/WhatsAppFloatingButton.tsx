"use client";

import { useEffect, useState } from "react";

import { whatsappHref, whatsappMessages } from "@/lib/site";
import { useContactVisibility } from "@/lib/useContactVisibility";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Il contatto WhatsApp sempre a portata di pollice.
 *
 * Su telefono è permanente: è l'unica affordance di contatto fissa rimasta, e
 * legarla allo scorrimento significava lasciare intere schermate senza alcun
 * modo di scrivere all'ambulatorio.
 *
 * Da `lg` in su resta il comportamento approvato dal cliente: compare quando la
 * CTA della hero è passata e si ritira sul blocco contatti, dove sarebbe un
 * doppione di quello che il visitatore ha già sotto gli occhi.
 */
export function WhatsAppFloatingButton() {
  const visible = useContactVisibility();
  const [desktop, setDesktop] = useState(false);

  /*
   * `inert` è un attributo, non una classe: non può avere varianti per
   * larghezza. Serve quindi sapere in JavaScript se siamo oltre `lg`, perché
   * sotto quella soglia il pulsante è sempre attivo e non va mai reso inerte.
   */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const sync = () => setDesktop(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <a
      href={whatsappHref(whatsappMessages.generale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      inert={desktop && !visible}
      data-contact-affordance
      className={cn(
        "fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-action text-white shadow-lg shadow-heading/25 transition-[opacity,transform,background-color] duration-200 hover:bg-action-hover active:bg-action-hover lg:right-6 lg:bottom-6",
        // Sopra la barra di sistema dell'iPhone, non sotto.
        "mb-[env(safe-area-inset-bottom)]",
        visible
          ? "translate-y-0 opacity-100"
          : "lg:pointer-events-none lg:translate-y-20 lg:opacity-0",
      )}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
