import { defineConfig } from "vite";

export default defineConfig({
  outDir: './docs',
  emptyOutDir: true, 
  build:{
    outDir: './docs',
    emptyOutDir: true,
    minify: "terser",
  },
});
