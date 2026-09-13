"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Ritardo in secondi, per scalare due o tre elementi in sequenza. */
  delay?: number;
  className?: string;
};

type Phase = "statico" | "nascosto" | "rivelato";

/**
 * Entrata sobria: dissolvenza e scorrimento di pochi pixel, una sola volta.
 *
 * L'invariante che tiene in piedi il componente è questa: un blocco viene
 * nascosto **solo** dallo stesso IntersectionObserver che poi lo rivelerà. Se
 * l'observer non parte — script bloccato, idratazione fallita, scheda aperta in
 * secondo piano e mai portata in primo piano — il blocco non viene mai
 * nascosto e resta quello servito dal server, cioè visibile.
 *
 * Di conseguenza:
 * - l'HTML del server non contiene mai `opacity: 0`;
 * - i contenuti già a schermo al caricamento non si dissolvono, perché non
 *   hanno motivo di farlo: sono ciò che il visitatore sta guardando;
 * - il nodo osservato non cambia mai identità, così l'observer non perde il
 *   proprio bersaglio a metà strada.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const element = useRef<HTMLDivElement>(null);
  const everHidden = useRef(false);
  const [phase, setPhase] = useState<Phase>("statico");

  useEffect(() => {
    if (reduceMotion) return;

    const node = element.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          // Si anima solo ciò che era stato davvero nascosto: tutto il resto
          // era già a schermo e non deve comparire dal nulla.
          if (everHidden.current) setPhase("rivelato");
          observer.disconnect();
        } else if (entry.boundingClientRect.top < 0) {
          // Il blocco è ormai sopra la finestra: lo si è superato senza che
          // arrivasse mai una soglia di intersezione — succede con uno scorrimento
          // rapido o con un salto ad ancora. Se restasse nascosto, la sezione
          // risulterebbe vuota risalendo la pagina.
          if (everHidden.current) setPhase("rivelato");
          observer.disconnect();
        } else if (!everHidden.current) {
          everHidden.current = true;
          setPhase("nascosto");
        }
      },
      /*
       * Soglia zero, non una frazione dell'elemento.
       *
       * Con `threshold: 0.15` un blocco alto restava invisibile ogni volta che
       * se ne vedeva solo il bordo superiore: un elenco di 480 px con 50 px a
       * schermo sta al 10%, sotto soglia, quindi l'observer non lo considerava
       * intersecante e la rivelazione non partiva mai. Succedeva fermandosi a
       * metà scorrimento e, in modo sistematico, saltando a un'ancora.
       *
       * Il margine negativo in basso sostituisce la soglia nel suo scopo
       * originale: non si rivela appena il bordo tocca la finestra, ma quando è
       * entrato per davvero — e il criterio non dipende più dall'altezza del
       * blocco.
       */
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <motion.div
      ref={element}
      className={className}
      // Nessuno stile iniziale in fase di render: l'HTML servito è visibile.
      initial={false}
      animate={
        phase === "nascosto" ? { opacity: 0, y: 14 } : { opacity: 1, y: 0 }
      }
      transition={
        phase === "rivelato"
          ? { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
          : { duration: 0 }
      }
    >
      {children}
    </motion.div>
  );
}
