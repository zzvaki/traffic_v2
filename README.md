# 永修大交管 第二版

## 项目 SVN 地址

```
# 此项目的版本控制工具：中州科技外网SVN
# 联系项目经理获得账号密码

https://jszzkj.cn:8666/svn/MyRepository/traffic_v2/frontend/traffic-v2
```

## 一些命令

此项目使用 yarn 作为库管理工具，确认系统中已安装 yarn，安装教程点击本文末尾链接。

```
# 部署项目
yarn

# 启用开发环境服务
yarn serve

# 构建项目
yarn build


# 项目构建之后，把dist内的文件复制并覆盖到中州科技服务器上tomcat内对应的文件夹下即可，如何登录服务器请联系项目经理。

# 服务器上的项目地址
E:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\jxtraffics

# 服务器上的外网测试项目地址
E:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\jxtraffics-test

```

## 文件目录

```javascript
traffic-v2          // 根目录
├──dist             // build构建目录
├──public           // 静态文件
|   ├──img          // 图片
|   ├──pdfjs        // 前端显示pdf插件
|   ├──upload       // 前端用到的一些文件
|   ├──favicon.ico  // 网站图标
|   └──index.html   // 入口文件
├──README.md        // 项目说明文档
└──src              // 业务文件
    ├──api          // 所有数据请求，对应的js文件
    ├──assets       // 静态文件（这里的代码会被解析压缩）
    ├──components   // 自定义组件
    ├──utils        // 公用组件
    |   └──request.js   // 前端请求拦截器，重要
    ├──views        // 页面组件
    |   ├──Abnormal     // 异常驾驶人、异常车辆
    |   ├──Accident     // 事故信息、事故倒查
    |   ├──Discipline   // 联合惩戒
    |   ├──Entry        // 工作信息录入
    |   ├──Examination  // 安全生产检查
    |   ├──Information  // 重点企业、车辆、驾驶人及道路信息，会议记录
    |   ├──NoticeToday  // 今日更新
    |   ├──Notification // 通知通报
    |   ├──Persuasion   // 交通安全宣传、劝导
    |   ├──PhoneBook    // 电话簿
    |   ├──Roadhazard   // 道路隐患
    |   ├──Statistics   // 工作统计、工作评分
    |   ├──Version      // 版本信息
    |   ├──Home.vue     // 首页
    |   └──Login.vue    // 登录页
    ├──App.vue          // app总组件
    ├──main.js          // 入口文件
    └──router.js        // 前端页面路由
```

## 项目涉及技术栈，点超链接查看教程

- JS ES5 [教程](https://wangdoc.com/javascript/)
- JS ES6 新语法 [教程](http://es6.ruanyifeng.com/#README)

```javascript
// 箭头函数
() => {};

// Promise 异步操作
new Promise.then(res => {}, err => {});

// 解构赋值
const response = {
  code: "SUCCESS",
  count: null,
  data: null,
  msg: "未查询到相关数据"
};
const { code, msg } = response;

// 扩展运算符
const obj = { a: "a", b: "b" };
const aaa = { ...obj };
```

- [vue.js](https://cn.vuejs.org/v2/guide/) vue.js 起步
- [vue-router](https://router.vuejs.org/zh/) 前端路由
- [wx-js-sdk](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115) 微信浏览器接口
- [apis.map.qq.com](https://lbs.qq.com/webservice_v1/guide-gcoder.html) 腾讯地图接口，逆地址解析(坐标位置描述)
- [vue-cli](https://cli.vuejs.org/zh/guide/) vue 项目快速构建工具
- [npm](https://www.npmjs.cn/) [yarn](https://yarnpkg.com/zh-Hans/docs/getting-started) 组件库管理工具，本项目使用 yarn
- [muse-ui](https://muse-ui.org/#/zh-CN/installation) UI 组件
- [element-ui](https://element.eleme.cn/#/zh-CN/component/installation) UI 组件
- [VueSignaturePad](https://github.com/szimek/signature_pad) 签名板组件
- [Less](http://lesscss.org/) CSS 预渲染器
