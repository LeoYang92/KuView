<template>
	<view class="kuMask kuComponents">
		<slot />
		<image />
	</view>
</template>

<script lang="ts">
export default {
	mounted() {
		console.log("Test");
	}
};
</script>

<style scoped lang="scss">
	@import "../../core/css/components.scss";
	.kuMask{
		background-color: red;
	}
</style>
