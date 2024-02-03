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
					:border-radius="borderRadius"
					@cancel="cancel"
					@confirm="confirm"
				/>
			</slot>
			
			<ku-base-picker
				@change="change"
				:values="values"
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
import selectorMethods from './selectorMethods';
import kuBasePicker from './components/ku-base-picker/ku-base-picker.vue';
export default {
	name: "ku-picker",
	data() {
		return {
			// change修改时记录修改后的下标
			current: '' as string|number|Array<string|number>,
			values: []
		};
	},
	mixins: [props,events,selectorMethods],
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
		},
		/**
		 * 每列value值的类型 string|object
		 */
		columnItemType() {
			let type = "";
			if(this.mode == 'selector') {
				type = typeof this.columns[0];
			}
			return type;
		}
	},
	watch: {
		value() {
			this.init();
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		/**
		 * 组件value初始化完成
		 */
		init() {
			if(this.mode == 'selector') {
				this.initSelectorValue();
			}
		},
		/**
		 * 确认
		 */
		confirm() {
			if(this.mode == 'selector') {
				this.selectorConfirm(); 
			}
			this.close();
		},
		/**
		 * 取消
		 */
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
			if(this.mode == 'selector') {
				this.selectorChange(value);
			}
		}
	}
};
</script>

