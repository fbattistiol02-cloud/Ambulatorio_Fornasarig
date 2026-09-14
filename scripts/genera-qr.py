#!/usr/bin/env python3
"""
Genera il codice QR verso la chat WhatsApp dell'ambulatorio.

Il file prodotto è statico e versionato: la pagina contatti non chiama nessun
servizio esterno per disegnarlo, né in fase di build né nel browser.

L'indirizzo codificato è volutamente la forma breve `wa.me/<numero>`, senza
messaggio precompilato: il QR finisce stampato sulla porta dell'ambulatorio e
su un foglio non esiste un contesto da cui far dipendere il testo.

Uso:
    python3 scripts/genera-qr.py

Richiede segno:
    python3 -m pip install segno
"""

from __future__ import annotations

import sys
from pathlib import Path

try:
    import segno
except ImportError:  # pragma: no cover - dipendenza non installata
    sys.exit("Manca segno. Installalo con: python3 -m pip install segno")

# Stesso numero di `lib/site.ts`. Se cambia lì, va cambiato anche qui.
URL = "https://wa.me/393388273705"
DESTINAZIONE = Path(__file__).resolve().parent.parent / "public" / "qr-whatsapp.svg"

# Correzione d'errore alta: un QR stampato e affisso si sporca e si consuma.
codice = segno.make(URL, error="h")
codice.save(
    DESTINAZIONE,
    kind="svg",
    scale=1,
    border=2,
    dark="#173b57",
    light=None,
    svgclass=None,
    lineclass=None,
    omitsize=True,
)

print(f"salvato {DESTINAZIONE.name} — {URL}")
print(f"versione {codice.version}, correzione {codice.error.upper()}")
