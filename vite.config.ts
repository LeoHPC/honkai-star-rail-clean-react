import * as path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'
import EnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' }), EnvironmentPlugin('all')]
})
