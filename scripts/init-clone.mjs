/**
 * Project skeleton for the Peken Banyumasan clone.
 * Writes NOTES.md and the RECON scaffold if they are missing.
 *
 *   node scripts/init-clone.mjs
 */
import fs from "node:fs";

fs.mkdirSync("RECON/screenshots", { recursive: true });

const notes = `# NOTES — Peken Banyumasan clone

Clone of **https://pekenbanyumasan.pages.dev/** (Peken Banyumasan).
Stack: React 18.3.1 + Vite 5. Build output is previewable at \`dist/index.html\`.

See CLONE_REPORT.md for the origin-vs-clone comparison and scoring.
`;

if (!fs.existsSync("NOTES.md")) fs.writeFileSync("NOTES.md", notes);
console.log("init-clone: scaffold ready");
