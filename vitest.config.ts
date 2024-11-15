import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // グローバルなテスト関数を有効にする
    environment: 'jsdom', // DOM 環境を設定
    setupFiles: './vitest.setup.ts', // セットアップファイルを指定
  },
});
