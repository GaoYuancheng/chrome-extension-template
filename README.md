## chrome 插件开发模板

使用 vite + react 开发/打包

chrome 插件开发文档

> https://developer.chrome.com/docs/extensions/reference/

本模板可使用 [gyc-cli](https://github.com/GaoYuancheng/gyc-cli) 自动生成

### 使用此模板开发插件

1. yarn global add gyc-cli
2. gyc-cli init
3. cd ./{packageName}
4. pnpm run start 并且把 {packageName} 文件夹作为一个插件拖入 chrome 中

### 开发此模板

1. pnpm install
2. pnpm run start 并且把 {packageName} 文件夹作为一个插件拖入 chrome 中

### 目录

```
├── README.md
├── {packageName} // 打包后的文件夹
├── defaultPopup.html // 主页
├── manifest.json // 插件配置
├── package.json
├── static // 静态文件
├── src
│   ├── App.tsx
│   ├── background.ts
│   ├── contentScriptEnd.ts
│   ├── contentScriptStart.ts
│   ├── main.tsx
│   └── vite-env.d.ts
├── tsconfig.json
├── vite.config.ts
└── pnpm-lock.yaml
```

### 添加一个 husky

1. npx husky install
2. npx husky add .husky/pre-commit "node_modules/.bin/lint-staged"
3. package.json 对应修改

### 添加插件设置页

1. 在 manifest.json 中添加

```
  "options_page": "./optionsPage.html",
```

2. 在 src 目录下创建 optionsPage.html 文件

3. vite.config.ts 中添加

```
rollupOptions: {
   input: {
      ...,
      optionsPage: path.resolve(__dirname, "optionsPage.html"),
   }
}

```

3. 在 src 目录下添加 相关 tsx 代码
