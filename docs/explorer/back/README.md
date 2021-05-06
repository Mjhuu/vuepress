## (区块链浏览器back)快速上手

::: warning 注意
- 本项目采用的技术栈是 `egg`
- 请确保你的 Node.js 版本 >= 8。
:::

### 项目启动

```shell script
# 进入目录
cd E:\区块链项目\serve

# 本地测试
npm run dev

# 发布线上
npm run start
```
## 目录结构

```shell script
.
├─app
│  ├─controller # 用于解析用户的输入，处理后返回相应的结果
│  ├─data # 静态数据
│  ├─middleware # 中间件
│  ├─model # 数据库模型
│  ├─myFun # 自定义方法
│  ├─public # 静态资源
│  │  ├─chain # 区块链安全静态文件--展示页
│  │  ├─css
│  │  ├─explorer # 打包好后的区块链浏览器文件夹
│  │  │  ├─css
│  │  │  ├─img
│  │  │  ├─js
│  │  │  └─other
│  │  ├─explorer_mobile # 区块链浏览器手机端
│  │  │  ├─css
│  │  │  ├─images
│  │  │  └─js
│  │  ├─img
│  │  ├─js
│  │  └─other
│  ├─schedule # 定时器文件
│  ├─service # 用于编写业务逻辑层
│  └─view # 相关渲染的html模板
├─config # 相关egg配置
├─logs # 本地日志目录
│  └─serve
└─test # 单元测试
   └─app
       └─controller
```

## 链接MongoDb
`config/config.default.js`
```js
  config.mongoose = {
      url: mongodb_url,
      options: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      },
  };
```
## 链接Redis
`config/config.default.js`
```js
  config.redis = {
      client: {
        port: redis_port, // Redis port
        host: redis_url, // Redis host
        password: 'itnihao',
        db: 0,
      },
  };
```
## 其他

::: tip 提示
- 其他配置请参考 [纬领工作平台-后端文档-midway配置](/job/back/#白名单)
- 项目更多细节请点击每一个文件进行查看
:::
