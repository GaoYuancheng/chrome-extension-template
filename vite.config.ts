import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy"; //引入插件

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
  },
  base: "./",

  css: {
    preprocessorOptions: {
      // 支持less
      less: {
        javascriptEnabled: true,
      },
    },
  },

  build: {
    outDir: "dist/src",

    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "./index.html"),
        background: path.resolve(__dirname, "./src/background.ts"),
        // manifest: path.resolve(__dirname, "./manifest.json"),
      },
      output: {
        entryFileNames: "[name].js",
      },
      plugins: [
        copy({
          targets: [
            {
              src: "./manifest.json",
              dest: "./dist",
              transform: (contents, filename) =>
                contents.toString().replace(/\.\/dist\//g, "./"), // ./dist/ => ./
            }, //执行拷贝
          ],
        }),
      ],
    },
  },
});
