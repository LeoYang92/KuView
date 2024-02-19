# Picker 选择器
| App(vue) | App(nvue) | H5 | 小程序 |
|:-------:|:---------:|:---------:|:---------:|
| √   | √   | √   | 微信 |


## API
|参数|说明|类型|默认值|可选值|
|:------|:------|:------|:------|:------|
| show | 是否显示组件v-model:show双向绑定 | Boolean | false | true |
| mode | 选择器类型 | String | 'selector' |  [selector普通选择器](#mode=selector普通选择器) |
| title | 组件标题 | String | '' | - |
| itemHeight | 选项高度，组件总高度=itemHeight*visibleItemNum | Number\|String | 50 | - |
| visibleItemNum | 可见选项数量，组件总高度=itemHeight*visibleItemNum | Number\|String | 5 | - |
| clickMakeClose | 点击遮罩层是否关闭 | Boolean | true | false |
| textKey | 如果columns是Array\<object\>类型,选择器显示文字的键值 | String | 'text' | - |
| valueKey | 如果columns是Array\<object\>类型,选择器value值的键值 | String | 'value' | - |
| borderRadius | 左上、右上、边框圆角 | Number\|String | 0 | - |
| @cancel | 点击取消 | EventHandle | - | - |
| @close | 关闭触发 | EventHandle | - | - |



### mode=selector普通选择器
#### 基本使用
```html
<template>
	<view class="picker">
		
		<view 
			class="picker__item" 
			@click="show = true"
		>
			普通选择器，选择的值：{{ value >=0 ?  columns[value] : '未选择'}}
		</view>
		
		<ku-picker 
			v-model:show="show"
			v-model:value="value"
			:click-make-close="true"
			title="请选择"
			:columns="columns" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: true,
			columns: ["第一","第二","第三","第四","第五"],
			value: -1
		}
	}
}
</script>

<style scoped lang="scss">
	@import "@/uni_modules/ku-view/core/css/mixins.scss";
	.picker{
		padding: 20rpx 30rpx;
		@include borderBox;
		&__item{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80rpx;
			border-radius: 40rpx;
			box-shadow: 0rpx 0rpx 13rpx rgba(0,0,0,.4);
			background-color: #FFFFFF;
		}
	}
</style>
```
|参数|说明|类型|默认值|可选值|
|:------|:------|:------|:------|:------|
| columns | 选择器数据 | Array | [] | - |
| value | 默认选择的数据下标或者value值,v-model:value双向绑定 | Number\|String| 0 | - |
| text | 默认显示文本信息,v-model:text双向绑定 | Number\|String| 0 | - |
| @confirm | 确认,回调参数({index,value}) => {index,value} | EventHandle | - | - |
| @change | 切换选择值({index,value}) => {index,value} | EventHandle | - | - |