import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import sassGlobImports from "vite-plugin-sass-glob-import";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), sassGlobImports()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
