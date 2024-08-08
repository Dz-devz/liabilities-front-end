import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// Utility to resolve paths
const resolvePath = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolvePath("./src"),
      "@server": resolvePath("../server"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 4173,
    proxy: {
      "/api": {
        target: "https://liabilities-front-end-production.up.railway.app/",
        changeOrigin: true,
      },
    },
  },
});
