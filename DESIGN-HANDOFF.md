# 5be6b85e-e111-4355-8215-eee9c07c18a8 implementation handoff

This archive is the source of truth for turning the design into production code. Start from `index.html`, then preserve the visual system, responsive behavior, and interactions found in the exported files.

## Implementation target
- Build production UI from the exported design, not a loose reinterpretation.
- Preserve typography scale, spacing rhythm, color tokens, border radii, shadows, motion timing, and component states.
- Replace static placeholders only when the target app has real data or functional equivalents.
- Keep generated product UI free of OpenDesign chrome, preview labels, or design-process annotations.
- Treat this handoff as a visual contract: if implementation choices conflict, match the exported pixels and behavior first, then refactor internals.

## Source map
- Primary entry: `index.html`
- HTML screens detected: 3
- Stylesheets detected: 4
- Script/component files detected: 52
- Supporting assets detected: 104

## Responsive contract
Validate the implementation across this 2025–2026 viewport matrix:
- Mobile compact: 360×800
- Mobile standard: 390×844
- Mobile large: 430×932
- Foldable / small tablet: 600×960
- Tablet portrait: 820×1180
- Tablet landscape: 1024×768
- Laptop: 1366×768
- Desktop: 1440×900
- Wide desktop: 1920×1080

For responsive web exports, treat these as a modern breakpoint system for one adaptive web experience, not three fixed screenshots. Do not split responsive web into unrelated native app screens unless the project explicitly includes native targets. Use semantic layout thresholds, fluid `clamp()` type/spacing, and container queries where component width matters more than viewport width. Preserve any CSS media queries, container queries, fluid `clamp()` scales, and layout changes already present in the exported files.

## Design fidelity contract
- Extract reusable tokens before writing components: background, surface, foreground, muted text, border, accent, radius, shadow, spacing, type scale, and motion duration/easing.
- Map product screens, in-app modules/components, optional landing page, and optional OS widget surfaces before coding. Keep these surfaces separate in the target architecture.
- Match layout geometry: max-widths, gutters, grid columns, card proportions, sticky/fixed elements, and viewport-specific navigation.
- Preserve real copy, labels, and data shown in the export. Do not replace specific text with generic marketing filler.
- Preserve interactive affordances: hover, focus, pressed, disabled, loading, validation, copy/share, tab/accordion, modal/sheet, and keyboard states where present.
- Preserve accessibility semantics when converting: headings stay hierarchical, controls remain buttons/links/inputs, focus states stay visible.
- Do not keep prototype-only annotations, frame labels, or OpenDesign chrome in the production UI.

## CJX-ready UX contract
- Use `DESIGN-MANIFEST.json` as the machine-readable map for screens, app modules, OS widgets, landing pages, tokens, interactions, and viewport checks.
- Screen-file-first: when multiple user-facing surfaces exist, implement each HTML screen as its own route/file. Treat `index.html` as a launcher/overview when the manifest marks it that way, not as a combined final UI.
- If `landing.html`, app screens, platform screens, or OS widget files exist, preserve those boundaries in the target app instead of merging them into one page.
- A single self-contained `index.html` is acceptable only when the export truly contains one user-facing screen and its CSS/JS are structured enough to extract tokens, components, states, and behavior.
- If separate `css/` or `js/` files exist, treat them as source of truth for token/component/interactions before porting to React, Vue, SwiftUI, Compose, or another target stack.
- In-app modules/components are product UI blocks inside the app. OS widgets are home-screen/lock-screen/quick-access surfaces outside the app. Do not merge those concepts.

## Color and brand contract
- Use the exported design tokens and product/domain context as the color source of truth.
- Do not introduce warm beige / cream / peach / pink / orange-brown background washes unless they are already explicit brand/reference colors in the export.
- A stylesheet or design/token file was detected; inspect it for canonical color variables before choosing framework theme tokens.

## Implementation sequence for AI coding tools
1. Open `index.html` and `DESIGN-MANIFEST.json`; identify every screen file, launcher/overview file, app module, and interaction before coding.
2. If multiple HTML screens exist, map them to separate routes/surfaces first; do not merge `landing.html`, product app screens, platform screens, or OS widgets into one route.
3. Extract a token table from CSS/root styles and inline styles before building framework components.
4. Build product screens and domain-specific in-app modules from largest layout regions down to controls; avoid starting with isolated atoms that lose spatial intent.
5. Port responsive behavior across the modern viewport matrix and test each semantic breakpoint before cleanup.
6. Port interactions and states, then replace static placeholders only with real app data or functional equivalents.
7. Keep optional landing page and OS widget surfaces as separate surfaces if present.
8. Compare final screenshots against the export at 360×800, 390×844, 430×932, 820×1180, 1024×768, 1366×768, 1440×900, and 1920×1080 before declaring done.

