import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Briciole } from "@/components/Briciole";
import { Trasportino, type PassoTrasportino } from "@/components/disegni/Trasportino";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { site } from "@/lib/site";

const description =
  "Come abituare il gatto al trasportino, quali cambiamenti meritano una visita " +
  "e perché il gatto nasconde il dolore. Guida pratica per chi vive con un gatto, " +
  `a cura della ${site.doctor}, ${site.certification}.`;

export const metadata: Metadata = {
  title: "Guida per chi ha un gatto",
  description,
  keywords: [
    "abituare il gatto al trasportino",
    "portare il gatto dal veterinario",
    "segni di malattia nel gatto",
    "il gatto nasconde il dolore",
  ],
  alternates: { canonical: "/guida-gatto" },
  openGraph: {
    title: `Guida per chi ha un gatto — ${site.shortName}`,
    description,
    url: "/guida-gatto",
  },
};

/*
 * Tutto ciò che segue è vero per i gatti in generale ed è verificabile.
 * Nessuna frase di questa pagina descrive la prassi interna dell'ambulatorio:
 * non sarebbe possibile farsela confermare.
 */

const passiTrasportino: {
  passo: PassoTrasportino;
  titolo: string;
  testo: string;
}[] = [
  {
    passo: "aperto",
    titolo: "Tienilo aperto in casa, tutto l'anno",
    testo:
      "Se l'unica volta che il gatto vede il trasportino è il giorno della visita, imparerà ad associarlo a qualcosa di sgradevole. Lasciato aperto in un angolo, con il tempo diventa un posto qualunque della casa — e a volte perfino un posto dove dormire.",
  },
  {
    passo: "coperta",
    titolo: "Mettici dentro qualcosa che sa di casa",
    testo:
      "Una coperta o una maglietta già usata rendono l'interno riconoscibile. Per il gatto l'olfatto conta più della vista: un odore familiare fa più dei rinforzi e delle rassicurazioni.",
  },
  {
    passo: "telo",
    titolo: "Coprilo con un telo durante il viaggio",
    testo:
      "Ridurre gli stimoli visivi abbassa lo stress. Un telo leggero appoggiato sopra il trasportino è uno degli accorgimenti più semplici ed efficaci, in auto e in sala d'attesa.",
  },
  {
    passo: "auto",
    titolo: "Fissalo in auto",
    testo:
      "Il trasportino va assicurato con la cintura, non appoggiato libero sul sedile né lasciato nel bagagliaio. Vale per la sicurezza dell'animale e per quella di chi guida.",
  },
];

const segnali = [
  "Beve più del solito, o urina più del solito.",
  "Mangia meno, o ha smesso di mangiare.",
  "Dimagrisce pur continuando a mangiare.",
  "Si nasconde più del solito, o cambia i posti dove dorme.",
  "Non usa più la lettiera, oppure ci entra spesso senza produrre nulla.",
  "Respira a bocca aperta, o con la pancia.",
  "Smette di lavarsi, oppure si lava molto in un punto solo.",
  "Cambia carattere in modo improvviso.",
] as const;

const preparazione = [
  "Annota da quando dura il sintomo: è la prima domanda che ti verrà fatta.",
  "Se puoi, fai un breve video. Molti segni non si ripresentano in ambulatorio.",
  "Porta il libretto sanitario e l'elenco dei farmaci in corso.",
  "Non tenere l'animale a digiuno se non ti è stato chiesto di farlo.",
] as const;

