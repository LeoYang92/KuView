import commonProps from '../../core/mixins/commonProps';
export default 
{
	props: {
		...commonProps,
		/**
		 * 图标名称
		 */
		name: {
			type: String,
			default: ''
		},
		/**
		 * 图标颜色
		 * @default normal 默认值
		 * @value primary 系统主颜色
		 * @value success 成功颜色
		 * @value warning 警告颜色
		 * @value error 错误颜色
		 * @value 其他 十六进制颜色 和 命名颜色
		 */
		color: {
			type: String,
			default: 'normal'
		},
		/**
		 * 图标大小
		 * @default medium 默认值
		 * @value min 小号图标
		 * @value max 大号图标
		 * @value 其他数字 
		 */
		size: {
			type: [String,Number],
			default: 'medium'
		}
	}
};