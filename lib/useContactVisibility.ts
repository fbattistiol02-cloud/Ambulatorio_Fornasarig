"use client";

import { useEffect, useState } from "react";

/** Mantiene il contatto disponibile tra il pulsante iniziale e la sezione contatti. */
export function useContactVisibility() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroContact = document.querySelector("[data-hero-contact]");
    const contactSection = document.getElementById("contatti");
    if (!heroContact || !contactSection) return;

    let heroPassed = false;
    let contactsReached = false;
    const update = () => setVisible(heroPassed && !contactsReached);
    const heroObserver = new IntersectionObserver(([entry]) => {
      heroPassed = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
      update();
    });
    const contactObserver = new IntersectionObserver(([entry]) => {
      // Anche dopo i contatti: il footer contiene già il collegamento WhatsApp.
      contactsReached = entry.isIntersecting || entry.boundingClientRect.top < 0;
      update();
    });
    heroObserver.observe(heroContact);
    contactObserver.observe(contactSection);
    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  return visible;
}
