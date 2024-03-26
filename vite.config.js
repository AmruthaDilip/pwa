import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";


const manifestForPlugin = {
  "short_name": "Email Client",
  "name": "Email Client App",
  "icons": [
    {
      "src": "icon.jpeg",
      "sizes": "192x192",
      "type": "image/jpeg"
    }
  ],
  "start_url": "./index.html",
  "display": "standalone",
  "theme_color": "#2196f3",
  "background_color": "#ffffff"
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
});
