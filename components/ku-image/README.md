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
| customStyle | 自定义样式 | Object | - | - |