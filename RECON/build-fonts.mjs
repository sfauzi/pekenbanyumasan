import fs from "node:fs";
import path from "node:path";

const OUT = "peken-banyumasan/public/assets/fonts";
fs.mkdirSync(OUT, { recursive: true });

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

async function get(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return res;
}

async function dl(url, dest) {
  const res = await get(url);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

const faces = [];

// --- Google: Montserrat (variable) + Playfair Display italic 400 ---
const gCss = await (
  await get(
    "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@1,400&display=swap",
  )
).text();

for (const block of gCss.split("@font-face").slice(1)) {
  const family = /font-family:\s*'([^']+)'/.exec(block)?.[1];
  const style = /font-style:\s*([a-z]+)/.exec(block)?.[1] ?? "normal";
  const weight = /font-weight:\s*([\d ]+)/.exec(block)?.[1]?.trim();
  const src = /src:\s*url\(([^)]+)\)/.exec(block)?.[1];
  const range = /unicode-range:\s*([^;]+);/.exec(block)?.[1]?.trim() ?? "";
  const subset = /\/\*\s*([a-z-]+)\s*\*\//.exec(block)?.[1] ?? "latin";
  if (!["latin", "latin-ext"].includes(subset)) continue;
  faces.push({ family, style, weight, src, range, subset });
}

// --- Fontshare: Clash Display 400/500/600/700 ---
const fCss = await (
  await get("https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap")
).text();

for (const block of fCss.split("@font-face").slice(1)) {
  const family = /font-family:\s*'([^']+)'/.exec(block)?.[1];
  const weight = /font-weight:\s*(\d+)/.exec(block)?.[1];
  const woff2 = /url\('([^']+\.woff2)'\)/.exec(block)?.[1];
  if (!woff2) continue;
  faces.push({
    family,
    style: "normal",
    weight,
    src: woff2.startsWith("//") ? "https:" + woff2 : woff2,
    range: "",
    subset: "latin",
  });
}

console.log(`faces: ${faces.length}`);

const slug = (s) => s.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
let css = `/* Self-hosted webfonts — Clash Display (Fontshare, FFL), Montserrat + Playfair Display (Google Fonts, OFL).\n   Files localised from the origin site's CDN requests so the clone renders identically offline. */\n`;
let ok = 0;

for (const f of faces) {
  const ext = path.extname(new URL(f.src).pathname) || ".woff2";
  const name = `${slug(f.family)}-${f.style}-${f.weight.replace(/\s+/g, "_")}${f.subset === "latin-ext" ? "-latin-ext" : ""}${ext}`;
  const dest = path.join(OUT, name);
  try {
    if (!fs.existsSync(dest)) await dl(f.src, dest);
    ok += 1;
    css += `@font-face {\n  font-family: '${f.family}';\n  font-style: ${f.style};\n  font-weight: ${f.weight};\n  font-display: swap;\n  src: url('./${name}') format('${ext === ".woff2" ? "woff2" : ext.slice(1)}');\n${f.range ? `  unicode-range: ${f.range};\n` : ""}}\n`;
  } catch (e) {
    console.log("FAIL", f.family, f.weight, e.message);
  }
}

fs.writeFileSync("peken-banyumasan/public/assets/fonts.css", css);
console.log(`downloaded ${ok}/${faces.length} -> public/assets/fonts.css`);
