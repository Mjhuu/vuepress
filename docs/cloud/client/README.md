## (云盘客户端)快速上手

::: warning 注意
- 本项目采用的技术栈是 `vue-electron`、`vue`、`axios`、`aes-js`、`ant-design-vue`、`node-rsa`、`spark-md5`、`nedb`
- 请确保你的 Node.js 版本 >= 8。
:::

### 项目启动

```shell script
# 进入目录
cd E:\cloud

# 启动项目
yarn dev

# 项目打包
yarn build
```
## 目录结构

```shell script
.
├─build # 项目打包文件
├─static # 静态资源
└─src
    ├─Api
    ├─main # 主进程相关
    └─renderer # 渲染进程相关
        ├─assets
        ├─common
        ├─components
        ├─data
        ├─filter
        ├─pages
        │  ├─dealDataPage # 次渲染进程（主要负责多进程处理耗时解密任务）
        │  │  ├─common
        │  │  ├─components
        │  │  ├─router
        │  │  └─views
        │  └─mainPage # 主渲染进程
        │      ├─common
        │      ├─components
        │      ├─router
        │      └─views
        │          └─download
        └─store
            └─modules
```

## 其他

::: tip 提示
项目更多细节请点击每一个文件进行查看
:::