## Entry points
- `index.html`
- `RECON/peken-index.html`
- `src/index.html`

## Styles
- `bundle/app.css`
- `RECON/index-C66vTWKh.css`
- `src/assets/fonts/fonts.css`
- `src/styles/global.css`

## Scripts/components
- `bundle/app.js`
- `RECON/app-line39.js`
- `RECON/app-line41.js`
- `RECON/app-line44.js`
- `RECON/app-line48.js`
- `RECON/app-line50.js`
- `RECON/app-part1.js`
- `RECON/app-part2.js`
- `RECON/beautify.mjs`
- `RECON/build-fonts.mjs`
- `RECON/extract-strings.mjs`
- `RECON/fetch-fonts.mjs`
- `RECON/index-Cev4RdvL.js`
- `RECON/pretty/app-line48.pretty.js`
- `RECON/pretty/app-line50.pretty.js`
- `RECON/pretty/index-Cev4RdvL.pretty.js`
- `scripts/build-fonts.mjs`
- `scripts/fetch-assets.mjs`
- `scripts/fetch-fonts.mjs`
- `scripts/init-clone.mjs`
- `scripts/postbuild.mjs`
- `scripts/serve.mjs`
- `scripts/verify-fonts.mjs`
- `src/App.jsx`
- `src/components/AboutBlocks.jsx`
- `src/components/cards.jsx`
- `src/components/Footer.jsx`
- `src/components/HeroCarousel.jsx`
- `src/components/Lightboxes.jsx`
- `src/components/LoginModal.jsx`
- `src/components/Modal.jsx`
- `src/components/Nav.jsx`
- `src/components/PhotoTile.jsx`
- `src/components/PixelBand.jsx`
- `src/components/primitives.jsx`
- `src/components/ProgramRow.jsx`
- `src/components/RevealToAccent.jsx`
- `src/components/RichText.jsx`
- `src/data/content.js`
- `src/hooks/usePrefersReducedMotion.js`
- `src/lib/api.js`
- `src/lib/icons.jsx`
- `src/lib/utils.js`
- `src/main.jsx`
- `src/pages/About.jsx`
- `src/pages/Gallery.jsx`
- `src/pages/Home.jsx`
- `src/pages/Program.jsx`
- `src/pages/ProgramDetail.jsx`
- `src/pages/Publication.jsx`
- `src/pages/PublicProfile.jsx`
- `vite.config.js`

