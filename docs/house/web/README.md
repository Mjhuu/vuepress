## (地推系统web)快速上手

::: warning 注意
- 本项目采用的技术栈是 `vue`、`vue-router`、`vuex`、`axios`、`ant-design-vue`
- 请确保你的 Node.js 版本 >= 8。
:::

### 项目启动

```shell script
# 进入目录
cd E:\地产市场推广情报系统

# 启动项目
npm run serve

# 项目打包
npm run build
```
## 目录结构

```shell script
.
├─build # 项目打包配置
├─public # 静态资源
│  ├─other # 三方依赖库
│  └─resource
│      └─img
└─src
    ├─api # axios请求Api
    ├─common # 公共文件
    │  ├─images # 公共图片
    │  ├─js # 公共js
    │  └─svg # 公共svg文件
    ├─components # 非路由组件
    │  ├─CenterOverlay # 百度地图中心覆盖物组件
    │  ├─Item # 测试
    │  ├─LongList # 固定高度无线长列表渲染组件
    │  ├─MyOverlay # 百度地图自定义覆盖物组件
    │  ├─NavTitle # 导航标题组件
    │  └─Sider # 侧边栏组件
    ├─config # 全局配置
    ├─data # 第三方ui库所需数据
    ├─plugin # 插件
    ├─router # 路由
    ├─store # vuex
    └─views # 路由组件
        ├─aiDecisionMaking # AI 决策
        │  └─customer # 买家分析
        ├─cityAnalyze # 城市宏观信息
        │  ├─government # 热点新闻
        │  └─macro # 热点词云
        │      └─component
        ├─cityMarket
        │  ├─customerPortraitAnalysis # 客户画像分析
        │  ├─salesAnalysis # 销售情况分析
        │  └─salesFunnelAnalysis # 销售漏斗分析
        ├─error # 404路由
        ├─home # 主控台
        ├─intelligentAgentGuest # 智能探客
        ├─login # 登录
        ├─mine # 个人中心
        └─projectPlanning # 项目策划
            ├─area # 区域位置
            └─market # 周边市场分析
                └─components
```

## 网络请求

### 路径

```shell script
/src/api/ajax.js # 二次封装axios
/src/api/index.js # 请求调用api
```
### 异步请求方式

```javascript
import ajax from "./ajax";
const BASE_URL = 'xxxx://xxxx'

/* GET */
export const apiMethodsName = (data) => ajax(BASE_URL + '/apiPath', data);

/* POST */
export const apiMethodsName = (data) => ajax(BASE_URL + '/apiPath', data, 'post'); // x-www-form-urlencoded
export const apiMethodsName = (data) => ajax(BASE_URL + '/apiPath', data, 'post', 'json'); // application/json
export const apiMethodsName = (data) => ajax(BASE_URL + '/apiPath', data, 'post', 'file'); // application/form-data

/* PUT */
export const apiMethodsName = (data) => ajax(BASE_URL + '/apiPath', data, 'put'); // 用法同post

/* DELETE */
export const apiMethodsName = (data) => ajax(BASE_URL + '/apiPath', data, 'delete'); // 用法同post

```

### 调用api

```vue
<script >
import {apiMethodsName} from '@/api';
export default {
  mounted(){
    apiMethodsName({xxx: 'xxx'}).then().catch();
    // or
    this.apiMethodsName();
  },
  methods: {
    async apiMethodsName(){
      let res = await apiMethodsName({xxx: 'xxx'});
      // other...
    }  
  }
}
</script>
```

## VUEX

### 忽略路由配置

::: tip 解释
`if` 不需要在左侧菜单栏控制路由 `&&` 显示路由界面时不需要再顶部tab标签显示
:::

```js
// /src/store/state.js

export default {
    // 忽略的路由
    ignoreRoute: ['/404', '/login'], // 404界面和login不需要控制
}
```
### 左侧菜单和顶部tab控制显示的路由配置

```js
// /src/store/state.js
/* 具体展现形式 请参考实际界面进行思考 */
export default {
    menuList: [
        {
            name: '宏观资讯',
            icon: 'deployment-unit',
            key: 'cityAnalyze',
            children: [
                {
                    name: '城市宏观信息',
                    icon: '',
                    key: '/cityAnalyze/macro', // 路由地址
                },
                {
                    name: '政府讯息',
                    icon: '',
                    key: 'cityAnalyze/message',
                    children: [
                        {
                            name: '热点新闻',
                            icon: '',
                            key: '/cityAnalyze/government',
                        },
                        {
                            name: '热点词云',
                            icon: '',
                            key: '/cityAnalyze/wordCloud',
                        },
                    ]
                }
            ]
        },
    ]
}
```

### 顶部tab标签控制的路由

```js
// /src/store/state.js

export default {
    menuList: [
        {
            name: '个人中心',
            key: '/mine',
            hidden: true, // 代表着不在左侧菜单栏显示 但是会在顶部tab显示
        }
    ]
}
```

## 自定义左侧菜单Icon(svg)

```js
// /src/store/state.js

export default {
    menuList: [
        {
            name: '智能探客',
            key: '/intelligentAgentGuest',
            isCustom: true, // 开启自定义svg格式Icon
            component: () => import('svgPath'), // svg文件所在目录
        },
    ]
}
```

## 全局异常处理

```js
// /src/plugin/errorPlugin.js

function dealError({type, name, file, message, stack, detail, url}){
    // 自定义全局错误处理
}
// ...

```

## 打包配置

::: tip 提示
详见 `vue.config.js`
:::

