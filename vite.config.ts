import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy"; //引入插件
import pck from "./package.json";

import path from "path";

const outputDir = pck.name;

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
    outDir: `${outputDir}`,

    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "./defaultPopup.html"),
        "src/background": path.resolve(__dirname, "./src/background.ts"),
        "src/contentScriptStart": path.resolve(
          __dirname,
          "./src/contentScriptStart.ts"
        ),
        "src/contentScriptEnd": path.resolve(
          __dirname,
          "./src/contentScriptEnd.ts"
        ),
      },
      output: {
        entryFileNames: "[name].js",
      },
      plugins: [
        copy({
          flatten: false,
          targets: [
            {
              src: "./manifest.json",
              dest: `./${outputDir}`,
              // transform: (contents, filename) =>
              //   contents.toString().replace(/\.\/dist\//g, "./"), // ./dist/ => ./
            }, //执行拷贝
            {
              src: "./static/**/*",
              dest: `./${outputDir}`,
            },
          ],
        }),
      ],
    },
  },
});
