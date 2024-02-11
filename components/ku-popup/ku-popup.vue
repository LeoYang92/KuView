<template>
	<view class="popup">
		<ku-mask 
			:show="show"
			:duration="duration"
			:customStyle="maskStyle"
			:opacity="maskOpacity"
			@click="maskClick" />
		<ku-transition
			:show="show"
			:mode="transition_mode"
			:duration="duration"
			:custom-style="transitionStyle"
			@beforeEnter="$emit('beforOpen')"
			@afterEnter="$emit('afterOpen')"
			@beforeLeave="$emit('beforClose')"
			@afterLeave="$emit('afterClose')"
			@click="clickTransition"
		>
			<ku-safe-area
				v-if="safeAreaTop && type != 'center'"
				:bg-color="safeAreaTopBg"
				position="top"
			/>
			<slot />
			<ku-safe-area 
				v-if="safeAreaBottom && type != 'center'"
				:bg-color="safeAreaBottomBg"
				position="bottom" 
			/>
		</ku-transition>
	</view>
</template>

<script>
import props from './props';
import events from './events';
export default {
	data() {
		return {
			/**
			 * 动画mode类型，与弹层方式type关联
			 * type = bottom && mode = slide-up
			 * type = center && mode = fade-scale
			 */
			transition_mode: ''
		}
	},
	mixins: [props,events],
	computed: {
		transitionStyle() {
			return this.setTransitionStyle();
		}
	},
	methods: {
		/**
		 * 设置弹窗style样式
		 */
		setTransitionStyle() {
			const baseStyle = {
				position:'fixed',
				zIndex: this.zIndex
			};
			let style = {};
			switch(this.type) 
			{
			case 'center':
				this.transition_mode = 'fade-scale';
				style = {
					// #ifndef APP-NVUE
					display:'flex',
					flexDirection: 'row',
					// #endif
					...baseStyle,
					alignItems: 'center',
					justifyContent: 'center',
					left:0,
					right:0,
					top:0,
					bottom:0
				};
				
			break;
			case 'bottom':
				this.transition_mode = 'slide-up';
				style = {
					...baseStyle,
					bottom: 0,
					left: 0
				};
				break;
			case 'top':
				this.transition_mode = 'slide-down';
				style = {
					...baseStyle,
					top:0,
					left:0
				};
				break;	
			}
			return style;
		},
		/**
		 * 点击遮罩层
		 */
		maskClick() {
			if(this.clickMakeClose) {
				this.$emit("update:show",false);
				this.$emit("maskClose");
			}
		},
		/**
		 * 因为type=center时需要使用left,right,top,bottom都等于0撑开transition区域
		 * 造成遮挡遮罩层，所有为transition组件添加点击事件，关联maskClick实现点击遮罩层关闭
		 */
		clickTransition() {
			if(this.type == 'center') {
				this.maskClick();
			}
		}
	}
};
</script>

<style scoped lang="scss">
	@import "../../core/css/components.scss";
	.popup{
		@include flex(row)
	}
</style>