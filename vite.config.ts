import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#tmp': '/tmp',
      '#data': '/data/index.ts',
      '#logic': '/data/logic',
      '#modules': "/src/modules",
      '#components': "/src/components",
      '#icons': "/src/icons",
      '@vars': './themes/vars.scss',

    },
  },
})
