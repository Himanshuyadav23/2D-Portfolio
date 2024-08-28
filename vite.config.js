import { defineConfig } from "vite";

export default defineConfig({
  outDir: './docs',
  emptyOutDir: true, 
  build:{
    minify: "terser",
  },
});
