import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  plugins: [react(), WindiCSS()],
  optimizeDeps: {
    force: true, // This forces dependency optimization
  },
  build: {
    commonjsOptions: {
      include: [], // This helps with CommonJS dependencies
    },
  },
});
