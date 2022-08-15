## chrome 插件开发模板

使用 vite + react 开发/打包

chrome 插件开发文档

> https://developer.chrome.com/docs/extensions/reference/

本模板使用 gyc-cli 自动生成

### 使用此模板开发插件

1. yarn global add gyc-cli
2. gyc-cli init
3. cd ./{packageName}
4. yarn watch 并且把 dist 文件夹作为一个插件拖入 chrome 中

### 开发此模板

1. pnpm install
2. yarn watch 并且把 dist 文件夹作为一个插件拖入 chrome 中

### 目录

```
├── README.md
├── dist // 打包后的文件夹
├── index.html // 主页
├── manifest.json // 插件配置
├── package.json
├── src
│   ├── App.tsx
│   ├── background.ts
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

### 注意

1. 使用 yarn 安装报命令找不到的情况

   参考 [https://classic.yarnpkg.com/en/docs/cli/global]('https://classic.yarnpkg.com/en/docs/cli/global')

2. 开发时直接拖入 dist 到 chrome 插件中
