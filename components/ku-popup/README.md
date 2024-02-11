# Popup 弹出层
| App(vue) | App(nvue) | H5 | 小程序 |
|:-------:|:---------:|:---------:|:---------:|
| √   | √   | √   | 微信 |

## 基本使用
```html
<template>
	<view 
		class="popup__item" 
		@click="showPopup"
	>
		显示弹窗
	</view>

	<ku-popup 
		v-model:show="show"
		type="bottom"
	>
		弹窗内容
	</ku-popup>
</template>

<script lang="ts">
	export default {
		data() {
			return {
				show: false as boolean
			}
		},
		methods: {
			showPopup() {
				this.show = true
			}
		}
	}
</script>
```

## API
### Props
|参数|说明|类型|默认值|可选值|
|:------|:------|:------|:------|:------|
| show | 是否显示弹层，v-model:show双向绑定 | Boolean | false | true |
| type | 弹出方式 | String | 'center' | [可选值列表](#type可选值) |
| zIndex | 定位层级 | String\|Number | 1000 | - |
| duration | 弹出动画时长，单位ms | String\|Number | 100 | - |
| clickMaskClose | 点击遮罩层是否关闭 | Boolean | true | false |
| safeAreaBottom | 是否适配底部安全区域（注意：type值为left和right时，该属性也有效，如不需要手动设置为false） | Boolean | true | false |
| safeAreaBottomBg | 底部适配区域的背景颜色 | String | 'transparent' | css颜色值 |
| safeAreaTop | 是否适配顶部状态栏高度（注意：type值为left和right时，该属性也有效，如不需要手动设置为false） | Boolean | true | false |
| safeAreaTopBg | 顶部状态栏区域背景颜色 | String | 'transparent' | css颜色值 |
| maskOpacity | 遮罩层透明度 | String\Number | 0.4 | 0-1 |
| maskStyle | 遮罩层样式 | Object | - | - |
| customStyle | 自定义样式 | Object | - | - |

#### type可选值
- center 默认，居中弹窗 （完成）
- bottom 底部弹出 （完成）
- top 顶部弹出	（完成）
- left 左边弹出	（开发中）
- right 右边弹出	（开发中）


### Events
| 事件名 | 说明 | 回调参数 |
|:------ |:------|:------|
| beforOpen | 弹层打开前触发 | - |
| afterOpen | 弹层打开后触发 | - |
| beforClose| 弹层关闭前触发 | - |
| afterClose| 弹层关闭后触发 | - |
