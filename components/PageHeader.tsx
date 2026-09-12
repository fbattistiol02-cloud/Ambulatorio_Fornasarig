import Link from "next/link";

/**
 * Testata delle pagine interne.
 *
 * È una fetta dello stesso gradiente verde petrolio della hero: cambia il punto
 * da cui parte la luce, non il colore. Serve a far leggere le cinque pagine
 * come un oggetto unico invece che come cinque documenti separati.
 */
type Props = {
  occhiello: string;
  titolo: React.ReactNode;
  intro?: React.ReactNode;
  /** Sposta l'origine della luce: una posizione diversa per ogni pagina. */
  luce: { x: string; y: string };
};

export function PageHeader({ occhiello, titolo, intro, luce }: Props) {
  return (
    <section
      className="page-head grain"
      style={
        { "--head-x": luce.x, "--head-y": luce.y } as React.CSSProperties
      }
    >
      <div className="wrap">
        <nav aria-label="Percorso" className="crumbs">
          <Link href="/" className="transition-colors">
            Ambulatorio
          </Link>
          <span aria-hidden>/</span>
          <span className="text-bone/80">{occhiello}</span>
        </nav>

        <h1 className="mt-7">{titolo}</h1>
        {intro ? <p className="page-intro">{intro}</p> : null}
      </div>
    </section>
  );
}