const faq = [
  {
    domanda: "Come si abitua un gatto al trasportino?",
    risposta:
      "Tenendolo aperto in casa tutto l'anno, invece di tirarlo fuori solo il giorno della visita, e mettendoci dentro una coperta o un capo che abbia l'odore di casa. Durante il viaggio conviene coprirlo con un telo leggero e fissarlo in auto con la cintura.",
  },
  {
    domanda: "Quali cambiamenti nel gatto meritano una visita veterinaria?",
    risposta:
      "Bere o urinare più del solito, mangiare meno, dimagrire pur mangiando, nascondersi più del solito, non usare più la lettiera, respirare a bocca aperta, smettere di lavarsi o cambiare carattere all'improvviso. Non sono diagnosi: sono cambiamenti che meritano un controllo.",
  },
  {
    domanda: "Perché il gatto nasconde il dolore?",
    risposta:
      "Perché è insieme predatore e preda: per un animale che in natura può essere cacciato, mostrare debolezza è pericoloso. Non ha una soglia del dolore più alta, semplicemente lo manifesta meno. Per questo un gatto malato somiglia spesso a un gatto che riposa.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((voce) => ({
    "@type": "Question",
    name: voce.domanda,
    acceptedAnswer: { "@type": "Answer", text: voce.risposta },
  })),
};

