<template>
	<view 
		v-if="display"
		class="kuTransition kuComponents"
		:class="{
			'kuTransition__fadeHide': mode == 'fade' && !motion,
			'kuTransition__fadeShow': mode == 'fade' && motion,
			'kuTransition__slideUpHide': mode == 'slide-up' && !motion,
			'kuTransition__slideUpShow': mode == 'slide-up' && motion,
			'kuTransition__fadeUpHide': mode == 'fade-up' && !motion,
			'kuTransition__fadeUpShow': mode == 'fade-up' && motion,
			'kuTransition__slideDownHide': mode == 'slide-down' && !motion,
			'kuTransition__slideDownShow': mode == 'slide-down' && motion,
			'kuTransition__slideScaleHide': mode == 'scale' && !motion,
			'kuTransition__slideScaleShow': mode == 'scale' && motion
		}"
		:style="componentStyle"
		@click="$emit('click')"
	>
		<slot />
	</view>
</template>

<script lang="ts">
import props from './props';
import events from './events';
export default {
	data() {
		return {
			// 是否显示组件
			display: false as boolean,
			// 是否启动动画
			motion: false as boolean,
			// 动画定时器
			transitionTimer: null
		};
	},
	watch: {
		show(value) {
			value ? this.open() : this.close();
		}
	},
	mixins: [props,events],
	computed: {
		// 组件样式
		componentStyle() {
			const style = {
				"transition-duration": `${this.duration}ms`,
				"transition-delay": `${this.delay}ms`,
				"transition-timing-function": this.timingFunction,
				...this.customStyle
			};
			return style;
		}
	},
	mounted() {		
		if(this.show) {
			setTimeout(() => {
				this.open();
			},100)
		}
	},
	methods: {
		open() {
			this.$emit("beforeEnter");
			this.display = true;
			clearTimeout(this.transitionTimer);
			this.$emit("enter");
			this.transitionTimer = setTimeout(() => {
				this.motion = true;
				this.$emit("afterEnter");
			},100);
		},
		close() {
			this.$emit("beforeLeave");
			this.motion = false;
			clearTimeout(this.transitionTimer);
			this.$emit("leave");
			this.transitionTimer = setTimeout(() => {
				this.display = false;
				this.$emit("afterLeave");
			},this.duration); 
		}
	},
	beforeUnmount () {
		clearTimeout(this.transitionTimer);
	}
};
</script>

<style lang="scss" scoped>
	@import "../../core/css/components.scss";
	$ku-transition-duration:.3s !default;
	$ku-transition-timing-function:ease-out	!default;
	$ku-transition-delay:0 !default;
	.kuTransition{
		transition-duration: $ku-transition-duration;
		transition-timing-function: $ku-transition-timing-function;
		transition-delay: $ku-transition-delay;
		/*淡入淡出隐藏*/
		&__fadeHide {
			transition-property: opacity;
			opacity: 0;
		}
		/*淡入淡出显示*/
		&__fadeShow{
			transition-property: opacity;
			opacity: 1;
		}
		/*上划隐藏*/
		&__slideUpHide{
			transition-property: transform;
			transform: translateY(100%);
		}
		/*上划显示*/
		&__slideUpShow{ 
			transition-property: transform;
			transform: translateY(0);
		}
		/*上滑淡入隐藏*/
		&__fadeUpHide{
			transition-property: transform,opacity;
			transform: translateY(100%);
			opacity: 0;
		}
		/*上滑淡入显示*/
		&__fadeUpShow{
			transition-property: transform,opacity;
			transform: translateY(0);
			opacity: 1;
		}
		/*下滑隐藏*/
		&__slideDownHide{
			transition-property: transform;
			transform: translateY(-100%);
		}
		/*下滑显示*/
		&__slideDownShow{ 
			transition-property: transform;
			transform: translateY(0);
		}
		/*缩放隐藏*/
		&__slideScaleHide{
			transition-property: transform;
			transform: scale(0);
		}
		/*缩放显示*/
		&__slideScaleShow{
			transition-property: transform;
			transform: scale(1);
		}
	}
</style>