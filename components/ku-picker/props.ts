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
		 * 选择器类型
		 * @default selector 默认单列选择器
		 */
		mode: {
			type: String,
			default: "selector"
		},
		/**
		 * 默认选中的值，每列的值
		 * mode = selector 数据下标 Number||String
		 */
		value: {
			type: [Number,String,Array],
			default: 0
		},
		/**
		 * 默认选中显示的文本信息
		 */
		text: {
			type: [Number,String,Array],
			default: ''
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
		},
		/**
		 * 数据列表，不同的mode不同的数据列表结构
		 * selector []一维数组
		 */
		columns: {
			type: Array,  // || Array<Object>
			default() {
				return [];
			}
		},
		/**
		 * 如果columns是Array<object>模式
		 * 显示数据的键名
		 */
		textKey: {
			type: String,
			default: 'text'
		},
		/**
		 * 如果columns是Array<object>模式
		 * 数据的value的键名
		 */
		valueKey: {
			type: String,
			default: 'value'
		},
		/**
		 * 顶部左上和右上 边框圆角
		 */
		borderRadius: {
			type: [Number,String],
			default: 0
		}
	}
};