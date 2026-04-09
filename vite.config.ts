import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const FIGMA_ASSET_PREFIX = 'figma:asset/'
const FIGMA_PLACEHOLDER_PREFIX = '\0figma:placeholder:'

function resolveFigmaAsset(source: string) {
  if (!source.startsWith(FIGMA_ASSET_PREFIX)) {
    return null
  }

  const assetPath = path.resolve(__dirname, 'src/assets', source.slice(FIGMA_ASSET_PREFIX.length))
  return fs.existsSync(assetPath) ? assetPath : `${FIGMA_PLACEHOLDER_PREFIX}${source}`
}

function createPlaceholderAsset(source: string) {
  const label = source.slice(FIGMA_ASSET_PREFIX.length)
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
      <rect width="600" height="600" fill="#f5f7fb" />
      <rect x="24" y="24" width="552" height="552" rx="32" fill="#ffffff" stroke="#d7deea" stroke-width="4" stroke-dasharray="16 12" />
      <text x="300" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#334155">Missing Figma Asset</text>
      <text x="300" y="308" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#64748b">${label}</text>
      <text x="300" y="350" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#64748b">Replace this file in src/assets</text>
    </svg>
  `.trim()

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

export default defineConfig({
  base: '/suunabi-app-onboarding/',
  plugins: [
    {
      name: 'figma-asset-resolver',
      enforce: 'pre',
      resolveId(source) {
        return resolveFigmaAsset(source)
      },
      load(id) {
        if (!id.startsWith(FIGMA_PLACEHOLDER_PREFIX)) {
          return null
        }

        const source = id.slice(FIGMA_PLACEHOLDER_PREFIX.length)
        return `export default ${JSON.stringify(createPlaceholderAsset(source))}`
      },
    },
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
