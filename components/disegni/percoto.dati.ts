/**
 * MODULO GENERATO — non modificare a mano.
 * Rigenerare con: python3 scripts/genera-mappa.py
 *
 * Dati stradali © OpenStreetMap contributors, licenza ODbL.
 * L'attribuzione è resa visibile da `MappaPercoto.tsx` ed è obbligatoria.
 *
 * Le coordinate sono metri sul terreno: il `viewBox` misura
 * 700 × 450 metri attorno al tratto fra l'ambulatorio e
 * Piazza della Vittoria.
 */

export const vista = { larghezza: 700, altezza: 450 } as const;

export type PesoStrada = "principale" | "secondaria" | "minore";
export type RuoloEtichetta = "indirizzo" | "centro" | "contesto";

export const strade: {
  peso: PesoStrada;
  indirizzo: boolean;
  d: string;
}[] = [
  {
    "peso": "minore",
    "indirizzo": false,
    "d": "M710.5 10.4L789.1 -14.3"
  },
  {
    "peso": "minore",
    "indirizzo": false,
    "d": "M582.5 405.3L568.3 391.7L561.4 380.2L551.9 372.3L522.2 382.9"
  },
  {
    "peso": "minore",
    "indirizzo": false,
    "d": "M41.0 430.3L14.0 442.3"
  },
  {
    "peso": "minore",
    "indirizzo": false,
    "d": "M309.5 235.3L354.9 229.4L360.8 234.2"
  },
  {
    "peso": "minore",
    "indirizzo": false,
    "d": "M290.5 189.6L288.7 144.9L266.3 129.9"
  },
  {
    "peso": "minore",
    "indirizzo": false,
    "d": "M558.8 179.0L563.3 189.2L579.7 182.2L575.1 171.8"
  },
  {
    "peso": "secondaria",
    "indirizzo": false,
    "d": "M896.2 492.6L726.2 106.7"
  },
  {
    "peso": "secondaria",
    "indirizzo": false,
    "d": "M-128.4 0.5L-94.3 8.8L-72.2 18.5L-66.0 22.5L-58.8 28.0L-42.3 45.7L7.1 86.2L14.4 96.1L30.7 121.9L73.1 191.0L104.0 234.0"
  },
  {
    "peso": "secondaria",
    "indirizzo": false,
    "d": "M669.1 -134.9L696.2 -44.5L695.8 -36.6L691.6 -32.8L610.8 -2.5"
  },
  {
    "peso": "secondaria",
    "indirizzo": false,
    "d": "M827.6 -182.0L747.5 -158.9L669.1 -134.9L307.4 -18.9"
  },
  {
    "peso": "secondaria",
    "indirizzo": false,
    "d": "M53.1 504.0L30.9 479.8L14.0 442.3L-36.8 322.2"
  },
  {
    "peso": "secondaria",
    "indirizzo": false,
    "d": "M392.3 597.8L378.2 528.8L379.3 513.9L386.3 503.8L395.7 494.8L513.3 417.3L519.1 410.3L522.1 402.2L522.2 382.9L517.3 293.4L514.8 280.6L489.5 229.8"
  },
  {
    "peso": "secondaria",
    "indirizzo": false,
    "d": "M320.1 318.0L309.2 317.7L254.9 331.9L240.7 340.2L96.8 404.4L149.7 525.4"
  },
  {
    "peso": "secondaria",
    "indirizzo": false,
    "d": "M110.5 301.4L61.8 322.9L96.8 404.4"
  },
  {
    "peso": "secondaria",
    "indirizzo": false,
    "d": "M399.7 189.1L390.6 203.3L360.8 234.2L355.6 237.5L315.0 253.4L311.7 257.2L308.8 288.2L313.2 297.2L316.5 311.8L320.1 318.0"
  },
  {
    "peso": "secondaria",
    "indirizzo": false,
    "d": "M195.7 208.4L211.7 279.6L218.4 290.2L223.4 298.9"
  },
  {
    "peso": "secondaria",
    "indirizzo": false,
    "d": "M375.6 154.7L372.4 154.9L369.5 156.1L367.1 158.2L365.5 161.0L364.8 164.1L365.0 166.7L366.0 169.2L367.5 171.3L369.5 172.9L372.2 174.1L375.1 174.4L377.9 173.8L380.4 172.5L382.4 170.6L383.8 168.1L384.5 165.2L384.2 162.2L383.1 159.4L381.2 157.2L378.7 155.5L375.6 154.7"
  },
  {
    "peso": "secondaria",
    "indirizzo": false,
    "d": "M335.7 306.6L421.2 256.8L432.4 248.6L440.5 241.7L447.2 234.7L454.8 225.7L459.7 218.4L463.6 210.1L465.4 206.0"
  },
  {
    "peso": "secondaria",
    "indirizzo": false,
    "d": "M84.8 591.7L91.3 575.6L107.0 553.2L121.7 541.6L149.7 525.4L206.7 495.6L224.1 484.2L281.4 436.5L292.9 424.5L315.2 367.0L317.0 325.7L320.1 318.0L326.7 311.9L335.7 306.6"
  },
  {
    "peso": "principale",
    "indirizzo": false,
    "d": "M465.4 206.0L437.6 201.2L411.1 194.9L399.7 189.1L388.9 180.0"
  },
  {
    "peso": "principale",
    "indirizzo": false,
    "d": "M525.8 193.6L493.0 204.8L488.2 205.3L476.9 206.0L465.4 206.0"
  },
  {
    "peso": "principale",
    "indirizzo": false,
    "d": "M858.9 48.3L818.9 69.5L794.6 79.3L726.2 106.7L663.2 132.8L575.1 171.8L558.8 179.0L525.8 193.6"
  },
  {
    "peso": "principale",
    "indirizzo": false,
    "d": "M370.3 141.4L363.5 122.5L328.7 26.2L307.4 -18.9L275.3 -86.9L238.4 -153.2L216.8 -189.8L171.0 -252.7L124.5 -355.6L58.1 -480.3"
  },
  {
    "peso": "principale",
    "indirizzo": true,
    "d": "M-11.2 309.9L104.0 234.0L123.1 224.8L157.9 215.9L195.7 208.4L290.5 189.6L354.9 174.7"
  },
  {
    "peso": "principale",
    "indirizzo": true,
    "d": "M-487.4 416.7L-454.0 409.1L-431.8 405.9L-365.5 398.8L-332.9 395.9L-251.6 389.1L-214.5 387.1L-195.3 384.3L-179.9 380.9L-160.9 374.8L-143.9 367.9L-36.8 322.2L-17.2 313.2"
  }
];

