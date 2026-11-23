"use client";

import { Play } from "lucide-react";
import { useState } from "react";

type VideoYouTubeProps = {
  /** ID del video: gli 11 caratteri dopo `v=` nell'indirizzo YouTube. */
  id: string;
  /** Descrive il video a chi usa uno screen reader. */
  titolo: string;
};

/**
 * Video YouTube «a richiesta».
 *
 * Al caricamento della pagina compare solo l'anteprima: l'iframe di YouTube
 * (pesante e con cookie propri) viene creato soltanto quando il visitatore
 * preme play. Il sito resta veloce e non attiva servizi di terze parti prima
 * che serva. Si usa il dominio youtube-nocookie.com.
 */
export function VideoYouTube({ id, titolo }: VideoYouTubeProps) {
  const [attivo, setAttivo] = useState(false);

  return (
    <div className="photo relative aspect-video overflow-hidden bg-black">
      {attivo ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titolo}
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setAttivo(true)}
          aria-label={`Riproduci il video: ${titolo}`}
          className="group absolute inset-0 size-full cursor-pointer"
        >
          {/* Anteprima ufficiale di YouTube: non serve scaricarla nel progetto. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
          <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-heading shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Play className="ml-1 size-7" strokeWidth={1.75} fill="currentColor" aria-hidden />
          </span>
        </button>
      )}
    </div>
  );
}
