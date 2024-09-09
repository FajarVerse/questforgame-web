import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/questforgame-web/",
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true,
  },
});
