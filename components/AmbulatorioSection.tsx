import { ArrowUpRight } from "lucide-react";

import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function AmbulatorioSection() {
  return (
    <section id="ambulatorio" className="bg-sand py-16 sm:py-20 lg:py-24">
      <div className="wrap">
        <div className="grid gap-9 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-accent">L&rsquo;ambulatorio</p>
              <h2 className="mt-6 text-[2.125rem] leading-[1.12] text-deep sm:text-[2.75rem] lg:text-[3.25rem]">
                <span className="mb-2 block font-sans text-sm font-medium tracking-normal text-muted">Dott.ssa</span>
                Elena Fornasarig
              </h2>
              <p className="mt-5 text-base text-ink/80">
                {site.role} · {site.degree}
              </p>
              <a href="#profilo" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
                Profilo professionale
                <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
              </a>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:pt-10">
            <Reveal delay={0.1}>
              <p className="max-w-[34rem] text-lg leading-[1.75] text-ink/85 lg:text-xl">
                A Percoto, un ambulatorio dedicato alla salute di cani e gatti,
                con una preparazione specifica in medicina felina.
              </p>
              <div className="mt-7 border-t border-line pt-6">
                <p className="text-base font-medium text-deep">{site.availability}</p>
                <p className="mt-2 max-w-[32rem] text-base leading-relaxed text-ink/80">
                  Per informazioni e per concordare una visita, scrivi su WhatsApp.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
