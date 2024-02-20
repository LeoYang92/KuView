<template>
	<view class="kuClassify">
		
		<ku-left></ku-left>
		
		<ku-right></ku-right>
		
	</view>
</template>

<script lang="ts">
	import kuLeft from './components/left/left.vue';
	import kuRight from './components/right/right.vue';
	export default {
		components: {
			kuLeft,
			kuRight
		}
	}
</script>

<style scoped lang="scss">
	@import "../../core/css/components.scss";
	.kuClassify{
		@include flex(row);
		flex: 1;
	}
</style>