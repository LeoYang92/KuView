<template>
	<ku-gap 
		:height="height"
		:bg-color="bgColor"
	/>
</template>

<script lang="ts">
import windowInfoData from '../../core/mixins/windowInfoData';
import props from './props';
export default {
	name: 'ku-safe-area',
	mixins: [props,windowInfoData],
	computed: {
		/**
		 * 填充高度
		 */
		height() {
			return this.position == 'bottom' ? this.windowInfo.safeAreaInsets.bottom : this.windowInfo.statusBarHeight;
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../core/css/components.scss';
</style>