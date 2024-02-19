<template>
	<ku-transition
		:mode="fade ? 'fade' : ''"
		:show="transition_show"
		:duration="duration"
	>
		<view class="kuImage" :style="componentStyle" @click="triggerClick">
			<image 
				v-if="status !== -1"
				class="kuImage__image" 
				:style="imageStyle" 
				src="../../../../static/logo.png"
				:lazy-load="lazyLoad"
				:webp="webp"
				:mode="mode"
				:show-menu-by-longpress="showMenuByLongpress"
				:draggable="draggable"
				@load="load"
				@error="error"
			/>
			<slot name="loading">
				<ku-icon v-if="status === 0" name="photo" :size="iconSize" :color="icon_color" />
			</slot>
			<slot name="loading">
				<ku-icon v-if="status === -1" name="broken-image" :size="iconSize" :color="icon_color" />
			</slot>
		</view>
	</ku-transition>
</template>

<script lang="ts"> 
import props from './props';
import events from './events';
import { unitOfSize,splitSize } from '../../core/utils/utils';
import Theme from '../../theme';
export default {
	name: 'ku-image',
	data() {
		return {
			// 过度动画显示状态
			transition_show: false as boolean,
			// 图标颜色
			icon_color: Theme.textColorGrey,
			// 图片状态 0 = 加载中，1=加载成功 -1=加载失败
			status: 0
		};
	},
	mixins: [props,events],
	computed: {
		/**
		 * 未加载默认图标，size = (图片宽度OR图片高度)/2,宽度和高度哪个小，则使用哪个相除
		 * 为啥这么复杂？
		 * 开发者可能会传递不同的宽高单位px和rpx，需要先将单位全部转为px
		 */
		iconSize() {
			let [width_value,width_unit] = splitSize(unitOfSize(this.width));
			let [height_value,height_unit] = splitSize(unitOfSize(this.height)); 
			if(width_unit === 'rpx'){
				width_value = uni.upx2px(width_value);	// eslint-disable-line
			} 
			if(height_unit === 'rpx') {
				height_value = uni.upx2px(height_value);	// eslint-disable-line
			}
			return (width_value <= height_value ? width_value / 2 : height_value / 2) + 'px';
		},
		// 组件样式
		componentStyle() {
			const style = {
				...this.customStyle,
				width: unitOfSize(this.width),
				height: unitOfSize(this.height),
				backgroundColor: this.status !== 1 ? this.laadingBgColor : 'transparent',
				borderRadius: this.circle ? '1000000000px' : unitOfSize(this.radius)
			};
			return style;
		},
		// 图片样式
		imageStyle() {
			return {
				width: unitOfSize(this.width),
				height: unitOfSize(this.height),
				borderRadius: this.circle ? '1000000000px' : unitOfSize(this.radius)
			};
		}
	},
	mounted() {
		setTimeout(() => {
			this.transition_show = true;
		},10);
	},
	methods: {
		/**
		 * 图片加载完成
		 */
		load(res:object) {
			this.status = 1;
			this.$emit("load",res);
		},
		/**
		 * 图片加载失败
		 */
		error(res:object) {
			this.status = -1;
			this.$emit("error",res);
		},
		/**
		 * 点击图片
		 */
		triggerClick() {
			this.$emit("click");
		}
	}
};
</script>

<style scoped lang="scss">
	@import "../../core/css/components.scss";
	$ku-image-bg-color: $ku-bg-color-grey !default;
	.kuImage{
		@include flex(row);
		align-items: center;
		justify-content: center;
		background-color: $ku-image-bg-color;
		&__image{
			@include flex(row);
			flex: 1;
			/* #ifndef APP-NVUE */
			box-sizing: border-box;
			/* #endif */
		}
	}
</style>