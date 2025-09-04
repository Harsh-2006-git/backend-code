import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // exposes 0.0.0.0
    port: Number(process.env.PORT) || 5173, // use Render’s assigned port
  },
});
