<template>
	<view class="kuHeaderHandle" :style="componentStyle">
		<view 
			class="kuHeaderHandle__item kuHeaderHandle__cancel"
			@click="$emit('cancel')"
		>
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
		<view 
			class="kuHeaderHandle__item kuHeaderHandle__confirm"
			@click="$emit('confirm')"
		>
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
import { unitOfSize } from '../../core/utils/utils'
export default {
	name: 'ku-header-handle',
	mixins: [props],
	computed: {
		// 取消文字样式
		cancelTextStyle() {
			return {
				color: this.cancelColor
			};
		},
		// 确认文字样式
		confirmTextStyle() {
			return {
				color: this.confirmColor
			};
		},
		// 组件样式
		componentStyle() {
			const style = {
				borderRadius: `${unitOfSize(this.borderRadius)} ${unitOfSize(this.borderRadius)} 0 0`,
				...this.customStyle
			};
			return style;
		}
	}
};
</script>

<style scoped lang="scss">
	@import "../../core/css/components.scss";
	$cancel-color: $ku-text-color-grey !default;
	$confirm-color: $ku-color-primary !default;
	$border-radius: 0 !default;
	.kuHeaderHandle{
		@include flex(row);
		justify-content: space-between;
		align-items: center;
		padding: 0 15rpx;
		@include borderBox;
		height: 70rpx;
		background-color: $ku-bg-color-white;
		border-radius: $border-radius;
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