## (工作平台web)快速上手

::: warning 注意
- 本项目采用的技术栈是 `react`、`react-redux`、`react-router-dom`、`redux`、`redux-saga`、`axios`、`antd`
- 请确保你的 Node.js 版本 >= 8。
:::

### 项目启动

```shell script
# 进入目录
cd E:\纬领工作平台\client

# 启动项目
yarn start

# 项目打包
yarn build
```
## 目录结构

```shell script
.
├─build # 项目打包文件
├─config # webpack打包配置
│  └─jest
├─public # 静态资源
│  ├─css
│  └─other # 三方依赖库
├─scripts # 项目启动配置
└─src
    ├─api # axios请求Api
    ├─common # 公共文件
    │  ├─images
    │  └─js
    ├─components # 非路由组件
    │  ├─AnimatedBook # 翻书效果组件
    │  ├─ColorPicker # 颜色选择器组件
    │  └─Loading # Loading组件
    │      └─css
    ├─config # sessionStorage
    ├─data # 第三方ui库所需数据
    ├─pages # 路由组件
    │  ├─addressList # 通讯录
    │  ├─departmentManage # 部门管理
    │  ├─home # 首页
    │  ├─jobLogging # 工作记录
    │  ├─log # 日志
    │  ├─login # 登录
    │  ├─memo # 备忘录
    │  ├─mine # 个人中心
    │  ├─project # 项目管理
    │  ├─userJobLogging # 员工工作记录
    │  └─userManage # 员工管理
    ├─store # redux相关配置
    └─utils # 项目所需工具类
```
## 网络请求

### 路径

::: tip 提示
请参考 [地推系统网络请求](/house/web/#网络请求)
:::

### 异步请求方式

::: tip 提示
请参考 [地推系统异步请求方式](/house/web/#异步请求方式)
:::

### 调用api

```jsx
import {apiMethodsName} from '@/api';

class XXX extends Component {
    render() {
        // ...
    }
    componentDidMount() {
        apiMethodsName({xxx: 'xxx'}).then().catch();
        // or
        this.apiMethodsName();
    }
    async apiMethodsName(){
      let res = await apiMethodsName({xxx: 'xxx'});
      // other...
    }  
}
```
## redux

::: tip 提示
redux 暂时只用于存储用户信息
详情请查看 `src/store/reducer.js`
:::

## 路由

### 新增路由

```jsx
// src/pages/index.jsx

import LoadAbleComponent from './../utils/LoadAbleComponent';

const Home = LoadAbleComponent(import(/* webpackChunkName: '打包名称' */ '路由组件路径'), true); // true代表组件加载时是否有loading效果

class index extends Component {
    state = {
        navList: [
            {title: '首页', path: '/layout/home'}, // 将需要显示导航的路由添加至此
        ],
    };
    render() {
        // ...
         {/* 中间内容部分 */}
        <section className="middle">
            <Switch>
                 {/* 配置显示路由 */}
                <Route path="/layout/home" component={Home}/>
                 {/* 其他路由 */}
                <Redirect exact form="/layout" to="/layout/home" />
            </Switch>
        </section>
        // ...
    }
}
```

## 其他

::: tip 提示
项目更多细节请点击每一个文件进行查看
:::
