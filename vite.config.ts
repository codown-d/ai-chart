import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    outDir: 'dist', // 输出目录
    sourcemap: false,
    minify: true,
  },
  server: {
    proxy: {
      // 代理路径
      '/v1': {
        target: 'http://219.151.183.115/', // 目标服务器地址
        changeOrigin: true,  // 是否修改请求头中的 origin 字段
      },
    },
  },
});
