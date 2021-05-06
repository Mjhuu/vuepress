## (纬领官网后台web)快速上手

::: warning 注意
- 本项目采用的技术栈是 `vue3.x`、`vuex`、`vue-router`、`ant-design-vue`、`axios`
- 请确保你的 Node.js 版本 >= 8。
:::

### 项目启动

```shell script
# 进入目录
cd E:\weblinkon\back\weblinkon_admin_bac

# 启动项目
yarn dev

# 项目打包
yarn build
```
## 目录结构

```shell script
.
├─public # 静态资源
│  └─other # 三方依赖库
└─src
    ├─api # axios请求Api
    ├─assets # 存放资源
    ├─common
    │  ├─images # 公共图片
    │  └─js # 公共js
    ├─components
    │  ├─Editor # 编辑器组件
    │  └─upload # 上传组件
    ├─config # 缓存相关
    ├─data # 常用数据
    ├─enum # 枚举相关
    ├─hooks # 相关hooks
    │  ├─useAbout
    │  ├─useAdmin
    │  ├─useCompanyInfo
    │  ├─useEditor
    │  ├─useLeaveMsg
    │  ├─useLog
    │  ├─useNews
    │  ├─useNewsEditor
    │  ├─useProduct
    │  ├─useQualification
    │  ├─useRecruitment
    │  └─useSlider
    ├─interface # 接口相关
    ├─router # 路由配置
    ├─store # vuex
    └─views # 界面相关
        ├─404
        ├─About
        ├─CompanyInfo
        ├─LeaveMsg
        ├─Log
        ├─Login
        ├─News
        ├─Product
        ├─Qualification
        ├─Recruitment
        ├─Slider
        └─Teamwork
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

::: tip 提示
请参考 [地推系统调用api](/house/web/#调用api)
:::

## 其他

::: tip 提示
项目更多细节请点击每一个文件进行查看
:::
