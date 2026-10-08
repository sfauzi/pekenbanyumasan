/**
 * Fetches the origin's webfonts and writes a self-hosted @font-face sheet.
 *
 * The origin loads Clash Display from Fontshare and Montserrat + Playfair
 * Display from Google Fonts. Both are requested here with a modern Chrome UA so
 * the CDNs return woff2 (the origin's own requests get the same treatment), and
 * the resulting files are written to public/assets/fonts/ with a local sheet.
 */
import fs from "node:fs";
import path from "node:path";

const OUT = "public/assets/fonts";
fs.mkdirSync(OUT, { recursive: true });

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

async function get(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return res;
}

async function download(url, dest) {
  const res = await get(url);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

const slug = (s) => s.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
const faces = [];

/* ── Montserrat (variable) + Playfair Display italic, from Google Fonts ──── */
const googleCss = await (
  await get(
    "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@1,400&display=swap",
  )
).text();

for (const block of googleCss.split("@font-face").slice(1)) {
  const family = /font-family:\s*'([^']+)'/.exec(block)?.[1];
  const style = /font-style:\s*([a-z]+)/.exec(block)?.[1] ?? "normal";
  const weight = /font-weight:\s*([\d ]+)/.exec(block)?.[1]?.trim();
  const src = /src:\s*url\(([^)]+)\)/.exec(block)?.[1];
  const range = /unicode-range:\s*([^;]+);/.exec(block)?.[1]?.trim() ?? "";
  const subset = /\/\*\s*([a-z-]+)\s*\*\//.exec(block)?.[1] ?? "latin";
  // latin + latin-ext cover the site's Indonesian copy; other subsets are unused.
  if (!["latin", "latin-ext"].includes(subset)) continue;
  faces.push({ family, style, weight, src, range, subset });
}

/* ── Clash Display, from Fontshare ──────────────────────────────────────── */
const fontshareCss = await (
  await get("https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap")
).text();

for (const block of fontshareCss.split("@font-face").slice(1)) {
  const family = /font-family:\s*'([^']+)'/.exec(block)?.[1];
  const weight = /font-weight:\s*(\d+)/.exec(block)?.[1];
  const woff2 = /url\('([^']+\.woff2)'\)/.exec(block)?.[1];
  if (!woff2) continue;
  faces.push({
    family,
    style: "normal",
    weight,
    src: woff2.startsWith("//") ? `https:${woff2}` : woff2,
    range: "",
    subset: "latin",
  });
}

let css = `/* ==========================================================================
   Peken Banyumasan — self-hosted webfonts
   Clash Display (Fontshare, free licence) · Montserrat + Playfair Display
   (Google Fonts, OFL). Captured from the origin site's own font requests and
   localised, so the clone renders identically with no network.
   Family names, weights and unicode-ranges match the origin's declarations.
   ========================================================================== */\n\n`;

let ok = 0;
for (const face of faces) {
  const ext = path.extname(new URL(face.src).pathname) || ".woff2";
  const name = `${slug(face.family)}-${face.style}-${face.weight.replace(/\s+/g, "_")}${
    face.subset === "latin-ext" ? "-latin-ext" : ""
  }${ext}`;
  try {
    if (!fs.existsSync(path.join(OUT, name))) await download(face.src, path.join(OUT, name));
    ok += 1;
    css += `@font-face {\n  font-family: '${face.family}';\n  font-style: ${face.style};\n  font-weight: ${face.weight};\n  font-display: swap;\n  src: url('./${name}') format('${
      ext === ".woff2" ? "woff2" : ext.slice(1)
    }');\n${face.range ? `  unicode-range: ${face.range};\n` : ""}}\n`;
  } catch (error) {
    console.log("FAIL", face.family, face.weight, error.message);
  }
}

fs.writeFileSync(path.join(OUT, "fonts.css"), css);
console.log(`fonts: ${ok}/${faces.length} files written to ${OUT}/`);
