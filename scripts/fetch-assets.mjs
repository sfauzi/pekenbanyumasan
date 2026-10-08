import fs from "node:fs";
import path from "node:path";

const OUT = "assets";
fs.mkdirSync(OUT, { recursive: true });

const FILES = [
  "banner-home-1.jpg",
  "banner-home-2.jpg",
  "banner-about.png",
  "program-fashion.jpg",
  "program-byob.jpg",
  "program-local-market.jpg",
  "program-pitutur.jpg",
  "program-coffee.jpg",
  "program-makers.jpg",
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
  "gallery-perform-1.jpg",
  "gallery-perform-2.jpg",
  "logotype-peken-nav.png",
  "logo-peken-banyumasan.png",
  "map-kota-lama.png",
  "tokoh-portrait-1.png",
  "tokoh-portrait-2.png",
  "tokoh-portrait-3.png",
];

const BASE = "https://pekenbanyumasan.pages.dev/assets/";
const CONCURRENCY = 4;

async function fetchOne(name) {
  const dest = path.join(OUT, name);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1024) {
    return { name, status: "cached", bytes: fs.statSync(dest).size };
  }
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const res = await fetch(BASE + name, { redirect: "follow" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1024) throw new Error(`suspiciously small (${buf.length} B)`);
      fs.writeFileSync(dest, buf);
      return { name, status: "ok", bytes: buf.length };
    } catch (error) {
      if (attempt === 3) return { name, status: "FAIL", error: error.message };
    }
  }
  return { name, status: "FAIL" };
}

const results = [];
let cursor = 0;
async function worker() {
  while (cursor < FILES.length) {
    const index = cursor++;
    results.push(await fetchOne(FILES[index]));
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

for (const r of results.sort((a, b) => a.name.localeCompare(b.name))) {
  console.log(`${r.status.padEnd(6)} ${r.name} ${r.bytes ?? r.error ?? ""}`);
}
const failed = results.filter((r) => r.status === "FAIL");
console.log(`\n${results.length - failed.length}/${results.length} assets present in ${OUT}/`);
if (failed.length) process.exit(1);
