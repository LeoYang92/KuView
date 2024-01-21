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
			mode="slide-up"
			:duration="duration"
			:custom-style="transitionStyle"
			@beforeEnter="$emit('beforOpen')"
			@afterEnter="$emit('afterOpen')"
			@beforeLeave="$emit('beforClose')"
			@afterLeave="$emit('afterClose')"
		>
			<slot />
			<ku-safe-area 
				v-if="safeAreaBottom"
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
			const style = {
				position:'fixed',
				zIndex: this.zIndex
			};
			switch(this.type) 
			{
			case 'bottom':
				style.bottom = 0;
				style.left = 0;
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
		}
	}
};
</script>

<style scoped lang="scss">
	@import "../../core/css/components.scss";
</style>