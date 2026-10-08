/**
 * Post-build step for the Peken Banyumasan clone.
 *
 * Vite emits to `dist/`. This script:
 *
 *  1. Rewrites the emitted HTML so the bundle loads as a classic script.
 *     Vite always emits `type="module"`; an ES module cannot load over
 *     `file://`, while a classic script works from a file path and over http.
 *
 *  2. Mirrors `index.html` and `bundle/` to the project root so the OpenDesign
 *     preview can open the root `index.html` directly (and so the `file://`
 *     entry keeps working).
 *
 *  3. Makes `dist/` self-contained so it can be deployed as-is. The emitted
 *     HTML references `./assets/<file>` and `./favicon.png`, which live at the
 *     repo root, so they are hard-linked (falling back to a copy) into `dist/`.
 *     `dist/` is intentionally kept: Vercel's Vite preset serves it as the
 *     output directory (see `vercel.json`).
 *
 * Wired into `npm run build`.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");

if (!fs.existsSync(path.join(DIST, "index.html"))) {
  console.error("postbuild: dist/index.html not found — run `vite build` first.");
  process.exit(1);
}

/* ── 1. classic-script HTML + stable favicon ────────────────────────────── */
let html = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
html = html
  .replace(
    /<script\s+type="module"\s+crossorigin\s+src="([^"]+)"\s*><\/script>/g,
    '<script defer src="$1"></script>',
  )
  .replace(/<script\s+type="module"\s+src="([^"]+)"\s*><\/script>/g, '<script defer src="$1"></script>')
  .replace(/\s+crossorigin(?=[\s>])/g, "");

// The favicon is kept out of Vite's asset pipeline (it would be fingerprinted
// into bundle/app.png), so the link is injected here against the root copy.
if (!/<link\s+rel="icon"/.test(html)) {
  html = html.replace(
    /<\/title>/,
    '</title>\n    <link rel="icon" type="image/png" href="./favicon.png" />',
  );
}
fs.writeFileSync(path.join(DIST, "index.html"), html);

/* ── 2. mirror the entry + bundle to the project root ───────────────────── */
function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else fs.copyFileSync(src, dest);
  }
}

fs.copyFileSync(path.join(DIST, "index.html"), path.join(ROOT, "index.html"));

// The compiled JS/CSS (and the bundled woff2 files) go to bundle/.
const bundleFrom = path.join(DIST, "bundle");
if (fs.existsSync(bundleFrom)) {
  const bundleTo = path.join(ROOT, "bundle");
  fs.rmSync(bundleTo, { recursive: true, force: true });
  copyDir(bundleFrom, bundleTo);
}

/* ── 3. make dist/ self-contained (kept as the deployable output) ────────── */
// The ~100 MB of photographs are served straight from the repo-root `assets/`,
// so hard-link them (falling back to a copy) instead of duplicating the bytes.
function linkOrCopy(from, to) {
  try {
    fs.linkSync(from, to);
  } catch {
    fs.copyFileSync(from, to);
  }
}

function linkTree(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) linkTree(src, dest);
    else linkOrCopy(src, dest);
  }
}

const assetsFrom = path.join(ROOT, "assets");
if (fs.existsSync(assetsFrom)) linkTree(assetsFrom, path.join(DIST, "assets"));

const faviconFrom = path.join(ROOT, "favicon.png");
if (fs.existsSync(faviconFrom)) linkOrCopy(faviconFrom, path.join(DIST, "favicon.png"));

console.log("postbuild: dist/ ready; index.html + bundle/ mirrored to the project root");
