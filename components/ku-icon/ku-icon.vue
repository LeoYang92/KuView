<template>
	<view class="kuIcon">
		<text class="kuIcon__iconfont">
			{{ icon }}
		</text>
	</view>
</template>

<script lang="ts">
	// #ifdef APP-NVUE
	// const domModule = uni.requireNativePlugin('dom');
	// domModule.addRule('fontFace', {
	// 	'fontFamily': "kiconfont", 
	// 	'src': "url('https://at.alicdn.com/t/c/font_4436107_vkc2vxdpmf.ttf')"
	// });
	const domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', {  
		'fontFamily': "kiconfont",  
		'src': "url('https://at.alicdn.com/t/c/font_4436107_vkc2vxdpmf.ttf')"  
	})  
	// #endif
	import Icons from './icons';
	import props from './props';
	export default {
		mixins: [props],
		computed: {
			// 图标
			icon() {
				return Icons[`kicon-${this.name}`] || this.name
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../core/css/components.scss";
	/* #ifndef APP-NVUE */
	@font-face {
	  font-family: 'kiconfont';
	  src: url('//at.alicdn.com/t/c/font_4436107_vkc2vxdpmf.ttf') format('truetype');
	}
	/* #endif */
	.kuIcon{
		&__iconfont{
			font-family: "kiconfont" !important;
			font-size: 50rpx;
			color: blue;
		}
	}
</style>