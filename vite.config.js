import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rps-react/',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
})
