import { defineConfig } from "tsup";

export default defineConfig([
  {
    dts: false,
    entry: ["src/scrutari.mjs"],
    format: ["esm", "cjs"],
    clean: true,
    outDir: "dist",
  },
  {
    dts: false,
    entry: ["src/cli.mjs"],
    format: ["esm"],
    clean: true,
    outDir: "dist/",
    banner: {
      js: "#!/usr/bin/env node",
    },
  },
]);
