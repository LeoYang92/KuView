<template>
	<view 
		class="kuGap kuComponents"
		:style="gapStyle" />
</template>

<script lang="ts">
import { unitOfSize } from '../../core/utils/utils';
import props from './props';
export default {
	mixins: [props],
	computed: {
		gapStyle() {
			const style = {
				width: unitOfSize(this.width),
				height: unitOfSize(this.height),
				backgroundColor: this.bgColor,
				...this.customStyle
			};
			return style;
		}
	}
};
</script>

<style scoped lang="scss">
	@import '../../core/css/components.scss';
	.kuGap{
		/* #ifndef APP-NVUE*/
		width: 100%;
		/* #endif */
	}
</style>