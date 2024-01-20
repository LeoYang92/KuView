<template>
	<view class="popup">
		<ku-mask 
			:show="show"
			:duration="duration"
			@click="maskClick" />
		<ku-transition
			:show="show"
			mode="slide-up"
			:duration="duration"
			:custom-style="transitionStyle"
		>
			<slot />
			
			<ku-safe-area bg-color="red" />
		</ku-transition>
	</view>
</template>

<script>
import props from './props';
export default {
	mixins: [props],
	computed: {
		// 遮罩层显示状态
		maskShow() {
			return this.show;
		},
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
			if(this.clickClose) {
				this.$emit("update:show",false);
			}
		}
	}
};
</script>

<style scoped lang="scss">
	@import "../../core/css/components.scss";
</style>