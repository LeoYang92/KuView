<template>
	<view class="kuBasePicker">
		<picker-view
			class="kuBasePicker__picker"
			:indicator-style="picker.indicatorStyle"
			:style="picker.pickerStyle"
			:value="value"
			@change="({detail}) => change(detail.value)"
		>
			<picker-view-column 
				class="kuBasePicker__picker-column"
				v-for="(column,columns_index) in columns"
				:key="columns_index"
			>
				<view 
					class="kuBasePicker__picker-column-item"
					v-for="(item,column_index) in column" 
					:key="column_index"
				>
					<text 
						class="kuText kuBasePicker__picker-column-item-text"
						:style="picker.textStyle"
					>
						{{ picker.columnItemType == 'string' ? item : item[picker.textKey] }}
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
			if(this.picker.mode == 'selector') {
				return this.initSelectorValue()	
			}
		}
	},
	methods: {
		/**
		 * 列选中值修改
		 */
		change(value:Array<number>){
			this.$emit("change",value);
		},
		/**
		 * 初始化单列数据value
		 */
		initSelectorValue() {
			let index = this.picker.value;
			if(this.picker.columnItemType == 'object') {
				index = this.picker.columns.findIndex((column:object) => {
					return column[this.picker.valueKey] === this.picker.value;
				})
			}
			this.change([index]);
			return [parseInt(index)];
		}
	}
};	
</script>

<style scoped lang="scss">
	.kuBasePicker{
		/* #ifdef APP-NVUE*/
		width: 750rpx;
		/* #endif*/
		/* #ifndef APP-NVUE*/
		width: 100vw;
		/* #endif*/
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