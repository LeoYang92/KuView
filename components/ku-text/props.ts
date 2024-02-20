import commonProps from '../../core/mixins/commonProps';
import Theme from '../../theme';
export default
{
	props: {
		...commonProps,
		// 文字内容
		text: {
			type: String,
			default: ''
		},
		// 文本颜色
		color: {
			type: String,
			default: Theme.textColorBase
		},
		// 文本大小
		size: {
			type: [String,Number],
			default: 'normal'
		},
		// 文字对齐方式
		align: {
			type: String,
			default: 'left'
		}
	}
}