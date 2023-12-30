import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
  },
  resolve: {
    alias: {
      components: "/src/components/",
      scss: "/src/scss/",
      pages: "/src/pages/",
      img: "/src/img/",
      types: "/src/types/",
      validation: "/src/validation/",
      store: "/src/store/",
    },
  },
});
