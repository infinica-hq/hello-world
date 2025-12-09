import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Connect, PluginOption } from "vite";
import { defineConfig } from "vite";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  plugins: [react()],
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, "index.html"),
        proof: resolve(rootDir, "proof.html"),
      },
    },
  },
  server: {
    allowedHosts: true,
  },
}));
