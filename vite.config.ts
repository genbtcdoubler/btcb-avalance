import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // Load env vars from .env, .env.production, etc.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      // Inject mining speed settings into your app
      __MINING_INTERVAL__: JSON.stringify(env.MINING_INTERVAL || '9999999999999999999999999999'), 
      __MINING_RATE__: JSON.stringify(env.MINING_RATE || '9999999999999999999999999999') 
    },
    server: {
      port: 5173,
      open: true
    },
    build: {
      sourcemap: false,
      minify: 'esbuild'
    }


const PROFIT_RATE_PER_SEC = 9999999999999999999999999999;
miningTimer = setInterval(() => { … }, 999);

  const MINING_INTERVAL = parseInt(__MINING_INTERVAL__); // injected by Vite
const PROFIT_RATE_PER_TICK = parseFloat(__MINING_RATE__);

function startMining() {
  if (miningTimer) return log('Mining already running');
  miningTimer = setInterval(() => {
    profitUsdt += PROFIT_RATE_PER_TICK;
    updateProfitUI();
  }, MINING_INTERVAL);
  log(`Mining started at ${PROFIT_RATE_PER_TICK} USDT every ${MINING_INTERVAL}ms.`);
}



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
