## (区块链浏览器web)快速上手

::: warning 注意
- 本项目采用的技术栈是 `vue`、`vue-router`、`vuex`、`axios`、`ant-design-vue`
- 请确保你的 Node.js 版本 >= 8。
:::

### 项目启动

```shell script
# 进入目录
cd E:\区块链项目\explorer

# 启动项目
npm run serve

# 项目打包
npm run build
```
## 目录结构

```shell script
.
├─dist # 项目打包生成的文件夹
│  ├─css
│  ├─img
│  ├─js
│  └─other
├─public # 静态资源
│  └─other
└─src
    ├─api # axios请求Api
    ├─common # 公共文件
    │  ├─images
    │  └─js
    ├─components # 非路由组件
    │  └─Header
    ├─config # 全局配置
    ├─router # 路由
    ├─store # vuex
    └─views
        ├─address # 区块地址信息
        ├─block # 区块信息
        ├─charts
        ├─error
        ├─home # 首页
        └─transactionInfo # 交易信息
```
## 网络请求

### 使用web3获取数据

```vue
<script >
import Web3 from 'web3';
import {BASE_URL} from "../../config";
export default {
    data: () => ({
      web3: null
    }),
    mounted() {
      this.initWeb3();
    },
    methods: {
        // 初始化
        initWeb3() {
          this.web3 = new Web3();
          this.web3.setProvider(new this.web3.providers.HttpProvider(BASE_URL));
          this.render();
        },
        // 之后便可以通过   this.web3.eth.xxx  进行对应数据的获取
    }
}

</script>
```

### 路径

::: tip 提示
请参考 [地推系统网络请求](/house/web/#网络请求)
:::

### 异步请求方式

::: tip 提示
请参考 [地推系统异步请求方式](/house/web/#异步请求方式)
:::

### 调用api

::: tip 提示
请参考 [地推系统调用api](/house/web/#调用api)
:::

## 其他

::: tip 提示
项目更多细节请点击每一个文件进行查看
:::
