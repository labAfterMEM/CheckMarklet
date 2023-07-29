import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  base:"check-marklet",
  server:{
    host:true,
    port:8080,
    hmr:{
      host:'localhost'
    }
  },
  esbuild:{
    jsxFactory:'h'
  },
  build:{
    emptyOutDir:true,
  },

  resolve:{
    alias: {
      "~/": `${__dirname}/src/`, // path.join(__dirname, "src/") でも可
    },
  },
  plugins: [react(),tsconfigPaths(),],
})
