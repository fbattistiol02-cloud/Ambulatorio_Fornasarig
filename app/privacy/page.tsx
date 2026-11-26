import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

/**
 * Informativa art. 13 GDPR.
 *
 * Descrive ciò che il sito fa davvero. Se si aggiunge un modulo, un servizio
 * esterno o un nuovo strumento di statistica, va aggiornata insieme al codice,
 * data compresa.
 */
export const metadata: Metadata = {
  title: "Informativa privacy",
  description: `Come vengono trattati i dati personali sul sito e nei contatti con la ${site.doctor}.`,
  alternates: { canonical: "/privacy" },
};

const link = "font-medium text-action underline underline-offset-4";

const sezioni: { titolo: string; corpo: React.ReactNode }[] = [
  {
    titolo: "Titolare del trattamento",
    corpo: (
      <p>
        {site.doctor}, {site.role}, {site.address.full}. P. IVA {site.vatNumber}.
        Per ogni richiesta sui tuoi dati puoi scrivere a{" "}
        <a href={site.email.href} className={link}>{site.email.label}</a> o
        telefonare al {site.phone.label}.
      </p>
    ),
  },
  {
    titolo: "Quando ci contatti",
    corpo: (
      <>
        <p>
          Il sito non ha moduli di raccolta dati né aree riservate. Se ci scrivi
          o ci telefoni, trattiamo il tuo nome, i recapiti, il contenuto del
          messaggio e le informazioni sul tuo animale che scegli di comunicarci,
          per rispondere, organizzare la visita e gestire il rapporto
          professionale (art. 6, par. 1, lett. b del Regolamento UE 2016/679,
          «GDPR») e per adempiere agli obblighi di legge (lett. c).
        </p>
        <p>
          Fornire i dati è facoltativo, ma senza non possiamo risponderti. Ti
          chiediamo di non inviare dati sulla salute di persone o altre
          informazioni non necessarie.
        </p>
        <p>
          I pulsanti WhatsApp aprono un servizio di Meta; la posta elettronica
          passa dal servizio di Microsoft (Hotmail/Outlook); «Come
          raggiungerci» apre Google Maps. Questi fornitori trattano i dati anche
          secondo le proprie informative, e possono trasferirli fuori
          dall&rsquo;Unione europea.
        </p>
      </>
    ),
  },
  {
    titolo: "Quando navighi sul sito",
    corpo: (
      <>
        <p>
          Il sito è ospitato da Vercel Inc. (Stati Uniti), che per erogarlo e
          proteggerlo tratta dati tecnici, tra cui indirizzo IP e registri di
          connessione.
        </p>
        <p>
          Usiamo Vercel Web Analytics e Speed Insights per statistiche aggregate
          su visite e prestazioni: pagina visitata, provenienza, paese o area
          geografica, tipo di dispositivo, sistema operativo e browser, misure
          di velocità. Secondo la documentazione di Vercel, Web Analytics non usa
          cookie di terze parti, riconosce la visita con un codice ricavato dalla
          richiesta e scarta la sessione dopo 24 ore.
        </p>
        <p>
          La base giuridica è il legittimo interesse a far funzionare, proteggere
          e migliorare il sito (art. 6, par. 1, lett. f GDPR). Il sito non usa
          strumenti propri di profilazione o pubblicità.
        </p>
      </>
    ),
  },
  {
    titolo: "Video di YouTube",
    corpo: (
      <p>
        L&rsquo;anteprima del video è servita dal nostro sito. Solo se premi play
        si carica il lettore di YouTube (dominio youtube-nocookie.com): da quel
        momento Google riceve i dati di connessione, come l&rsquo;indirizzo IP, e
        può usare cookie o tecnologie simili. Il video parte su tua richiesta; se
        non vuoi questo trattamento, non avviarlo. Maggiori informazioni nella{" "}
        <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noopener noreferrer" className={link}>
          privacy di Google
        </a>.
      </p>
    ),
  },
  {
    titolo: "Destinatari e trasferimenti",
    corpo: (
      <p>
        I dati non vengono venduti né diffusi. Possono trattarli i fornitori dei
        servizi indicati sopra, i consulenti e le autorità quando è necessario
        per legge. Alcuni fornitori trattano dati negli Stati Uniti o in altri
        paesi extra UE, con le garanzie previste dal GDPR. Vercel dichiara di
        aderire all&rsquo;EU-U.S. Data Privacy Framework e di usare, dove
        richiesto, le clausole contrattuali standard (
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={link}>
          informativa di Vercel
        </a>).
      </p>
    ),
  },
  {
    titolo: "Per quanto tempo",
    corpo: (
      <p>
        Conserviamo messaggi e recapiti per il tempo necessario a rispondere e a
        gestire il rapporto professionale; i documenti soggetti a obblighi
        fiscali o professionali restano per i termini di legge. I dati tecnici
        sono conservati dai fornitori secondo i tempi indicati nelle loro
        informative.
      </p>
    ),
  },
  {
    titolo: "I tuoi diritti",
    corpo: (
      <p>
        Puoi chiedere accesso, rettifica, cancellazione, limitazione e
        portabilità dei tuoi dati e opporti ai trattamenti basati sul legittimo
        interesse (artt. 15-22 GDPR), nei casi e limiti previsti. Puoi inoltre
        presentare reclamo al{" "}
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className={link}>
          Garante per la protezione dei dati personali
        </a>. Non prendiamo decisioni automatizzate sui tuoi dati.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <>
      <PageHeader
        occhiello="Privacy"
        luce={{ x: "30%", y: "20%" }}
        titolo="Informativa privacy."
        intro="Quali dati personali vengono trattati, perché e quali diritti hai."
      />
      <section className="bg-surface py-16 lg:py-24">
        <div className="wrap">
          <div className="max-w-[44rem] space-y-12">
            {sezioni.map((sezione) => (
              <div key={sezione.titolo}>
                <h2 className="text-2xl leading-snug text-heading">{sezione.titolo}</h2>
                <div className="mt-4 space-y-4 text-[1.0625rem] leading-[1.7] text-ink/85">
                  {sezione.corpo}
                </div>
              </div>
            ))}
            <p className="border-t border-line-soft pt-6 text-sm text-muted">
              Ultimo aggiornamento: 26 novembre 2026.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
