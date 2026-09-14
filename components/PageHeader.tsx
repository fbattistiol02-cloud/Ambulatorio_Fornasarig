import Link from "next/link";

/**
 * Testata delle pagine interne.
 *
 * È una fetta dello stesso gradiente azzurro chiaro della hero: cambia il punto
 * da cui parte la luce, non il colore. Serve a far leggere le cinque pagine
 * come un oggetto unico invece che come cinque documenti separati.
 *
 * La colonna di destra ospita l'indice della pagina. Non è riempitivo: dice in
 * apertura quanto è densa la pagina, dà un secondo appiglio di navigazione a
 * chi non si muove con disinvoltura, e riempie uno spazio che altrimenti legge
 * come un buco invece che come respiro.
 */
type VoceIndice = { href: string; label: string };

type Props = {
  occhiello: string;
  titolo: React.ReactNode;
  intro?: React.ReactNode;
  /** Sposta l'origine della luce: una posizione diversa per ogni pagina. */
  luce: { x: string; y: string };
  /** Sezioni della pagina. Gli ancoraggi esistono già nei contenuti. */
  indice?: VoceIndice[];
};

export function PageHeader({ occhiello, titolo, intro, luce, indice }: Props) {
  return (
    <section
      className="page-head grain"
      style={
        { "--head-x": luce.x, "--head-y": luce.y } as React.CSSProperties
      }
    >
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <nav aria-label="Percorso" className="crumbs">
            {/* `-my-2 py-2`: area toccabile da 36 px senza spostare la riga. */}
            <Link href="/" className="-my-2 py-2 transition-colors">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink">{occhiello}</span>
          </nav>

          <h1 className="mt-7">{titolo}</h1>
          {intro ? <p className="page-intro">{intro}</p> : null}
        </div>

        {indice ? (
          <nav
            aria-label="Indice della pagina"
            className="lg:col-span-4 lg:col-start-9 lg:self-end"
          >
            <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted">
              In questa pagina
            </p>
            <ol className="ed-list mt-3">
              {indice.map((voce, posizione) => (
                <li key={voce.href}>
                  <a
                    href={voce.href}
                    className="group flex min-h-12 items-baseline gap-4 py-3 text-[0.9375rem] text-ink transition-colors hover:text-action"
                  >
                    <span
                      aria-hidden
                      className="font-serif text-muted transition-colors group-hover:text-action"
                    >
                      {String(posizione + 1).padStart(2, "0")}
                    </span>
                    {voce.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
      </div>
    </section>
  );
}
