import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      __MINING_INTERVAL__: JSON.stringify(env.MINING_INTERVAL || '1000')
    },
    build: {
      outDir: 'dist',
      sourcemap: true
    },
    server: {
      port: 5173
    }
  }
})




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
