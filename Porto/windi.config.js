import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#f43f5e",
      },
      animation: {
        bounce: "bounce 2s infinite",
      },
    },
  },
});
