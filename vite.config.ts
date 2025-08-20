import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // expone en LAN y arregla cosas con WSL/VM
    watch: {
      usePolling: true,   // <— clave
      interval: 500,      // 100–300ms
    },
  },
});