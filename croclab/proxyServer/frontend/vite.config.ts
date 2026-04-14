import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [react()],
    server: {
      port: 8888,
      https: {
        pfx: fs.readFileSync('../hpssl2026.pfx'),
        passphrase: env.VITE_CERT_PASSPHRASE,
      },
      // Ensure HMR works over secure websockets
      hmr: {
        protocol: 'wss',
        host: 'localhost',
      },
    },
  };
});
