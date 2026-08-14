import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: './', // ፋይሎቹን ከ Root እንዲወስድ ያደርገዋል
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        others: './others.html',
        to_cbe_account: './to_cbe_account.html'
      }
    }
  }
});
