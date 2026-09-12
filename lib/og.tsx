import { ImageResponse } from "next/og";

import { site } from "./site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Immagine di anteprima tipografica.
 *
 * Non usa fotografie: le due disponibili sono impegnate nelle pagine e una
 * fotografia di archivio in anteprima verrebbe letta come una foto
 * dell'ambulatorio. Il gradiente verde petrolio è lo stesso del sito, così
 * l'anteprima condivisa è riconoscibile quanto la pagina.
 *
 * Nessun carattere esterno viene scaricato in fase di build: una build che
 * dipende da una richiesta di rete è una build che può fallire per motivi che
 * non c'entrano con il codice.
 */
export function ogImage(titolo: string, sottotitolo?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(120% 140% at 78% 8%, #17514e 0%, #0f3b39 38%, #062726 74%)",
          color: "#fcfafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 3, height: 44, background: "#f59e0b" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 17,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: "rgba(252,250,250,0.7)",
                }}
              >
                Ambulatorio Veterinario
              </div>
              <div style={{ fontSize: 27, marginTop: 4 }}>{site.doctor}</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, lineHeight: 1.1, letterSpacing: -1.6 }}>
            {titolo}
          </div>
          {sottotitolo ? (
            <div
              style={{
                fontSize: 28,
                marginTop: 22,
                color: "rgba(252,250,250,0.72)",
                maxWidth: 880,
              }}
            >
              {sottotitolo}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(252,250,250,0.6)",
            borderTop: "1px solid rgba(252,250,250,0.2)",
            paddingTop: 24,
          }}
        >
          <div>{site.address.short}</div>
          <div style={{ color: "#f59e0b" }}>{site.availability}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
