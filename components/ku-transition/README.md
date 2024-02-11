# Transition 过渡动画
| App(vue) | App(nvue) | H5 | 小程序 |
|:-------:|:---------:|:---------:|:---------:|
| √   | √   | √   | 微信 |

## 基本使用
通过slot传入内容
```html
<template>
    <ku-transition :show="show" mode="fade">
        <view class="transition"></view>
    </u-transition>
</template>
```

## API
### Props
|参数|说明|类型|默认值|可选值|
|:------|:------|:------|:------|:------|
| show | 是否显示组件 | Boolean | false | true |
| mode | 动画模式 | String | "" | [mode可选值列表](#mode可选值) |
| duration | 动画执行时间，单位ms | Number\|String | 300ms | - |
| delay | 动画延时执行，单位ms | Number\|String | 0 | - |
| timingFunction | 过渡函数 | String | ease-out | [timingFunction可选值列表](#timingFunction可选值) |
| customStyle | 自定义样式 | Object | - | - |


#### mode可选值
- 缺失值，不使用任何动画
- fade 淡入
- fade-up 上滑淡入
- fade-down 下滑淡入
- fade-left 左滑淡入
- fade-right 右滑淡入
- slide-up 上滑显示
- slide-down 下滑显示
- slide-left 左滑显示
- slide-right 右滑显示
- scale 缩放
- fade-scale 缩放淡入

#### timingFunction可选值
- ease-out 默认，过渡快速开始，然后变慢的过渡效果
- ease 过渡逐渐变慢的过渡效果
- ease-in 过渡慢速开始，然后变快的过渡效果
- ease-in-out 过渡慢速开始，然后变快，然后慢速结束的过渡效果
- linear 过渡以匀速变化
- cubic-bezier(x1, y1, x2, y2)  使用三阶贝塞尔函数中自定义 transition 变化过程，函数的参数值必须处于 0 到 1 之间。请自行了解三次贝塞尔


### Events
| 事件名 | 说明 | 回调参数 |
|:------ |:------|:------|
| click | 点击 | - |
| beforeEnter | 动画执行前触发 | - |
| enter | 动画执行中触发 | - |
| afterEnter | 动画执行完成触发 | - |
| beforeLeave | 动画结束前触发 | - |
| leave | 动画结束中触发 | - |
| afterLeave | 动画结束后触发 | - |


### Slot
| 名称 | 说明 |
|:------ |:------|
| default | 默认插槽，在动画区域的内容 |