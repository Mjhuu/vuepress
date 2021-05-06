## (云盘web)快速上手

::: warning 注意
- 本项目采用的技术栈是 `react`、`react-redux`、`react-router-dom`、`redux`、`redux-saga`、`axios`、`antd`、`socket.io-client`、`node-rsa`、`aes`
- 请确保你的 Node.js 版本 >= 8。
:::

### 项目启动

```shell script
# 进入目录
cd E:\最新版react云盘（用于重构）

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
    ├─Api # 请求接口
    ├─Common
    │  ├─css
    │  ├─images
    │  └─js
    ├─Components # 组件
    ├─Config
    ├─CSSVar # 公共css变量
    ├─Data
    ├─Decorate # 装饰器
    ├─Demo # 表格模板
    ├─Pages # 界面
    ├─Store # redux
    ├─UpdateTheme # 更换主题
    ├─Utils
    └─webWorker # 多线程
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
redux 
详情请查看 `src/store/reducer.js`
:::

## 其他

::: tip 提示
项目更多细节请点击每一个文件进行查看
:::
