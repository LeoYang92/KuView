# Icon 图标组件
| App(vue) | App(nvue) | H5 | 小程序 |
|:-------:|:---------:|:---------:|:---------:|
| √   | √   | √   | 微信 |

## 基本使用
通过slot传入内容
```html
<template>
    <ku-icon name="home" color="red" size="35rpx"></ku-icon>
</template>
```

## API
### Props
|参数|说明|类型|默认值|可选值|
|:------|:------|:------|:------|:------|
| name | 图标标识 | String | - | - |
| size | 图标大小 | Number\|String | 35rpx | - |
| color | 图标颜色 | String | default($ku-text-color-base系统默认的文字颜色) | - |
| customStyle | 自定义样式 | Object | - | - |