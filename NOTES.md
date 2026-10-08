# Peken Banyumasan — Clone Notes

Faithful React clone of **https://pekenbanyumasan.pages.dev/** (Peken Banyumasan —
a Banyumas culture and creative-economy hub).

## Source & licensing

| | |
|---|---|
| Origin | `https://pekenbanyumasan.pages.dev/` |
| Host | Cloudflare Pages |
| Stack | React SPA (Vite build), no SSR |
| Build assets | `/assets/index-Cev4RdvL.js`, `/assets/index-C66vTWKh.css` |
| Source maps | shipped publicly — the origin's real component source was recovered from `RECON/app.map` |
| Licence | No `LICENSE` file and no licence declaration on the deployed bundle → **all rights reserved**. This clone is for local study/reproduction only and must not be publicly redeployed without permission. |

Because the source maps were published, the clone is a **source-level port**, not a
reconstruction from rendered HTML. Components, data shapes and copy come from the
origin's own source.

## Complexity

**L3 / 6** — a content-heavy single-page React app with routed views, but no
WebGL, canvas, scroll-jacking or third-party embeds. The only notable runtime
behaviour is a lightweight scroll-reveal and a pixel-art hover motif.

## Clone mode

**Faithful clone (忠实复刻).** Real fonts, real photographs, real colour values —
no substitutes. Brand/trademark considerations are listed under *Before deploying*
rather than being pre-emptively swapped out.

## Architecture

```
index.html            ← built entry (generated; do not hand-edit)
bundle/               ← built JS + CSS + the 18 self-hosted woff2 files
assets/               ← 23 photographs + logos captured from the origin
src/
  index.html          ← Vite source entry (kept out of the root so a rebuild
                        can never overwrite its own output)
  main.jsx            ← mounts App; imports fonts.css then global.css
  App.jsx             ← route table
  pages/              ← Home, About, Program, ProgramDetail, Publication,
                        Gallery, PublicProfile
  components/         ← Nav, Footer, HeroCarousel, PhotoTile, cards, modals,
                        Lightboxes, PixelBand, RevealToAccent, primitives
  data/content.js     ← all page copy, extracted from the origin bundle
  lib/api.js          ← origin's content API client (see *Known gaps*)
  styles/global.css   ← design tokens, transcribed verbatim
  assets/fonts/       ← fonts.css + 18 woff2 files
scripts/
  build-fonts.mjs     ← regenerates fonts.css + woff2 from the origin's own CSS
  verify-fonts.mjs    ← proves the fonts actually resolve in a real browser
  postbuild.mjs       ← mirrors the build to the project root
  serve.mjs           ← local static server
```

### Build

```bash
npm install
npm run build      # vite build + postbuild mirror
npm run serve      # http://127.0.0.1:4173/
```

`vite.config.js` sets `root: "src"`, `base: "./"` and `publicDir: false`, so the
emitted bundle uses relative URLs and works from both `http://` and `file://`
(the OpenDesign preview). Output goes to `dist/` and `postbuild.mjs` mirrors it
to the project root, flipping the entry script to a classic (non-module) one
because an ES module cannot load over `file://`.

## Fonts

The origin loads two stylesheets:

```
https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap
https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900
                                     &family=Playfair+Display:ital,wght@1,400&display=swap
```

Google serves **one `@font-face` per unicode subset**. The origin resolves
**18 faces**: Montserrat ×10 (5 subsets × 2 styles), Playfair Display ×4,
Clash Display ×4. All 18 are self-hosted and verified byte-identical to what the
origin's CDN serves.

`scripts/build-fonts.mjs` parses the origin's own declarations (family, style,
weight, `src`, `unicode-range`) and re-emits them with local `url()`s — nothing
is inferred from filenames.

> **Why this matters.** An earlier revision of `fonts.css` carried only two
> Montserrat faces per style and had them **mis-paired**: the file named
> `…-latin-ext` actually held the *Vietnamese* subset, and the other held
> *latin-ext*. Basic Latin (`U+0000-00FF`) was covered by **no face at all**, so
> every `a–z`, digit and punctuation mark fell through to `system-ui` — the page
> rendered in the system font instead of Montserrat. Pairing subsets by filename
> is what caused it; pairing them by the origin's own `unicode-range` fixes it.

`scripts/verify-fonts.mjs` guards this: it drives a real browser and asserts each
family resolves via the CSS Font Loading API (`document.fonts.check`), so a
missing subset fails loudly instead of silently degrading.

## Fidelity

| Dimension | Result |
|---|---|
| Structure | 18 images, 12 links, 0 console errors — identical to origin |
| Palette | body/nav/main/footer computed colours match origin exactly |
| Fonts | 18/18 faces, byte-identical to origin; all families resolve |
| Visual diff @1440 | **3.78%** pixel difference, **RMSE 0.0298**, score **4.5/5** |
| Page height @1440 | 3177px — **exactly** the origin's |
| Tracking | none in origin, none in clone |

Remaining diff is concentrated in the hero photograph and the scroll-reveal
timing, not in layout or type.

## Known gaps

1. **Content API is dead.** `src/lib/api.js` targets
   `https://company-profile-pb.up.railway.app`, whose `/api/public/*` endpoints
   now return **404**. The origin therefore renders its baked-in fallback copy —
   and so does this clone, using the same strings extracted from the bundle. If
   the API is restored, `src/lib/api.js` will pick it up unchanged.
2. **Login is a modal only.** The origin's login posts to a backend that is not
   part of this clone; the modal renders and validates but does not authenticate.
3. **`content.js` is a snapshot.** It reflects the origin's content at capture
   time; it is not live.

## Before deploying

This is a faithful clone of someone else's brand. If you intend to publish it,
replace first:

- **Brand** — name, logotype, and the `Peken Banyumasan` marks in
  `assets/logo-peken-banyumasan.png`, `assets/logotype-peken-nav.png`.
- **Photographs** — all 23 files in `assets/` are the origin's; confirm you have
  rights to each.
- **Copy** — `src/data/content.js`.
- **Colours** — the token block at the top of `src/styles/global.css`.
- **Fonts** — Montserrat and Playfair Display are OFL (fine to ship); Clash
  Display is free from Fontshare under its own licence (fine to ship).

## Evidence

| File | What it shows |
|---|---|
| `RECON/original-summary.md` | origin recon: palette, 18 font families, 0 errors |
| `RECON/clone-summary.md` | clone recon: matching palette, 18 `@font-face` rules |
| `RECON/visual-diff-1440.json` | 3.78% diff, RMSE 0.0298, score 4.5 |
| `RECON/screenshots/` | origin vs clone at 1440 / 768 / 390 + diff overlay |
| `CLONE_AUDIT.md` | tracking / brand-residue / fidelity audit |
