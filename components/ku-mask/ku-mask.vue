<template>
	<ku-transition
		:show="show"
		mode="fade"
		:duration="duration"
		:custom-style="maskStyle"
		@click="clickMask"
	>
		<slot />
	</ku-transition>
</template>

<script lang="ts">
import props from './props';
import events from './events';
export default {
	mixins: [props,events],
	computed: {
		maskStyle() {
			const style = {
				position: 'fixed',
				zIndex: this.zIndex,
				left: 0,
				top: 0,
				right: 0,
				bottom: 0,
				background: `rgba(0,0,0,${this.opacity})`,
				...this.customStyle
			};
			return style;
		}
	},
	methods: {
		/**
		 * 点击
		 */
		clickMask() {
			this.$emit("click");
			if(this.clickClose) this.$emit("update:show",false);
		}
	}
};
</script>

<style scoped lang="scss">
	@import "../../core/css/components.scss";
	$ku-mask-background-color:rgba(0,0,0,0.4) !default;
	.kuMask{
		position: fixed;
		@include zIndex;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: $ku-mask-background-color;
	}
</style>
