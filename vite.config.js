import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
  base: "/alura-challengue/",
  plugins: [],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
