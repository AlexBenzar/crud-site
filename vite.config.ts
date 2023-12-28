import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
