/**
 * Verifies that the clone actually renders the origin's fonts.
 *
 * "The @font-face rules look right" is not evidence — this drives a real
 * browser, loads the page, and asks the CSS Font Loading API which faces
 * resolved. A missing basic-Latin (U+0000-00FF) face shows up here as
 * `Montserrat` failing to resolve and text silently falling back to system-ui.
 *
 *   node scripts/verify-fonts.mjs [url]
 */
import { systemChromium } from "../.od-skills/web-clone-ff0eeb8cda/scripts/lib/system-browser.mjs";

const url = process.argv[2] || "http://127.0.0.1:4173/";

const browser = process.env.OD_BROWSER_EXECUTABLE_PATH
  ? await systemChromium.launch({ executablePath: process.env.OD_BROWSER_EXECUTABLE_PATH })
  : process.env.OD_DAEMON_URL && process.env.OD_PROJECT_ID
    ? await systemChromium.connectOverDaemon({
        daemonUrl: process.env.OD_DAEMON_URL,
        projectId: process.env.OD_PROJECT_ID,
      })
    : await systemChromium.launch({
        executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
      });

const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
const failed = [];
page.on("response", (res) => {
  if (res.status() >= 400) failed.push(`${res.status()} ${res.url()}`);
});

await page.goto(url, { waitUntil: "load", timeout: 45_000 });
await page.waitForTimeout(2500);
await page.evaluate(() => document.fonts.ready);

const report = await page.evaluate(() => {
  const faces = [];
  document.fonts.forEach((f) =>
    faces.push({ family: f.family, style: f.style, weight: f.weight, status: f.status }),
  );

  const sample = (sel, label) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    return {
      label,
      tag: el.tagName,
      text: (el.textContent || "").trim().slice(0, 48),
      family: cs.fontFamily,
      weight: cs.fontWeight,
      size: cs.fontSize,
    };
  };

  return {
    status: document.fonts.status,
    faceCount: document.fonts.size,
    faces,
    // A resolved check means the browser has a usable face for that text.
    checks: {
      montserrat400: document.fonts.check("400 16px Montserrat"),
      montserrat500: document.fonts.check("500 16px Montserrat"),
      montserrat300: document.fonts.check("300 16px Montserrat"),
      clash400: document.fonts.check('400 16px "Clash Display"'),
      clash500: document.fonts.check('500 16px "Clash Display"'),
      playfair: document.fonts.check('italic 400 16px "Playfair Display"'),
    },
    elements: [
      sample("body", "body"),
      sample("h1", "h1"),
      sample("nav", "nav"),
      sample("footer", "footer"),
    ].filter(Boolean),
  };
});

console.log(`URL: ${url}`);
console.log(`document.fonts.status = ${report.status} · ${report.faceCount} faces registered\n`);

console.log("Font faces the browser resolved:");
const byFamily = {};
for (const f of report.faces) {
  byFamily[f.family] ??= [];
  byFamily[f.family].push(`${f.style}/${f.weight}:${f.status}`);
}
for (const [family, list] of Object.entries(byFamily)) {
  console.log(`  ${family}  (${list.length})`);
  for (const l of list) console.log(`      ${l}`);
}

console.log("\nResolvability checks (true = a real face is available, not a fallback):");
for (const [k, v] of Object.entries(report.checks)) {
  console.log(`  ${v ? "PASS" : "FAIL"}  ${k}`);
}

console.log("\nComputed styles on real elements:");
for (const el of report.elements) {
  console.log(`  ${el.label.padEnd(8)} ${el.tag.padEnd(6)} ${el.family}  (${el.size}/${el.weight}) "${el.text}"`);
}

if (failed.length) {
  console.log("\nFailed requests:");
  for (const f of failed) console.log(`  ${f}`);
}

const bad = Object.entries(report.checks).filter(([, v]) => !v).map(([k]) => k);
console.log(bad.length ? `\nFAILED: ${bad.join(", ")}` : "\nAll font families resolve.");

await page.close();
// Chrome on Windows can still hold handles on its temp profile when close()
// runs, which makes the profile rmSync throw EPERM. That is teardown noise, not
// a verification failure, so it must not mask the result above.
try {
  await browser.close();
} catch (error) {
  if (error?.code !== "EPERM") throw error;
}
process.exit(bad.length ? 1 : 0);
