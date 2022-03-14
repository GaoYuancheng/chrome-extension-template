## chrome插件开发模板

使用 vite + react 开发/打包

chrome插件开发文档 

> https://developer.chrome.com/docs/extensions/reference/

本模板使用gyc-cli自动生成

### 开发
1. yarn global add gyc-cli
2. gyc-cli init
3. cd ./{packageName}
4. yarn watch 并且把dist文件夹作为一个插件拖入chrome中

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
└── yarn.lock
```

### 添加一个husky
1. npx husky install  
2. npx husky add .husky/pre-commit "node_modules/.bin/lint-staged"
3. package.json 对应修改


### 注意  
1. 使用yarn安装报命令找不到的情况
   
   参考  [https://classic.yarnpkg.com/en/docs/cli/global]('https://classic.yarnpkg.com/en/docs/cli/global')
2. 开发时直接拖入 dist 到chrome插件中
