import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function resolvePagesBase() {
  const explicitBase = process.env.VITE_BASE_PATH
  if (explicitBase) {
    return explicitBase.endsWith('/') ? explicitBase : `${explicitBase}/`
  }

  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
  if (!repoName || repoName.endsWith('.github.io')) {
    return '/'
  }

  return `/${repoName}/`
}

export default defineConfig({
  base: resolvePagesBase(),
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        experiment: path.resolve(__dirname, "experiment/index.html"),
      },
    },
  },
  plugins: [
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
