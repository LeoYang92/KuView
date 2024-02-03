<template>
	<view class="kuBasePicker">
		<picker-view
			class="kuBasePicker__picker"
			:indicator-style="picker.indicatorStyle"
			:style="picker.pickerStyle"
			:value="values"
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
import porps from './props';
export default {
	name: 'ku-base-picker',
	mixins: [porps,events],
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
		}
	},
	methods: {
		/**
		 * 列选中值修改
		 */
		change(value:Array<number>){
			this.$emit("change",value);
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