<template>
	<text class="kuIcon" :style="componentStyle">{{icon}}</text>
</template>

<script lang="ts">
import { unitOfSize } from '../../core/utils/utils';
import Theme from '../../theme';
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
				color: this.getColor(),
				fontSize: this.getSize(),
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
			'src': "url('https://at.alicdn.com/t/c/font_4437026_c93vw23gbw4.ttf')"  
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
		/**
		 * 获取图标颜色
		 */
		getColor(): string
		{
			let color:string = Theme.textColorBase;
			switch(this.color) {
			case 'primary':
				color = Theme.colorPrimary;
				break;
			case 'success':
				color = Theme.colorSuccess;
				break;
			case 'warning':
				color = Theme.colorWarning;
				break;
			case 'error':
				color = Theme.colorError;
				break;
			default:
				color = this.color;
			}
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
	  font-family: kiconfont;  /* Project id 4437026 */
	  src: url('https://at.alicdn.com/t/c/font_4437026_c93vw23gbw4.ttf') format('truetype');
	}
	/* #endif */
	.kuIcon{
		@include flex(row);
		font-family: kiconfont;
		font-size: 35rpx;
		color: $ku-icon-default;
	}
</style>