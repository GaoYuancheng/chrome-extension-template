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

  build: {
    outDir: "dist/src",
    emptyOutDir: false, // TODO: 去掉之后copy插件就不生效了，应该是执行时机问题（copy在清空dist之前执行了）

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
