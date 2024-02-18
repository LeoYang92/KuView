<template>
	<text class="kuIcon" :style="componentStyle">{{icon}}</text>
</template>

<script lang="ts">
import { unitOfSize } from '../../core/utils/utils';
import Icons from './icons';
import props from './props';
export default {
	mixins: [props],
	computed: {
		// 图标
		icon() {
			return Icons[`kicon-${this.name}`] || this.name;
		},
		// 组件样式
		componentStyle() {
			const style = {
				color: this.color,
				fontSize: this.getSize(),
				width: this.getSize(), 
				...this.customStyle
			};
			return style;
		}
	},
	beforeCreate() {
		// #ifdef APP-NVUE
		const domModule = weex.requireModule('dom'); // eslint-disable-line
		domModule.addRule('fontFace', {  
			'fontFamily': 'kiconfont',  
			'src': "url('https://at.alicdn.com/t/c/font_4436107_o2d5csdmt4.ttf')"  
		});
		// #endif
	},
	methods: {
		/**
		 * 返回图标尺寸大小
		 */
		getSize(): string
		{
			let size:number|string = unitOfSize(this.size);
			if(this.size == 'medium') {
				size = '40rpx';
			} else if(this.size == 'min') {
				size = '35rpx';
			} else if(this.size == 'max') { 
				size = '50rpx';
			}
			return size;
		},
		getColor(): string
		{
			let color:string = '';
			return color;
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "../../core/css/components.scss";

	$ku-icon-default: $ku-text-color-base !default;  
	
	
	/* #ifndef APP-NVUE */
	@font-face {
		font-family: 'kiconfont';
		src: url('https://at.alicdn.com/t/c/font_4436107_o2d5csdmt4.ttf') format('truetype');
	}
	/* #endif */
	.kuIcon{
		@include flex(row);
		font-family: kiconfont;
		width: 35rpx;
		font-size: 35rpx;
		color: $ku-icon-default;
	}
</style>