"use client";

import { Menu, MapPin, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Il menu mobile copre la hero: blocca lo scorrimento sotto al pannello.
  useEffect(() => {
    if (!menuOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // Con il menu aperto l'header deve essere opaco anche in cima alla pagina.
  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-line-soft bg-bone/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <a
          href="#top"
          className="-my-2 shrink-0 py-2"
          aria-label={`${site.name}, torna all'inizio`}
        >
          <Wordmark tone={solid ? "dark" : "light"} />
        </a>

        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative text-[0.9375rem] transition-colors",
                    "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-[width] after:duration-300 hover:after:w-full",
                    solid
                      ? "text-ink/80 hover:text-deep"
                      : "text-bone/85 hover:text-bone",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.directions}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vieni in ambulatorio, ottieni indicazioni"
            className={cn(
              "hidden size-11 items-center justify-center rounded-sm transition-colors sm:inline-flex",
              solid
                ? "text-ink/70 hover:bg-sand hover:text-deep"
                : "text-bone/85 hover:bg-bone/10 hover:text-bone",
            )}
          >
            <MapPin className="size-[1.125rem]" strokeWidth={1.75} aria-hidden />
          </a>

          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2.5 rounded-sm bg-whatsapp px-5 py-3 text-[0.9375rem] font-medium text-white transition-colors hover:bg-whatsapp-deep sm:inline-flex"
          >
            <WhatsAppIcon className="size-4 text-whatsapp-bright" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
            className={cn(
              "-mr-2 inline-flex size-11 items-center justify-center rounded-sm transition-colors lg:hidden",
              solid ? "text-deep hover:bg-sand" : "text-bone hover:bg-bone/10",
            )}
          >
            {menuOpen ? (
              <X className="size-6" strokeWidth={1.75} aria-hidden />
            ) : (
              <Menu className="size-6" strokeWidth={1.75} aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!menuOpen}
        className="border-t border-line-soft bg-bone lg:hidden"
      >
        <nav aria-label="Navigazione principale, versione compatta" className="wrap py-3">
          <ul className="divide-y divide-line-soft">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 font-serif text-xl text-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex items-center justify-center gap-3 rounded-sm bg-whatsapp px-6 py-4 text-lg font-semibold text-white"
          >
            <WhatsAppIcon className="size-5 text-whatsapp-bright" />
            Scrivici su WhatsApp
          </a>
          <a
            href={site.directions}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 mb-2 flex items-center justify-center gap-2.5 rounded-sm px-6 py-3 text-[0.9375rem] text-deep/70"
          >
            <MapPin className="size-4" strokeWidth={1.75} aria-hidden />
            Oppure vieni in ambulatorio
          </a>
          <p className="pb-2 text-center text-sm text-muted">
            {site.availability}
          </p>
        </nav>
      </div>
    </header>
  );
}
