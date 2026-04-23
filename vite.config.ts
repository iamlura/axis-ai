import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

// Resolve figma:asset/* imports to a transparent 1x1 PNG fallback
function figmaAssetPlugin(): Plugin {
  const TRANSPARENT_PNG =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) return '\0figma-asset:' + id
      return null
    },
    load(id) {
      if (id.startsWith('\0figma-asset:figma:asset/')) {
        return `export default "${TRANSPARENT_PNG}"`
      }
      return null
    },
  }
}

export default defineConfig({
  base: '/axis-ai/',
  plugins: [
    figmaAssetPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the root directory
      '@': path.resolve(__dirname, '.'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
