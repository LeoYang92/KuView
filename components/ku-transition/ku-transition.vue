<template>
	<view 
		v-if="show"
		class="kuTransition kuComponents"
		:class="{
			'kuTransition__fadeHide': mode == 'fade' && !start,
			'kuTransition__fadeShow': mode == 'fade' && start
		}"
	>
		<slot />
	</view>
</template>

<script lang="ts">
import props from './props';
export default {
	data() {
		return {
			// 是否显示组件
			show: false as boolean,
			// 是否启动动画
			start: false as boolean
		};
	},
	mixins: [props],
	methods: {
		open() {
			this.show = true;
			setTimeout(() => {
				this.start = true;
			},100);
		},
		close() {
			this.start = false;
			setTimeout(() => {
				this.show = false;
			},300);
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "../../core/css/components.scss";
	$ku-transition-transition:.3s !default;
	.kuTransition{
		transition-duration: $ku-transition-transition;
		transition-timing-function: ease-in;
		&__fadeHide {
			transition-property: opacity;
			opacity: 0;
		}
		&__fadeShow{
			transition-property: opacity;
			opacity: 1;
		}
	}
</style>