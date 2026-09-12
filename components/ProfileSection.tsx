import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

const credentials = [
  { label: "Certificazione", value: site.certification },
  { label: "Ordine professionale", value: site.order },
  { label: "Albo", value: site.registration },
] as const;

export function ProfileSection() {
  return (
    <section id="profilo" className="bg-sand py-16 lg:py-20">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-accent">Profilo professionale</p>
              <h2 className="mt-5 text-[1.75rem] leading-[1.2] text-deep sm:text-[2.125rem]">
                {site.doctor}
              </h2>
              <p className="mt-3 text-base text-ink/80">{site.role} — {site.degree}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.12}>
              <dl className="border-t border-line">
                {credentials.map((item) => (
                  <div key={item.label} className="border-b border-line py-5">
                    <dt className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-lg leading-snug text-deep">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
