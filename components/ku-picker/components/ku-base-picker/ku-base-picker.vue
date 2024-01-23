<template>
	<view class="kuBasePicker">
		<picker-view
			class="kuBasePicker__picker"
			:indicator-style="picker.indicatorStyle"
			:style="picker.pickerStyle"
			:value="value"
			@change="change"
		>
			<picker-view-column 
				class="kuBasePicker__picker-column"
				v-for="column in columns"
				:key="column"
			>
				<view 
					class="kuBasePicker__picker-column-item"
					v-for="item in column" 
					:key="item"
				>
					<text 
						class="kuText kuBasePicker__picker-column-item-text"
						:style="picker.textStyle"
					>
						{{ item }}
					</text>
				</view>
			</picker-view-column>
		</picker-view>
	</view>
</template>

<script lang="ts">
import events from './events';
export default {
	name: 'ku-base-picker',
	mixins: [events],
	inject: {
		picker: {
			from: 'picker'
		}
	},
	computed: {
		// 列数据列表
		columns() {
			let columns = [];
			if(this.picker.mode == 'selector') {
				columns.push(this.picker.columns);
			}
			return columns;
		},
		// 列默认选择的值
		value() {
			let value = [];
			if(this.picker.mode == 'selector') {
				value.push(this.picker.value);
			}
			return value;
		}
	},
	methods: {
		/**
		 * 列选中值修改
		 */
		change({detail}){
			this.$emit("change",detail.value);
		}
	}
};	
</script>

<style scoped lang="scss">
	.kuBasePicker{
		width: 750rpx;
		background-color: $ku-bg-color-white;
		&__picker{
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