<template>
	<view class="kuHeaderHandle">
		<view class="kuHeaderHandle__item kuHeaderHandle__cancel">
			<text 
				class="kuText kuHeaderHandle__item-text kuHeaderHandle__cancel-text"
				:style="cancelTextStyle"
			>
				{{ cancelText }}
			</text>
		</view>
		<view class="kuHeaderHandle__item kuHeaderHandle__title">
			<text class="kuText kuHeaderHandle__item-text kuHeaderHandle__title-text">
				{{ title }}
			</text>
		</view>
		<view class="kuHeaderHandle__item kuHeaderHandle__confirm">
			<text 
				class="kuText kuHeaderHandle__item-text kuHeaderHandle__confirm-text"
				:style="confirmTextStyle"
			>
				{{ confirmText }}
			</text>
		</view>
	</view>
</template>

<script>
/*
* @Author: LeoYang
* @Date: 2024-01-22 22:19:55
* @Description: 头部操作栏组件，确认、取消、标题
*/
import props from './props';
export default {
	name: 'ku-header-handle',
	mixins: [props],
	computed: {
		cancelTextStyle() {
			return {
				color: this.cancelColor
			}
		},
		confirmTextStyle() {
			return {
				color: this.confirmColor
			}
		}
	}
}
</script>

<style scoped lang="scss">
	@import "../../core/css/components.scss";
	$cancel-color: $ku-text-color-grey !default;
	$confirm-color: $ku-color-primary !default;
	.kuHeaderHandle{
		@include flex(row);
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
		@include borderBox;
		height: 70rpx;
		&__item{
			&-text{
				font-size: $ku-font-size-sm;
			}
		}
		&__cancel{
			padding: 10rpx 20rpx;
			@include borderBox;
			&-text{
				color:$cancel-color;
			}
		}
		&__confirm{
			padding: 10rpx 20rpx;
			@include borderBox;
			&-text{
				color:$confirm-color;
			}
		}
	}
</style>