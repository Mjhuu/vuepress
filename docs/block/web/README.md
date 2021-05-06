## (金联物通web)快速上手

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
    │  └─images
    ├─components # 非路由组件
    │  └─userHeader
    ├─config # 全局配置
    ├─data # 第三方ui组件库所需数据
    ├─router # 路由
    ├─store # vuex
    └─views
        └─user
            ├─addUser # 新增用户
            ├─error
            ├─goodsapply # 认捐
            ├─goodsgive # 捐物
            ├─help # 帮助引导页
            ├─home # 首页
            └─money # 捐款
```
## 网络请求

### 使用web3获取数据

```vue
<script >
export default {
  data: () => ({
    web3Provider: null,
    contracts: {},
    account: '0x0', // 帐户
    web3: null,
  }),
  mounted() {
    this.init();
  },
  methods: {
    // 初始化
    init() {
        return this.initWeb3();
    },
     async initWeb3() {
        if (window.ethereum) {
            this.web3Provider = window.ethereum;
            try {
                await window.ethereum.enable();
            } catch (error) {
                message.error("User denied account access")
            }
        } else {
            message.error("系统检测到您尚未安装MetaMask插件");
            await this.$router.replace('/user/help');
        }

        this.web3 = new Web3(this.web3Provider);
        return this.initContract();
     },
    initContract: function () {
        import("./../../../data/Contribute").then(d => {
            this.contracts.Contribute = TruffleContract(d.Contribute);
            this.contracts.Contribute.setProvider(this.web3Provider);
            return this.render();
        });
    },
    render() {
        let contributeInstance;
        // 获得账号信息
        this.web3.eth.getCoinbase((err, account) => {
            if (err) return message.warning('账号信息获取失败');
            this.account = account;
        });
        // 加载数据 动画
        this.listLoading = true;
        this.contracts.Contribute.deployed().then((instance) => {
            contributeInstance = instance;
            // 可以根据对应获取数量的方法进行调用
            return contributeInstance.totalperson();//总数量,sol里
        }).then(async (personCount) => {
          // ...
        })
    }
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
