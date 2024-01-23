import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8080,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/_setup.ts",
  },
  resolve: {
    alias: {
      common: "/src/common/",
      components: "/src/components/",
      modules: "/src/modules/",
      scss: "/src/scss/",
      pages: "/src/pages/",
      img: "/src/img/",
      types: "/src/types/",
      validation: "/src/validation/",
      store: "/src/store/",
    },
  },
});
