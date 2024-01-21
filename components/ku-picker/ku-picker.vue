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
					<view class="kuPicker__header-cancel">
						<text class="kuText">取消</text>
					</view>
					<view class="kuPicker__header-title">
						{{ title }}
					</view>
					<view class="kuPicker__header-confirm">
						<text class="kuText">确认</text>
					</view>
				</view>
			</slot>
			<picker-view
				class="kuPicker__picker"
				indicator-style="height:50px;"
			>
				<picker-view-column>
					<view 
						class="kuPicker__picker-item"
						v-for="item in datas" 
						:key="item"
					>
						<text class="kuText">{{ item }}</text>
					</view>
				</picker-view-column>
				<picker-view-column>
					<view 
						class="kuPicker__picker-item"
						v-for="item in datas1" 
						:key="item"
					>
						<text class="kuText">{{ item }}</text>
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
			align-items: center;
			height: 80rpx;
			padding:0 30rpx;
			@include borderBox;
			&-title{
				flex: 1;
				text-align: center;
			}
			&-cancel,&-confirm{
				background-color: blue;
			}
		}
		&__picker{
			background-color: #FFFFFF;
			text-align: center;
			flex: 1;
			&-item{
				line-height: 50px; 
			}
		}
	}
</style>