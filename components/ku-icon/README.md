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
| size | 图标大小 | Number\|String | medium | min、max、其他尺寸） |
| color | 图标颜色 | String | normal | primary、success、warning、error、其他十六进制颜色和命名颜色 |
| customStyle | 自定义样式 | Object | - | - |