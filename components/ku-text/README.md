## Text 文本
| App(vue) | App(nvue) | H5 | 小程序 |
|:-------:|:---------:|:---------:|:---------:|
| √   | √   | √   | 微信 |

## 基本使用
```html
<template>
    <ku-text text="文本内容"></ku-text>
</template>
```


## API
### Props
|参数|说明|类型|默认值|可选值|
|:------|:------|:------|:------|:------|
| text | 文本内容 | String | - | - |
| color | 文字颜色 | String | $ku-text-color-base(#333) | - |
| size | 文字大小 | Number\|String | normal | sm、lg、其他css尺寸 |
| align | 文字对齐方式 | String | left | center、right |
| customStyle | 自定义样式 | Object | - | - |