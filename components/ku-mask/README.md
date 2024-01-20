# Mask 遮罩层
| App(vue) | App(nvue) | H5 | 小程序 |
|:-------:|:---------:|:---------:|:---------:|
| √   | √   | √   | 微信 |

## 基本使用
``` html
<template>
	<ku-mask v-model:show="show" opacity="0.4"></ku-mask>
</template>

<script>
export default {
	data() {
		return {
			show: true
		}
	}
}
</script>
```

## API
### Props
|参数|说明|类型|默认值|可选值|
|:------|:------|:------|:------|:------|
| show | 是否显示，支持双向绑定v-model:show| Boolean | false | true |
| zIndex | 定位层级 | String\|Number| 1000 | - |
| duration | 遮罩层动画显示时长 | String\|Number| 300 | - |
| opacity | 遮罩层透明度 | String\|Number | 0.5 | 0-1 |
| clickClose | 点击遮罩层是否关闭 | Boolean | true | false |
| customStyle | 自定义样式 | Object | - | - |

### Events
| 事件名 | 说明 | 回调参数 |
|:------ |:------|:------|
| click | 点击遮罩层 | - |


### Slot
| 名称 | 说明 |
|:------ |:------|
| default | 默认插槽，在遮罩层上方的内容 |