"use client";

import { useEffect, useState } from "react";

/**
 * Decide quando mostrare le affordance di contatto fisse (barra mobile e
 * pulsante flottante).
 *
 * Due marcatori opzionali, cercati nel documento:
 *
 * - `[data-contact-start]` — il contatto già presente nella pagina: finché è a
 *   schermo le affordance fisse sarebbero un doppione. È la CTA della hero in
 *   home; nelle pagine interne non esiste e si usa una soglia di scorrimento.
 * - `[data-contact-end]` — il blocco di contatto finale della pagina: da lì in
 *   poi le affordance si ritirano, perché il contatto è già sotto gli occhi.
 *
 * Senza marcatori la barra resta disponibile dopo la prima schermata: è il
 * comportamento corretto per una pagina di solo testo.
 */
export function useContactVisibility() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const start = document.querySelector("[data-contact-start]");
    const end = document.querySelector("[data-contact-end]");

    let started = false;
    let ended = false;
    const update = () => setVisible(started && !ended);

    const observers: IntersectionObserver[] = [];
    let onScroll: (() => void) | undefined;

    if (start) {
      const observer = new IntersectionObserver(([entry]) => {
        started =
          !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
        update();
      });
      observer.observe(start);
      observers.push(observer);
    } else {
      onScroll = () => {
        started = window.scrollY > 320;
        update();
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    if (end) {
      const observer = new IntersectionObserver(([entry]) => {
        // Anche una volta superato: il footer contiene già il collegamento.
        ended = entry.isIntersecting || entry.boundingClientRect.top < 0;
        update();
      });
      observer.observe(end);
      observers.push(observer);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
      if (onScroll) window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return visible;
}
