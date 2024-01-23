<template>
	<ku-popup 
		:show="show"
		type="bottom"
		:click-make-close="clickMakeClose"
		@maskClose="close"
		:safe-area-bottom="false"
	>
		<view class="kuPicker kuComponents">
			<slot name="header">
				<ku-header-handle 
					:title="title" 
					@cancel="cancel"
					@confirm="confirm"
				/>
			</slot>
			
			<ku-base-picker
				@change="change"
			/>
		</view>
	</ku-popup>
</template>

<script lang="ts">
/*
* @Author: LeoYang
* @Date: 2024-01-23 08:10:38
* @Description: 选择器组件，已经实现单列，多列选择器
* @todo 需要实现多列联动
* @todo 目前只实现了简单的纯数组选择器选项，后续需要适配数组下的对象选择器，比如：prop可以设置显示数据key和选取数据返回value的key
*/
import { unitOfSize } from '../../core/utils/utils';
import props from './props';
import events from './events';
import kuBasePicker from './components/ku-base-picker/ku-base-picker.vue';
export default {
	name: "ku-picker",
	data() {
		return {
			// change修改临时存储的值
			changeValue: '' as string|number
		};
	},
	mixins: [props,events],
	components: {
		kuBasePicker
	},
	provide() {
		return {
			picker: this
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
		 * 确认
		 */
		confirm() {
			this.$emit("update:value",this.changeValue);
			this.$emit("confirm",this.changeValue);
			this.close();
		},
		cancel() {
			this.$emit("cancel");
			this.close();
		},
		/**
		 * 关闭组件
		 */
		close() {
			this.$emit("close");
			this.$emit("update:show",false);
		},
		/**
		 * 列值修改
		 */
		change(value:Array<string|number>) {
			let result:string|number = '';
			if(this.mode == 'selector') {
				result = value[0];
			}
			this.changeValue = result;
			this.$emit("change",result);
		}
	}
};
</script>