## Assets and supporting files
- `assets/banner-about.png`
- `assets/banner-home-1.jpg`
- `assets/banner-home-2.jpg`
- `assets/gallery-1.jpg`
- `assets/gallery-2.jpg`
- `assets/gallery-3.jpg`
- `assets/gallery-4.jpg`
- `assets/gallery-5.jpg`
- `assets/gallery-6.jpg`
- `assets/gallery-perform-1.jpg`
- `assets/gallery-perform-2.jpg`
- `assets/logo-peken-banyumasan.png`
- `assets/logotype-peken-nav.png`
- `assets/map-kota-lama.png`
- `assets/program-byob.jpg`
- `assets/program-coffee.jpg`
- `assets/program-fashion.jpg`
- `assets/program-local-market.jpg`
- `assets/program-makers.jpg`
- `assets/program-pitutur.jpg`
- `assets/tokoh-portrait-1.png`
- `assets/tokoh-portrait-2.png`
- `assets/tokoh-portrait-3.png`
- `bundle/app.woff2`
- `bundle/app10.woff2`
- `bundle/app11.woff2`
- `bundle/app12.woff2`
- `bundle/app13.woff2`
- `bundle/app14.woff2`
- `bundle/app15.woff2`
- `bundle/app16.woff2`
- `bundle/app17.woff2`
- `bundle/app18.woff2`
- `bundle/app2.woff2`
- `bundle/app3.woff2`
- `bundle/app4.woff2`
- `bundle/app5.woff2`
- `bundle/app6.woff2`
- `bundle/app7.woff2`
- `bundle/app8.woff2`
- `bundle/app9.woff2`
- `CLONE_AUDIT.md`
- `favicon.png`
- `NOTES.md`
- `package-lock.json`
- `package.json`
- `RECON/api/about.json`
- `RECON/api/agenda.json`
- `RECON/api/gallery.json`
- `RECON/api/hero.json`
- `RECON/api/programs.json`
- `RECON/api/stats.json`
- `RECON/app-line41-strings.txt`
- `RECON/app.map`
- `RECON/asset-manifest.json`
- `RECON/clone-recon.json`
- `RECON/clone-summary.md`
- `RECON/favicon.png`
- `RECON/interactions-clone/screenshots/00-initial.png`
- `RECON/interactions-clone/screenshots/01-scroll-middle-b04a45f075.png`
- `RECON/interactions-clone/screenshots/02-scroll-bottom-7297e0cbea.png`
- `RECON/interactions-clone/screenshots/03-hover-Peken-Banyumasan-beranda-b3fe923178.png`
- `RECON/interactions-clone/screenshots/04-hover-HOME-e6c18b4841.png`
- `RECON/interactions-clone/screenshots/05-hover-ABOUT-a8e5b90a78.png`
- `RECON/interactions-clone/screenshots/06-hover-PROGRAM-ab3fe94920.png`
- `RECON/interactions-clone/screenshots/07-hover-PUBLICATION-64bf78e7b8.png`
- `RECON/interactions-clone/screenshots/08-hover-GALLERY-7398dfa7d5.png`
- `RECON/interactions-clone/screenshots/09-hover-LOGIN-fa01acf10d.png`
- `RECON/interactions-clone/screenshots/10-hover-DETAIL-AGENDA-a3a0103bf3.png`
- `RECON/interactions-clone/screenshots/11-click-Peken-Banyumasan-beranda-cc9fa13220.png`
- `RECON/interactions-clone/screenshots/12-click-HOME-4688e3b713.png`
- `RECON/interactions-clone/screenshots/13-click-ABOUT-d3066183c8.png`
- `RECON/interactions-clone/screenshots/14-click-PROGRAM-cf0052a57f.png`
- `RECON/original-recon.json`
- `RECON/original-summary.md`
- `RECON/recon-clone-log.txt`
- `RECON/recon-log.txt`
- `RECON/screenshots/clone-1440.png`
- `RECON/screenshots/clone-390.png`
- `RECON/screenshots/clone-768.png`
- `RECON/screenshots/original-1440.png`
- `RECON/screenshots/original-390.png`
- `RECON/screenshots/original-768.png`
- `RECON/screenshots/visual-diff-1440.png`
- `RECON/serve.log`
- `RECON/visual-diff-1440.json`
- `src/assets/fonts/clash-display-normal-400-latin.woff2`
- `src/assets/fonts/clash-display-normal-500-latin.woff2`
- `src/assets/fonts/clash-display-normal-600-latin.woff2`
- `src/assets/fonts/clash-display-normal-700-latin.woff2`
- `src/assets/fonts/montserrat-italic-100-900-cyrillic-ext.woff2`
- `src/assets/fonts/montserrat-italic-100-900-cyrillic.woff2`
- `src/assets/fonts/montserrat-italic-100-900-latin-ext.woff2`
- `src/assets/fonts/montserrat-italic-100-900-latin.woff2`
- `src/assets/fonts/montserrat-italic-100-900-vietnamese.woff2`
- `src/assets/fonts/montserrat-normal-100-900-cyrillic-ext.woff2`
- `src/assets/fonts/montserrat-normal-100-900-cyrillic.woff2`
- `src/assets/fonts/montserrat-normal-100-900-latin-ext.woff2`
- `src/assets/fonts/montserrat-normal-100-900-latin.woff2`
- `src/assets/fonts/montserrat-normal-100-900-vietnamese.woff2`
- `src/assets/fonts/playfair-display-italic-400-cyrillic.woff2`
- `src/assets/fonts/playfair-display-italic-400-latin-ext.woff2`
- `src/assets/fonts/playfair-display-italic-400-latin.woff2`
- `src/assets/fonts/playfair-display-italic-400-vietnamese.woff2`

## Coding checklist for AI tools
1. Inspect `index.html` and `DESIGN-MANIFEST.json` first and identify reusable components before coding.
2. Implement each user-facing screen file as its own route/surface; keep launcher, landing, app, platform, and OS widget files separate.
3. Extract design tokens into the target stack: colors, type scale, spacing, radius, shadows, and motion.
4. Implement layout with real 2025–2026 responsive breakpoints, fluid type/spacing, and container-query-aware component behavior; test with no horizontal overflow.
5. Preserve interactive controls, hover/focus/pressed states, form behavior, validation, and copy actions where present.
6. Implement domain-specific in-app modules with real states; do not flatten them into generic cards.
7. Keep landing page, product screens, and OS widget/quick-access surfaces separate when present.
8. Confirm the production result visually matches the exported design before refactoring internals.
9. Reject implementation shortcuts that flatten the design into generic cards, generic gradients, placeholder stats, or framework-default typography.
10. If a detail is ambiguous, keep the exported HTML/CSS/JS behavior rather than inventing a new pattern.
