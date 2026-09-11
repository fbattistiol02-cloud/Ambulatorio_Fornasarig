"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";
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
            href={site.phone.href}
            className={cn(
              "hidden items-center gap-2.5 rounded-sm px-5 py-3 text-[0.9375rem] font-medium transition-colors sm:inline-flex",
              solid
                ? "bg-deep text-bone hover:bg-deep-2"
                : "bg-bone/10 text-bone ring-1 ring-inset ring-bone/30 backdrop-blur-sm hover:bg-bone/20",
            )}
          >
            <Phone className="size-4" strokeWidth={1.75} aria-hidden />
            <span>{site.phone.label}</span>
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
            href={site.phone.href}
            onClick={() => setMenuOpen(false)}
            className="mt-5 mb-2 flex items-center justify-center gap-3 rounded-sm bg-accent px-6 py-4 text-lg font-semibold text-white"
          >
            <Phone className="size-5" strokeWidth={2} aria-hidden />
            {site.phone.label}
          </a>
          <p className="pb-2 text-center text-sm text-muted">
            {site.availability}
          </p>
        </nav>
      </div>
    </header>
  );
}
