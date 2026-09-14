"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MapPin, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { navLinks, site, whatsappHref, whatsappMessages } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  /*
   * Lo stato dell'header si legge da una sentinella osservata, non da
   * `window.scrollY`.
   *
   * Su Safari iOS quel valore può restare fermo a zero mentre la pagina scorre
   * davvero: l'header non passava mai allo stato opaco e il marchio spariva
   * sulle sezioni chiare. `IntersectionObserver` è mosso dal compositore e non
   * dagli eventi di scorrimento, quindi resta corretto anche in quel caso.
   */
  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  // Il menu mobile copre la pagina: blocca lo scorrimento sotto al pannello.
  useEffect(() => {
    if (!menuOpen) return;

    /*
     * Blocco dello scorrimento con `position: fixed` sul body.
     *
     * `overflow: hidden` sul body non trattiene la pagina su Safari iOS: è la
     * tecnica che la webdesigner ha trovato inefficace. L'offset si legge dal
     * rettangolo dell'elemento radice e non da `window.scrollY`, perché quel
     * valore è proprio quello di cui non ci si può fidare: se fosse sbagliato,
     * alla chiusura del menu la pagina salterebbe in cima.
     */
    const body = document.body;
    const offset = Math.round(
      -document.documentElement.getBoundingClientRect().top,
    );
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    body.style.position = "fixed";
    body.style.top = `-${offset}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key !== "Tab") return;
      const links = Array.from(
        headerRef.current?.querySelectorAll<HTMLElement>("a[href], button") ??
          [],
      ).filter((element) => element.getClientRects().length > 0);
      const first = links[0];
      const last = links.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onResize = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", onResize);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      // `instant`: con `scroll-behavior: smooth` la pagina tornerebbe al punto
      // di partenza con un'animazione che sembra uno scatto indietro.
      window.scrollTo({ top: offset, behavior: "instant" });

      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  // Con il menu aperto l'header deve essere opaco anche in cima alla pagina.
  const solid = scrolled || menuOpen;
  const whatsapp = whatsappHref(whatsappMessages.generale);

  return (
    <>
      {/*
        Sentinella dello scorrimento: l'header è `fixed` e non si muove, quindi
        non può misurarsi da solo. Questo blocco alto 24 px resta in cima al
        documento e scorre via con la pagina.
      */}
      <div
        ref={sentinelRef}
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-6 w-px"
      />

      {/*
        Il guscio `<header>` si occupa solo di posizionamento: il vetro sta sul
        blocco interno.

        Non è un vezzo strutturale. `backdrop-filter` rende l'elemento
        contenitore di riferimento per i discendenti `position: fixed`: con il
        vetro sull'`<header>`, che è alto 4,5 rem, il pannello del menu si
        calcolava dentro quella fascia e collassava a un pixel invece di coprire
        lo schermo.
      */}
      <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "transition-[background-color,border-color,box-shadow] duration-300",
            // Lo stesso fondo chiaro protegge la leggibilità sopra foto e sezioni.
            "vetro vetro-chiaro border-b",
            solid ? "border-line shadow-sm" : "border-transparent",
          )}
        >
          <div className="wrap flex h-[4.5rem] items-center justify-between gap-6 xl:h-20">
            <Link
              href="/"
              className="-my-2 shrink-0 py-2"
              aria-label={`${site.name}, vai alla pagina iniziale`}
            >
              <Wordmark />
            </Link>

            <nav
              aria-label="Navigazione principale"
              className="hidden xl:block"
            >
              <ul className="flex items-center gap-7">
                {navLinks.map((link) => {
                  const attiva = pathname === link.href;

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={attiva ? "page" : undefined}
                        className={cn(
                          "relative text-[0.9375rem] transition-colors",
                          "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-action after:transition-[width] after:duration-300 hover:after:w-full",
                          attiva ? "after:w-full" : "after:w-0",
                          attiva ? "text-action" : "text-ink hover:text-action",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={site.directions}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Come raggiungerci, apri le indicazioni"
                className={cn(
                  // Visibile a ogni larghezza: tolta la barra di contatto in
                  // basso, sotto i 640 px questo restava l'unico collegamento
                  // permanente alle indicazioni e spariva proprio dove serve.
                  "inline-flex size-11 items-center justify-center rounded-sm transition-colors",
                  "text-muted hover:bg-surface-alt hover:text-heading",
                )}
              >
                <MapPin
                  className="size-[1.125rem]"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hidden items-center gap-2.5 rounded-sm px-5 py-3 text-sm font-medium transition-colors sm:inline-flex",
                  "bg-action text-white hover:bg-action-hover active:bg-action-hover",
                )}
              >
                <WhatsAppIcon className="size-4" />
                <span>Scrivici su WhatsApp</span>
              </a>

              {/*
                Solo l'icona: la parola accanto è stata tolta su richiesta.
                Il nome accessibile resta nell'`aria-label`, e `active:` tiene
                il riscontro immediato al tocco — senza, premendo non succedeva
                niente di visibile e il pulsante sembrava rotto.
              */}
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="menu-mobile"
                aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
                className="-mr-2 inline-flex size-12 items-center justify-center rounded-sm text-heading transition-colors active:bg-surface-alt xl:hidden"
              >
                {menuOpen ? (
                  <X
                    className="pointer-events-none size-6"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                ) : (
                  <Menu
                    className="pointer-events-none size-6"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/*
          Sovrapposizione a schermo intero invece di un pannello in coda
          all'header: non dipende dal comportamento di `dvh` su iOS e copre per
          intero ciò che sta sotto, così un eventuale scorrimento residuo della
          pagina non si vede. Resta l'attributo `hidden`, che toglie il pannello
          dal flusso e dalla navigazione su qualunque browser, anche dove
          `inert` non è supportato.
        */}
        <div
          id="menu-mobile"
          hidden={!menuOpen}
          className="menu-pannello fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto overscroll-contain border-t border-line-soft bg-surface xl:hidden"
        >
          <nav
            aria-label="Navigazione principale, versione compatta"
            className="wrap py-3"
          >
            <ul className="divide-y divide-line-soft">
              {navLinks.map((link) => {
                const attiva = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={attiva ? "page" : undefined}
                      // Navigando dal pannello il menu deve richiudersi: senza
                      // smontaggio dell'header resterebbe aperto sulla pagina nuova.
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "block py-4 font-serif text-xl",
                        attiva ? "text-action" : "text-heading",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-3 rounded-sm bg-action px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-action-hover active:bg-action-hover"
            >
              <WhatsAppIcon className="size-5" />
              Scrivici su WhatsApp
            </a>
            <a
              href={site.directions}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 mb-2 flex items-center justify-center gap-2.5 rounded-sm px-6 py-3 text-[0.9375rem] text-muted"
            >
              <MapPin className="size-4" strokeWidth={1.75} aria-hidden />
              Come raggiungerci
            </a>
            <p className="pb-2 text-center text-sm text-muted">
              {site.availability}
            </p>
          </nav>
        </div>
      </header>
    </>
  );
}
