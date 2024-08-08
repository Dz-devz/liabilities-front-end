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
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
      },
    },
  },
});
