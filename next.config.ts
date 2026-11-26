import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * La directory superiore ospita altri progetti, ciascuno con il proprio
   * lockfile: fissare la root evita che Turbopack la deduca risalendo troppo.
   */
  turbopack: {
    root: path.join(import.meta.dirname),
  },
  /*
   * L'anteprima del video passa dall'ottimizzatore di Next: la scarica il
   * server del sito, così il browser del visitatore non contatta Google prima
   * di premere play. Ammesse solo le anteprime YouTube.
   */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/*/hqdefault.jpg",
        search: "",
      },
    ],
  },
  // Nessun badge di sviluppo sovrapposto alla pagina.
  devIndicators: false,
};

export default nextConfig;
