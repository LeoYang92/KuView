# HaderHandle 组件顶部操作
| App(vue) | App(nvue) | H5 | 小程序 |
|:-------:|:---------:|:---------:|:---------:|
| √   | √   | √   | 微信 |

## 基本使用
``` html

```

## API
### Props
|参数|说明|类型|默认值|可选值|
|:------|:------|:------|:------|:------|
| cancelText | 取消文字 | String | '取消' | - |
| cancelColor | 取消文字颜色 | String | '#999999' | css颜色值 |
| title | 标题 | String | '' | - |
| confirmText | 确认文字 | String | '确认' | - |
| confirmColor | 确认文字颜色 | String | '#007aff' | css颜色值 |
| borderRadius | 左上、右上、边框圆角 | Number\|String | 0 | - |
| customStyle | 自定义样式 | Object | - | - |


### Events
| 事件名 | 说明 | 回调参数 |
|:------ |:------|:------|
| cancel | 点击取消按钮 | - |
| confirm | 点击确认按钮 | - |