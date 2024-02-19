# Image 图片组件
| App(vue) | App(nvue) | H5 | 小程序 |
|:-------:|:---------:|:---------:|:---------:|
| √   | √   | √   | 微信 |

## 基本使用
通过slot传入内容
```html
<template>
    等等添加
</template>
```

## API
### Props
|参数|说明|类型|默认值|可选值|
|:------|:------|:------|:------|:------|
| fade | 是否使用淡入效果 | Boolean | true | false |
| duration | 配合fade使用，淡入动画执行时长（单位：ms） | Number\|String | 400 | - |
| radius | 图片圆角像素 | Number\|String | 0 | - |
| circle | 是否为圆形图片 | Boolean | false | true |
| width | 图片宽度 | Number|String | 100px | - |
| height | 图片高度 | Number|String | 100px | - |
| src | 图片地址 | String | - | - |
| mode | 图片裁剪、缩放的模式 | String | scaleToFill | [其他可选值](https://uniapp.dcloud.net.cn/component/image.html#mode-%E6%9C%89%E6%95%88%E5%80%BC) |
| lazyLoad | 是否开启懒加载，仅支持	微信小程序、百度小程序、抖音小程序、飞书小程序 | Boolean | false | true |
| webp | 在系统不支持webp的情况下是否单独启用webp，只支持网络资源。仅支持微信小程序 | Boolean | false | true |
| showMenuByLongpress | 开启长按图片显示识别小程序码菜单,仅支持微信小程序 | Boolean | false | true |
| draggable | 是否支持拖拽图片，仅仅支持H5 3.1.1+、App（iOS15+）| Boolean | true | false |
| laadingBgColor | 图片加载时的背景颜色 | String | $ku-bg-color-grey:#f8f8f8 | 其他css颜色值 |
| customStyle | 自定义样式 | Object | - | - |
| @click | 点击图片触发 | HandleEvent | - | - |
| @load | 图片加载成功触发，event.detail = {height:'图片高度px', width:'图片宽度px'} | HandleEvent | - | - |
| @error | 图片加载失败触发，event.detail = {errMsg: 'something wrong'} | HandleEvent | - | - |