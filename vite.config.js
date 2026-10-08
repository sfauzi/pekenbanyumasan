import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

/**
 * Peken Banyumasan — clone build config.
 *
 * Layout rationale:
 *
 * - `root: "src"`. The delivered entry point is the project-root `index.html`,
 *   which is also where the build writes. Keeping Vite's source entry at
 *   `src/index.html` means the two never collide, so a rebuild cannot overwrite
 *   its own source with its output.
 *
 * - `base: "./"` emits relative asset URLs so the built site renders correctly
 *   from a file path or a nested preview route; the OpenDesign preview and the
 *   exported zip both depend on this.
 *
 * - The 23 photographs captured from the origin live in the root `assets/`
 *   folder and are referenced from the components as `./assets/<file>` — the
 *   same shape the origin uses. `publicDir: false` keeps Vite from copying that
 *   ~100 MB tree a second time, and the `serve-origin-assets` plugin makes
 *   `npm run dev` serve `/assets` from it, so dev, the build and the delivered
 *   root all agree.
 *
 * - The compiled JS/CSS goes to `dist/bundle/`; `scripts/postbuild.mjs` mirrors
 *   it to the project root and flips the script tag to a classic (non-module)
 *   one, because an ES module cannot load over `file://`.
 */
function serveOriginAssets() {
  const send = (res, file, type) => {
    res.setHeader("Content-Type", type);
    fs.createReadStream(file).pipe(res);
  };
  const types = { ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2" };

  return {
    name: "serve-origin-assets",
    configureServer(server) {
      // `/assets/*` and `/favicon.png` live at the project root, outside the
      // Vite root (`src/`), so they need explicit wiring in dev.
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url || "/").split("?")[0]);
        const rel = url === "/favicon.png" ? "favicon.png" : url.startsWith("/assets/") ? url.slice(1) : null;
        if (!rel) return next();
        const file = path.join(process.cwd(), rel);
        if (fs.existsSync(file) && fs.statSync(file).isFile()) {
          return send(res, file, types[path.extname(file).toLowerCase()] || "application/octet-stream");
        }
        next();
      });
    },
  };
}

export default defineConfig({
  root: "src",
  plugins: [react(), serveOriginAssets()],
  base: "./",
  publicDir: false,
  build: {
    outDir: "../dist",
    assetsDir: "bundle",
    emptyOutDir: true,
    modulePreload: false,
    cssCodeSplit: false,
    target: "es2018",
    rollupOptions: {
      output: {
        format: "iife",
        inlineDynamicImports: true,
        entryFileNames: "bundle/app.js",
        chunkFileNames: "bundle/app.[ext]",
        assetFileNames: "bundle/app.[ext]",
      },
    },
  },
});