export const etichette: {
  testo: string;
  x: number;
  y: number;
  angolo: number;
  ruolo: RuoloEtichetta;
}[] = [
  {
    "testo": "Via Guglielmo Marconi",
    "x": 176.8,
    "y": 212.1,
    "angolo": -11.2,
    "ruolo": "indirizzo"
  },
  {
    "testo": "Piazza della Vittoria",
    "x": 482.6,
    "y": 205.6,
    "angolo": -3.4,
    "ruolo": "centro"
  },
  {
    "testo": "Via San Martino",
    "x": 247.8,
    "y": 336.1,
    "angolo": -30.5,
    "ruolo": "contesto"
  },
  {
    "testo": "Via Francesco Tomadini",
    "x": 519.8,
    "y": 338.2,
    "angolo": 86.9,
    "ruolo": "contesto"
  },
  {
    "testo": "Via Villa",
    "x": 313.3,
    "y": 255.3,
    "angolo": -48.8,
    "ruolo": "contesto"
  },
  {
    "testo": "Via Peraria",
    "x": 51.9,
    "y": 156.5,
    "angolo": 58.5,
    "ruolo": "contesto"
  },
  {
    "testo": "Via Aquileia",
    "x": 619.2,
    "y": 152.3,
    "angolo": -23.8,
    "ruolo": "contesto"
  },
  {
    "testo": "Via San Mauro",
    "x": 346.1,
    "y": 74.4,
    "angolo": 70.1,
    "ruolo": "contesto"
  }
];

export const ambulatorio = { x: 216.7, y: 230.9 } as const;
export const centroPaese = { x: 483.3, y: 219.1 } as const;

/** Distanza fra i due punti, in metri, calcolata sulle coordinate reali. */
export const distanzaCentro = 267;
