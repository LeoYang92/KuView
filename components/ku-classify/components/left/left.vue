<template>
	<view class="kuClassifyLeft">
		<!-- #ifdef APP-NVUE-->
		<list class="kuClassifyLeft__list">
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
			<cell class="kuClassifyLeft__list-item">
				<ku-text text="测试"></ku-text>
			</cell>
		</list>
		<!-- #endif -->
		
		<!--#ifndef APP-NVUE-->
		<ku-text text="测试" align="center" />
		<!--#endif-->
	</view>
</template>

<script lang="ts">

</script>

<style scoped lang="scss">
	@import "../../../../core/css/components.scss";
	.kuClassifyLeft{
		width: 160rpx;
		background-color: #ffffff;
		&__list{
			&-item{
				height: 100rpx;
			}
		}
	}
</style>