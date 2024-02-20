<template>
	<view class="kuText" :style="componentStyle">
		<text class="kuText__text" :style="textStyle">{{ text }}</text>
	</view>
</template>

<script lang="ts">
	import props from './props';
	import { unitOfSize } from '../../core/utils/utils';
	import Theme from '../../theme';
	export default {
		mixins: [props],
		computed: {
			// 组件样式
			componentStyle() {
				const style = {
					...this.customStyle
				};
				return style;
			},
			// 文字样式
			textStyle() {
				return {
					color: this.color,
					fontSize: this.getSize(),
					textAlign: this.align
				}
			}
		},
		methods: {
			/**
			 * 获取文字大小
			 */
			getSize() {
				let size:string|number = this.size;
				if(this.size === 'normal') {
					size = Theme.fontSizeBase;
				} else if(this.size === 'sm') {
					size = Theme.fontSizeSm;
				} else if(this.size === 'lg') {
					size = Theme.fontSizeLg;
				}
				return unitOfSize(size);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../core/css/components.scss";
	$ku-font-size:$ku-font-size-base !default;
	$ku-font-color:$ku-text-color-base !default;
	$ku-text-align: left;
	.kuText{
		@include flex;
		&__text{
			color: $ku-font-color;
			font-size: $ku-font-size;
			text-align: $ku-text-align;
		}
	}
</style>