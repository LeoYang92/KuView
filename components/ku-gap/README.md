# Gap 间隔块
| App(vue) | App(nvue) | H5 | 小程序 |
|:-------:|:---------:|:---------:|:---------:|
| √   | √   | √   | 微信 |

## 基本使用
``` html
<template>
	<ku-gap width="750rpx" height="10rpx" bg-color="#ffffff"></ku-gap>
</template>
```

## API
### Props
|参数|说明|类型|默认值|可选值|
|:------|:------|:------|:------|:------|
| width | 间隔块宽度 | Number\|String | 默认宽度继承父级元素 | [尺寸单位传值说明](#width、height尺寸说明) |
| height | 间隔块高度 | Number\|String | 10 | [尺寸单位传值说明](#width、height尺寸说明) |
| bgColor | 背景颜色 | String | transparent | css颜色值 |
| customStyle | 自定义样式 | Object | - | - |

#### width、height尺寸说明
可传值Number或者Number + 尺寸单位
- 传值Number 100 = 组件实际尺寸100px
- 传值String '100' = 组件实际尺寸100px
- 传值String '100px' = 组件实际尺寸100px
- 传值String '100rpx' = 组件实际尺寸100rpx