import fs from "node:fs";
import path from "node:path";

const OUT = "assets/fonts/files";
fs.mkdirSync(OUT, { recursive: true });

async function dl(url, dest) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      Referer: "https://pekenbanyumasan.pages.dev/",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

function slug(s) {
  return s.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
}

const faces = [];

// ---- 1. Google: Montserrat + Playfair Display (latin + latin-ext only) ----
const googleCss = fs.readFileSync("assets/fonts/google-woff2.css", "utf8");
const gBlocks = googleCss.split("@font-face").slice(1);
for (const block of gBlocks) {
  const family = /font-family:\s*'([^']+)'/.exec(block)?.[1];
  const style = /font-style:\s*([a-z]+)/.exec(block)?.[1];
  const weight = /font-weight:\s*([\d ]+)/.exec(block)?.[1];
  const src = /src:\s*url\(([^)]+)\)/.exec(block)?.[1];
  const range = /unicode-range:\s*([^;]+);/.exec(block)?.[1] ?? "";
  const subset = /\/\*\s*([a-z-]+)\s*\*\//.exec(block)?.[1] ?? "unknown";
  if (!["latin", "latin-ext"].includes(subset)) continue;
  faces.push({ family, style, weight, src, range: range.trim(), subset, source: "google" });
}

// ---- 2. Fontshare: Clash Display ----
const fontshareCss = fs.readFileSync("assets/css/api.fontshare.com/css-a041fd785b.bin", "utf8");
const fBlocks = fontshareCss.split("@font-face").slice(1);
for (const block of fBlocks) {
  const family = /font-family:\s*'([^']+)'/.exec(block)?.[1];
  const style = /font-style:\s*([a-z]+)/.exec(block)?.[1] ?? "normal";
  const weight = /font-weight:\s*(\d+)/.exec(block)?.[1];
  // prefer the woff2 entry
  const woff2 = /url\('([^']+\.woff2)'\)/.exec(block)?.[1];
  if (!woff2) continue;
  faces.push({
    family,
    style,
    weight,
    src: woff2.startsWith("//") ? "https:" + woff2 : woff2,
    range: "",
    subset: "latin",
    source: "fontshare",
  });
}

console.log(`faces to download: ${faces.length}`);

let css = "/* Self-hosted webfonts — Clash Display (Fontshare), Montserrat + Playfair Display (Google Fonts) */\n";
let ok = 0;
for (const f of faces) {
  const ext = path.extname(new URL(f.src).pathname) || ".woff2";
  const name = `${slug(f.family)}-${f.style}-${f.weight}${f.subset !== "latin" ? "-" + f.subset : ""}${ext}`;
  const dest = path.join(OUT, name);
  try {
    if (!fs.existsSync(dest)) await dl(f.src, dest);
    ok += 1;
    css += `@font-face {\n  font-family: '${f.family}';\n  font-style: ${f.style};\n  font-weight: ${f.weight};\n  font-display: swap;\n  src: url('./files/${name}') format('${ext === ".woff2" ? "woff2" : ext.slice(1)}');\n${f.range ? `  unicode-range: ${f.range};\n` : ""}}\n`;
  } catch (e) {
    console.log("FAIL", f.family, f.weight, e.message);
  }
}
fs.writeFileSync("assets/fonts/fonts-local.css", css);
console.log(`downloaded ${ok}/${faces.length} -> assets/fonts/fonts-local.css`);
