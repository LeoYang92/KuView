<template>
	<ku-transition
		:mode="fade ? 'fade' : ''"
		:show="transition_show"
		:duration="duration"
	>
		<view class="kuImage">
			<ku-icon name="home"></ku-icon>
		</view>
	</ku-transition>
</template>

<script lang="ts">
	import props from './props'
	export default {
		name: 'ku-image',
		data() {
			return {
				transition_show: false as Boolean
			}
		},
		mixins: [props],
		mounted() {
			setTimeout(() => {
				this.transition_show = true
			},10)
		}
	}
</script>

<style scoped lang="scss">
	.kuImage{
		width: 100rpx;
		height: 100rpx;
		background-color: red;
	}
</style>