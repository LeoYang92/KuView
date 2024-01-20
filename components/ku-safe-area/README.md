## 安全区域填充
| App(vue) | App(nvue) | H5 | 小程序 |
|:-------:|:---------:|:---------:|:---------:|
| √   | √   | √   | 微信 |

## 基本使用
```html
<template>
    <ku-safe-area bg-color="red" position="bottom"></ku-safe-area>
</template>
```


## API
### Props
|参数|说明|类型|默认值|可选值|
|:------|:------|:------|:------|:------|
| position | 填充的安全区域位置 | String | bottom：底部安全区域 | top：顶部状态栏 |
| bgColor | 背景颜色 | String | transparent | css颜色值 |