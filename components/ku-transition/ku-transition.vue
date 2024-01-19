<template>
	<view 
		v-if="display"
		class="kuTransition kuComponents"
		:class="{
			'kuTransition__fadeHide': mode == 'fade' && !motion,
			'kuTransition__fadeShow': mode == 'fade' && motion
		}"
		:style="componentStyle"
	>
		<slot />
	</view>
</template>

<script lang="ts">
import props from './props';
import events from './events';
let transitionTimer = null;
export default {
	data() {
		return {
			// 是否显示组件
			display: false as boolean,
			// 是否启动动画
			motion: false as boolean
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
			this.open()
		}
	},
	methods: {
		open() {
			this.display = true;
			clearTimeout(transitionTimer);
			transitionTimer = setTimeout(() => {
				this.motion = true;
			},100);
		},
		close() {
			this.motion = false;
			clearTimeout(transitionTimer);
			transitionTimer = setTimeout(() => {
				this.display = false;
			},this.duration); 
		}
	},
	beforeUnmount () {
		clearTimeout(transitionTimer);
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