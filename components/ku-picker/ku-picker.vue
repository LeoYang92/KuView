<template>
	<ku-popup 
		:show="show"
		type="bottom"
		:click-make-close="clickMakeClose"
		@maskClose="maskClose"
		:safe-area-bottom="false"
	>
		<view class="kuPicker kuComponents">
			<slot name="header">
				<view class="kuPicker__header">
					<view class="kuPicker__header-calcel">
						取消
					</view>
					<view class="kuPicker__header-title">
						{{ title }}
					</view>
					<view class="kuPicker__header-confirm">
						确认
					</view>
				</view>
			</slot>
			<picker-view
				class="kuPicker__picker"
				indicator-style="height:90rpx;" 
				style="flex: 1;"
			>
				<picker-view-column>
					<view 
						class="kuPicker__picker-item"
						v-for="item in datas" 
						:key="item"
					>
						{{ item }}
					</view>
				</picker-view-column>
				<picker-view-column>
					<view 
						class="kuPicker__picker-item"
						v-for="item in datas1" 
						:key="item"
					>
						{{ item }}
					</view>
				</picker-view-column>
			</picker-view>
		</view>
	</ku-popup>
</template>

<script lang="ts">
import props from './props';
import events from './events';
export default {
	name: "ku-picker",
	mixins: [props,events],
	data() {
		return {
			datas: ["第一个","第二个","第三个"],
			datas1: ["第1个","第2个","第3个"]
		};
	},
	methods: {
		/**
		 * 遮罩层关闭
		 */
		maskClose() {
			this.$emit("update:show",false);
		}
	}
};
</script>

<style scoped lang="scss">
	@import "../../core/css/components.scss";
	.kuPicker{
		@include flex();
		width: 750rpx;
		height: 500rpx;
		font-size: 28rpx;
		background-color: #FFFFFF;
		&__header{
			@include flex(row);
			height: 80rpx;
			background-color: red;
		}
		&__picker{
			background-color: #FFFFFF;
			text-align: center;
			&-item{
				line-height: 90rpx; 
			}
		}
	}
</style>