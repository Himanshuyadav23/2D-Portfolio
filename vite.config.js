import { defineConfig } from "vite";

export default defineConfig({
  base: "/2D-Portfolio",
  outDir: './docs',
  emptyOutDir: true, 
  build:{
    minify: "terser",
  },
});
