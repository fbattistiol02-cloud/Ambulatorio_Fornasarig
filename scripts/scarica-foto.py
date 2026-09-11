#!/usr/bin/env python3
"""
Rigenera le fotografie di `public/foto/` a partire dagli originali Unsplash.

Le immagini sono già versionate nel repository: questo script serve solo a
riprodurle in modo identico, per esempio se si vuole cambiare la qualità di
compressione o rifare un ritaglio.

Perché il ritaglio è fatto qui e non con i parametri d'URL di Unsplash: i
parametri imgix (`ar`, `crop`, `fp-*`, `rect`) applicano zoom impliciti che non
corrispondono al riquadro richiesto. Ritagliando in locale su coordinate in
pixel dell'originale il risultato è prevedibile e verificabile.

Uso:
    python3 scripts/scarica-foto.py

Richiede Pillow:
    python3 -m pip install Pillow
"""

from __future__ import annotations

import io
import sys
import urllib.request
from pathlib import Path

try:
    from PIL import Image
except ImportError:  # pragma: no cover - dipendenza non installata
    sys.exit("Manca Pillow. Installalo con: python3 -m pip install Pillow")

DESTINAZIONE = Path(__file__).resolve().parent.parent / "public" / "foto"

# Ogni voce: come scaricare l'originale e quale riquadro estrarne.
# `riquadro` è (sinistra, alto, destra, basso) in pixel dell'originale.
FOTO = [
    {
        "nome": "visita-gatto.jpg",
        # Sueda Güzeldere — https://unsplash.com/photos/BATIVPqWwqw
        "url": "https://images.unsplash.com/photo-1733783506192-653df6185a7d?fm=jpg&q=92&w=3538",
        "originale": (3538, 5307),
        # Quadrato a piena larghezza centrato su mani e gatto: sul desktop
        # `object-cover` ne mostra la fascia orizzontale centrale, sul mobile
        # quella verticale. Un solo file per entrambi i formati.
        "riquadro": (0, 834, 3538, 4372),
        "uscita": (2200, 2200),
        "qualita": 82,
    },
    {
        "nome": "gatto-in-braccio.jpg",
        # Werzk Luuuuuuu — https://unsplash.com/photos/tDlo2ZPlQlU
        "url": "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?fm=jpg&q=88&w=2400",
        "originale": (2400, 1600),
        # Verticale 4:5 centrato sul gatto, per la colonna della sezione felina.
        "riquadro": (710, 0, 1990, 1600),
        "uscita": (1280, 1600),
        "qualita": 84,
    },
]


def main() -> None:
    DESTINAZIONE.mkdir(parents=True, exist_ok=True)

    for foto in FOTO:
        print(f"scarico  {foto['nome']} …")
        with urllib.request.urlopen(foto["url"], timeout=120) as risposta:
            originale = Image.open(io.BytesIO(risposta.read())).convert("RGB")

        if originale.size != foto["originale"]:
            sys.exit(
                f"{foto['nome']}: attese dimensioni {foto['originale']}, "
                f"ricevute {originale.size}. Il riquadro non sarebbe più valido."
            )

        finale = originale.crop(foto["riquadro"]).resize(
            foto["uscita"], Image.LANCZOS
        )
        percorso = DESTINAZIONE / foto["nome"]
        finale.save(
            percorso,
            quality=foto["qualita"],
            optimize=True,
            progressive=True,
        )
        print(f"  salvata {percorso.relative_to(DESTINAZIONE.parent.parent)} "
              f"({percorso.stat().st_size // 1024} KB, {finale.size[0]}×{finale.size[1]})")


if __name__ == "__main__":
    main()
