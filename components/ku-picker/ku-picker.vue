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
				<ku-header-handle title="选择"></ku-header-handle>
			</slot>
			
			<picker-view
				class="kuPicker__picker"
				:indicator-style="indicatorStyle"
				:style="pickerStyle"
			>
				<picker-view-column class="kuPicker__picker-column">
					<view 
						class="kuPicker__picker-column-item"
						v-for="item in datas" 
						:key="item"
					>
						<text 
							class="kuText kuPicker__picker-column-item-text"
							:style="textStyle"
						>
							{{ item }}
						</text>
					</view>
				</picker-view-column>
				<picker-view-column class="kuPicker__picker-column">
					<view 
						class="kuPicker__picker-column-item"
						v-for="item in datas1" 
						:key="item"
					>
						<text 
							class="kuText kuPicker__picker-column-item-text"
							:style="textStyle"
						>
							{{ item }}
						</text>
					</view>
				</picker-view-column>
			</picker-view>
		</view>
	</ku-popup>
</template>

<script lang="ts">
import { unitOfSize } from '../../core/utils/utils';
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
	computed: {
		/**
		 * 选择器中间选中框的样式
		 */
		indicatorStyle() {
			return `height:${unitOfSize(this.itemHeight)}`;
		},
		/**
		 * picker组件行内样式
		 */
		pickerStyle() {
			return {
				height: unitOfSize(this.itemHeight * this.visibleItemNum)
			};
		},
		/**
		 * text内容样式
		 */
		textStyle() {
			return {
				height: unitOfSize(this.itemHeight),
				lineHeight: unitOfSize(this.itemHeight)
			};
		}
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
		font-size: 28rpx;
		background-color: #FFFFFF;
		&__picker{
			background-color: #FFFFFF;
			&-column{
				&-item{
					&-text{
						/* #ifndef APP-NVUE */
						display: block;
						/* #endif */
						text-align: center;
						font-size: $ku-font-size-base;
					}
				}
			}
		}
	}
</style>