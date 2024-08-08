import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

console.log("Current directory:", __dirname);
console.log("Resolved server path:", path.resolve(__dirname, "../server"));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@server": path.resolve(__dirname, "../server"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
      },
    },
  },
});
