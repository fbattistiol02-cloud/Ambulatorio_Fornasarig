import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

// Usa sharp già presente con Next.js. Nessuna dipendenza aggiuntiva.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const svg = await readFile(path.join(root, "app/icon.svg"));
const sizes = [16, 32, 48];
const frames = await Promise.all(sizes.map(size => sharp(svg).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + 16 * frames.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);
let offset = header.length;
frames.forEach((frame, i) => {
  const entry = 6 + i * 16;
  header[entry] = sizes[i];
  header[entry + 1] = sizes[i];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(frame.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});
await writeFile(path.join(root, "app/favicon.ico"), Buffer.concat([header, ...frames]));
const square = Buffer.from(svg.toString().replace('rx="10"', 'rx="0"'));
await sharp(square).resize(180, 180).png().toFile(path.join(root, "app/apple-icon.png"));
await mkdir(path.join(root, "public/brand"), { recursive: true });
await sharp(square).resize(512, 512).png().toFile(path.join(root, "public/brand/fornasarig-512.png"));
console.log("Icone generate: ICO 16/32/48, Apple Touch 180, marchio PNG 512.");
