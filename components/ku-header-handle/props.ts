import commonProps from '../../core/mixins/commonProps';
import Theme from '../../theme';
export default {
	props: {
		...commonProps,
		// 取消文字
		cancelText: {
			type: String,
			default: "取消"
		},
		// 取消文字颜色
		cancelColor: {
			type: String,
			default: Theme.textColorGrey
		},
		// 标题
		title: {
			type: String,
			default: ""
		},
		// 确认文字
		confirmText: {
			type: String,
			default: "确认"
		},
		// 确认文字颜色
		confirmColor: {
			type: String,
			default: Theme.colorPrimary
		},
		// 顶部左上和右上 边框圆角
		borderRadius: {
			type: [String,Number],
			default: 0
		}
	}
};