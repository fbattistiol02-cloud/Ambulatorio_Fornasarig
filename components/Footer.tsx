import Link from "next/link";

import { navLinks, site, whatsappHref, whatsappMessages } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    /* Il margine inferiore lascia spazio alla barra di contatto fissa su mobile. */
    <footer className="bg-deep pt-16 pb-28 text-bone lg:pt-20 lg:pb-12">
      <div className="wrap">
        <div className="grid gap-10 border-b border-bone/12 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <Wordmark tone="light" size="md" />
          </div>

          <nav aria-label="Navigazione a piè di pagina">
            <h2 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-bone/55">
              Pagine
            </h2>
            <ul className="mt-2 text-[0.9375rem]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-bone/75 transition-colors hover:text-accent-warm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-bone/55">
              Ambulatorio
            </h2>
            <address className="mt-4 text-[0.9375rem] not-italic leading-relaxed text-bone/75">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.locality}
              <br />
              {site.address.municipality} ({site.address.province})
            </address>
            <p className="mt-3 text-[0.9375rem] text-bone/55">
              {site.availability}
            </p>
          </div>

          <div>
            <h2 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-bone/55">
              Contatti
            </h2>
            {/* `min-h-11`: bersagli tattili comodi anche in fondo alla pagina. */}
            <ul className="mt-2 text-[0.9375rem]">
              <li>
                <a
                  href={whatsappHref(whatsappMessages.generale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-bone/75 transition-colors hover:text-accent-warm"
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  Scrivici su WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.email.href}
                  className="inline-flex min-h-11 items-center break-words text-bone/75 transition-colors hover:text-accent-warm"
                >
                  {site.email.label}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-bone/55">
              Dati professionali
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-bone/75">
              {site.doctor}
              <br />
              {site.role} — {site.degree}
              <br />
              {site.certification}
            </p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-bone/55">
              {site.order}
              <br />
              {site.registration}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-[0.8125rem] text-bone/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p>Percoto — Pavia di Udine, Friuli-Venezia Giulia</p>
        </div>
      </div>
    </footer>
  );
}
