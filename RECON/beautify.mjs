import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const prettier = require("C:/Users/Administrator/AppData/Local/Programs/Open Design/resources/app/node_modules/prettier/index.cjs");

const files = process.argv.slice(2);
fs.mkdirSync("RECON/pretty", { recursive: true });

for (const f of files) {
  const src = fs.readFileSync(f, "utf8");
  try {
    const out = await prettier.format(src, { parser: "babel", printWidth: 100 });
    const name = f.split("/").pop().replace(/\.js$/, "") + ".pretty.js";
    fs.writeFileSync("RECON/pretty/" + name, out);
    console.log("ok", f, "->", out.split("\n").length, "lines");
  } catch (e) {
    console.log("FAIL", f, e.message.slice(0, 200));
  }
}
