## (工作平台back)快速上手

::: warning 注意
- 本项目采用的技术栈是 `midway`、`ts`
- 请确保你的 Node.js 版本 >= 8。
:::

### 项目启动

```shell script
# 进入目录
cd E:\纬领工作平台\serve

# 本地测试
npm run dev

# 发布线上 ！切记每次更改代码需要重新部署线上时，务必执行此操作！
npm run clean # 清除以前缓存
npm run ci # 生成覆盖率命令
npm run build # 将ts打包成js版本的egg
npm run start # 启动打包后的egg服务器
```
## 目录结构

```shell script
.
├─coverage # 覆盖率文件
├─dist # 打包后的文件夹【将来执行 npm run start 时，执行的文件夹】
├─logs # 本地日志目录
│  └─serve
├─src # 源码目录
│  ├─app # web 层目录
│  │  ├─controller # web 层 controller 目录
│  │  ├─jwt # 相关jwt类
│  │  ├─middleware # web 层中间件目录
│  │  ├─model # 数据库模型
│  │  ├─pem # 公钥私钥
│  │  ├─public # web 层静态文件目录，可以配置
│  │  │  ├─css # react打包后的文件
│  │  │  ├─other # react打包后的文件
│  │  │  ├─static # react打包后的文件
│  │  │  │  ├─css
│  │  │  │  └─js
│  │  │  └─upload
│  │  │      └─1c4ecfbc3e4f48c3ac22cf17f4f30d3e # 上传文件的用户ID
│  │  └─view # 相关渲染的html模板
│  ├─config # 相关midway配置
│  ├─service # 业务逻辑层目录，自由定义
│  └─interface.ts # 接口定义文件，自由定义
└─test # 单元测试
    └─app
        └─controller
```
## 白名单
`src/config/config.default.ts`
```ts
  config.security = {
    csrf: {
      enable: false,
    },
    // 白名单
    domainWhiteList: ['http://192.168.0.105:3000', 'http://chain.weblinkon.com:7003', 'http://192.168.0.79:7003']
  };
```

## 数据库连接
`src/config/config.default.ts`
```ts
  config.sequelize = {
    dialect: 'mysql',
    host: '192.168.0.79',
    port: 3306,
    username: 'root',
    password: 'itnihao',
    database: 'work',
    timezone: '+08:00', // 东八时区
    logging: false, // 不打印SQL日志
    define: {
      timestamps: true,
      createdAt: 'createdAt',  // 自定义时间戳
      updatedAt: 'updatedAt', // 自定义时间戳
    },
  };
```
## 静态文件访问路径
`src/config/config.default.ts`
```ts
  config.static = {
    prefix: '/', // public下文件访问时的路径
  };
```
## 上传文件类型
`src/config/config.default.ts`
```ts
  config.multipart = {
    fileSize: '200mb', // 默认大小为10Mb
    // 允许上传的文件类型
    fileExtensions: [ '.pdf', '.doc', '.docx', '.xlsx', '.xls', '.txt', '.ppt', '.pptx' ]
  };
```
## 项目IP及端口号配置
`src/config/config.default.ts`
```ts
  config.cluster = {
    listen: {
      path: '',
      port: 7003, // 端口号
      hostname: '0.0.0.0', // ip
    }
  };
```
## 其他

::: tip 提示
项目更多细节请点击每一个文件进行查看
:::
