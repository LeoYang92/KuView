<template>
	<ku-transition>
		<cover-view class="kuMask kuComponents">
			<slot />
		</cover-view>
	</ku-transition>
</template>

<script lang="ts">
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
