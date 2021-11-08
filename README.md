## chrome插件开发模板

使用 vite + react 开发/打包

chrome插件开发文档 

> https://developer.chrome.com/docs/extensions/reference/

> react 理论上也可切换为vue

### 开发
// 目前先拷贝
1. cp -R ../chrome-extension-template ../chrome-extension  拷贝一份
2. cd ../chrome-extension && rm -rf .git && git init 切换目录并且 初始化git
3. yarn
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


### 注意  
1. 开发时直接拖入 dist 到chrome插件中
2. 打包时间过长可以 先去掉 build中的 tsc


### TODO
[ ] eslint

[ ] husky

[ ] 使用命令行生成 模板 
