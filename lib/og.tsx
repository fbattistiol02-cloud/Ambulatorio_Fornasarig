import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { monogramPath } from "./brand";
import { site } from "./site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Font locali con licenza OFL: le immagini sono prerenderizzate in build,
// senza richieste a servizi esterni o backend per la condivisione.
export async function ogImage(titolo?: string, sottotitolo?: string) {
  const [serif, sans] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Newsreader-Regular.ttf")),
    readFile(join(process.cwd(), "assets/fonts/InterTight-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "62px 76px", background: "#062726", color: "#fcfafa", fontFamily: "Inter Tight", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: titolo ? 32 : 44 }}>
          <svg width={titolo ? 110 : 168} height={titolo ? 110 : 168} viewBox="0 0 64 64">
            <rect x="11" y="11" width="4" height="42" fill="#f59e0b" />
            <path d={monogramPath} fill="#fcfafa" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 20, letterSpacing: 3 }}>AMBULATORIO VETERINARIO</div>
            <div style={{ fontFamily: "Newsreader", fontSize: titolo ? 30 : 38, marginTop: 18 }}>Dott.ssa Elena</div>
            <div style={{ fontFamily: "Newsreader", fontSize: titolo ? 58 : 132, lineHeight: 1.03, marginTop: 4 }}>Fornasarig</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 22, marginLeft: titolo ? 0 : 212 }}>
          <div style={{ fontFamily: titolo ? "Newsreader" : "Inter Tight", fontSize: titolo ? 52 : 34, lineHeight: 1.13 }}>{titolo ?? "Cura veterinaria per cani e gatti"}</div>
          {sottotitolo ? <div style={{ fontSize: 23, lineHeight: 1.4, color: "#d4ded9", marginTop: 14 }}>{sottotitolo}</div> : null}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, borderTop: "1px solid #78908a", paddingTop: 24, marginTop: 24, fontSize: 24 }}>
          <span>{site.address.locality}</span>
          <span style={{ color: "#f59e0b" }}>·</span>
          <span>{site.address.municipality}</span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Newsreader", data: serif, weight: 400, style: "normal" },
        { name: "Inter Tight", data: sans, weight: 400, style: "normal" },
      ],
    },
  );
}