export default function GuidaGatto() {
  return (
    <>
      <PageHeader
        occhiello="Guida"
        luce={{ x: "50%", y: "6%" }}
        titolo="Guida per chi ha un gatto."
        intro="Quasi tutto quello che rende una visita sopportabile succede prima della visita, a casa. Qui ci sono le cose che funzionano, e i cambiamenti che vale la pena non lasciar passare."
      />

      {/* 1 — Il trasportino. */}
      <section className="bg-bone py-16 lg:py-24" aria-labelledby="trasportino">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <p className="eyebrow text-accent">Il trasportino</p>
                  <h2
                    id="trasportino"
                    className="mt-6 text-[1.875rem] leading-[1.2] text-deep sm:text-[2.25rem]"
                  >
                    Il viaggio comincia settimane prima.
                  </h2>
                  <figure className="mt-8">
                    <div className="photo grain relative aspect-4/5">
                      <Image
                        src="/foto/gatto-trasportino.webp"
                        alt="Un gatto bianco e arancione seduto dentro un trasportino semitrasparente"
                        fill
                        sizes="(min-width: 1024px) 38vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-4 text-sm leading-relaxed text-muted">
                      Un trasportino conosciuto è un trasportino in cui il gatto
                      entra da solo.
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ol className="ed-list">
                {passiTrasportino.map((passo, indice) => (
                  <li key={passo.passo}>
                    <Reveal delay={indice * 0.06}>
                      <article className="py-8 lg:py-10">
                        <div className="flex items-start gap-5">
                          <Trasportino passo={passo.passo} className="mt-1 shrink-0" />
                          <div>
                            <p
                              aria-hidden
                              className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted"
                            >
                              Passo {indice + 1}
                            </p>
                            <h3 className="mt-2 text-xl leading-snug text-deep sm:text-2xl">
                              {passo.titolo}
                            </h3>
                          </div>
                        </div>
                        <p className="mt-4 max-w-[38rem] text-[0.9375rem] leading-[1.75] text-ink/70">
                          {passo.testo}
                        </p>
                      </article>
                    </Reveal>
                  </li>
                ))}
              </ol>

              <Reveal delay={0.2}>
                <p className="note mt-8 max-w-[38rem] text-[0.9375rem] leading-[1.7]">
                  Non forzare mai l&rsquo;ingresso spingendo il gatto dalla porta
                  anteriore. Se il trasportino si apre anche dall&rsquo;alto, è
                  quasi sempre la via più semplice: si appoggia il gatto dentro
                  invece di infilarcelo.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Perché il gatto nasconde il dolore. */}
      <section className="bg-deep text-bone" aria-labelledby="dolore">
        <div className="photo grain relative h-[16rem] w-full sm:h-[20rem] lg:h-[24rem]">
          <Image
            src="/foto/gatto-riposo-luce.webp"
            alt="Un gatto dorme su un tappeto, in una lama di luce, accanto a una parete di legno"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="wrap py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-accent-warm">Il dolore</p>
                <h2
                  id="dolore"
                  className="mt-6 text-[1.75rem] leading-[1.2] text-bone sm:text-[2.125rem]"
                >
                  Un gatto malato somiglia a un gatto che riposa.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.1}>
                <p className="text-[1.0625rem] leading-[1.75] text-bone/80">
                  Il gatto è insieme predatore e preda. Per un animale che in
                  natura può essere a sua volta cacciato, mostrare debolezza è
                  pericoloso: la tendenza a non manifestare il dolore è un
                  comportamento, non una soglia del dolore più alta. Soffre quanto
                  gli altri, lo fa vedere meno.
                </p>
                <p className="mt-5 text-[0.9375rem] leading-[1.75] text-bone/60">
                  È anche la ragione per cui chi vive con lui è la fonte di
                  informazioni più importante di tutta la visita: i cambiamenti
                  piccoli li nota soltanto chi c&rsquo;è tutti i giorni.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Segnali. */}
      <section className="bg-sand py-16 lg:py-24" aria-labelledby="segnali">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow text-accent">Quando farlo vedere</p>
                <h2
                  id="segnali"
                  className="mt-6 text-[1.875rem] leading-[1.2] text-deep sm:text-[2.25rem]"
                >
                  Cambiamenti che vale la pena non lasciar passare.
                </h2>
                <p className="mt-6 max-w-[32rem] text-[1.0625rem] leading-[1.7] text-ink/75">
                  Nessuno di questi è una diagnosi e nessuno va interpretato da
                  solo. Sono cambiamenti che meritano un controllo: in un gatto,
                  un&rsquo;abitudine che cambia è spesso l&rsquo;unico segnale
                  disponibile.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <ul className="ed-list mt-8">
                  {segnali.map((segnale) => (
                    <li
                      key={segnale}
                      className="py-4 text-[1.0625rem] leading-[1.6] text-ink/85"
                    >
                      {segnale}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="note mt-8 max-w-[34rem] text-[0.9375rem] leading-[1.7]">
                  Alcune situazioni non aspettano: un gatto che respira a bocca
                  aperta, che tenta di urinare senza riuscirci o che è
                  improvvisamente immobile e dolorante va fatto vedere subito. In
                  caso di urgenza fuori orario, rivolgiti al servizio di pronto
                  soccorso veterinario più vicino.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.16}>
                <figure className="lg:sticky lg:top-32">
                  <div className="photo grain relative aspect-3/2">
                    <Image
                      src="/foto/gatto-sotto-divano.webp"
                      alt="Un gatto grigio sdraiato su un tappeto, sotto il bordo di un divano"
                      fill
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm leading-relaxed text-muted">
                    Nascondersi più del solito è uno dei cambiamenti che passa
                    più facilmente inosservato.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Prepararsi alla visita. */}
      <section
        data-contact-end
        className="bg-bone py-16 lg:py-24"
        aria-labelledby="preparazione"
      >
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-accent">Prima della visita</p>
                <h2
                  id="preparazione"
                  className="mt-6 text-[1.75rem] leading-[1.2] text-deep sm:text-[2.125rem]"
                >
                  Come prepararsi.
                </h2>
                <p className="mt-6 max-w-[30rem] text-[1.0625rem] leading-[1.7] text-ink/75">
                  {site.availability} Se hai notato qualcosa e non sei sicuro che
                  valga una visita, scrivici: è il modo più rapido per capirlo.
                </p>
                <WhatsAppCTA contesto="guida" className="mt-7 w-full sm:w-auto" />
                <p className="mt-4 text-[0.9375rem] text-muted">
                  Le indicazioni su che cosa portare sono nella{" "}
                  <Link
                    href="/prestazioni"
                    className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                  >
                    pagina prestazioni
                  </Link>
                  .
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.12}>
                <ul className="ed-list">
                  {preparazione.map((voce) => (
                    <li
                      key={voce}
                      className="py-5 text-[1.0625rem] leading-[1.6] text-ink/85"
                    >
                      {voce}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Briciole pagina="Guida per chi ha un gatto" href="/guida-gatto" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
