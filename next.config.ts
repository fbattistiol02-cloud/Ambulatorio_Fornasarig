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
  // Nessun badge di sviluppo sovrapposto alla pagina.
  devIndicators: false,
};

export default nextConfig;
