import fs from "node:fs";

const src = fs.readFileSync("RECON/app-line41.js", "utf8");

// Extract readable string literals
const strs = new Set();
const re = /"((?:[^"\\]|\\.){2,300})"/g;
let m;
while ((m = re.exec(src))) {
  const s = m[1];
  if (/[A-Za-z]/.test(s) && !/^[a-z]+(-[a-z]+)*$/.test(s) && !/^[A-Z_]+$/.test(s)) strs.add(s);
}
const arr = [...strs];
fs.writeFileSync("RECON/app-line41-strings.txt", arr.join("\n"));
console.log("total literals:", arr.length);
console.log("--- first 200 ---");
console.log(arr.slice(0, 200).join("\n"));
