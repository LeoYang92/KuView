import commonProps from '../../core/mixins/commonProps';
export default {
	props: {
		...commonProps,
		/**
		 * 是否显示组件,v-mode:show 双向绑定
		 */
		show: {
			type: Boolean,
			default: false
		},
		/**
		 * 标题
		 */
		title: {
			type: String,
			default: ""
		},
		/**
		 * 每个选项的高度
		 */
		itemHeight: {
			type: [Number,String],
			default: 50
		},
		/**
		 * 可见选项数量
		 */
		visibleItemNum: {
			type: [Number,String],
			default: 5
		},
		/**
		 * 点击遮罩层是否关闭
		 */
		clickMakeClose:  {
			type: Boolean,
			default: false
		}
	}
};