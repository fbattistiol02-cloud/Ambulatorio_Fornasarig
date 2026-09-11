"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Barra di chiamata fissa, solo su mobile. Compare dopo la hero: finché la
 * hero è a schermo il pulsante di chiamata è già lì, e coprirlo sarebbe
 * ridondante.
 */
export function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-deep-3/40 bg-deep/95 backdrop-blur-md transition-transform duration-300 lg:hidden",
        "pb-[env(safe-area-inset-bottom)]",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      // Fuori schermo la barra non deve essere raggiungibile da tastiera.
      inert={!visible}
    >
      <div className="wrap py-3">
        <a
          href={site.phone.href}
          className="flex items-center justify-center gap-3 rounded-sm bg-accent px-6 py-4 text-lg font-semibold text-white"
        >
          <Phone className="size-5 shrink-0" strokeWidth={2} aria-hidden />
          Chiama {site.phone.label}
        </a>
      </div>
    </div>
  );
}
