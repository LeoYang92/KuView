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
		 */
		color: {
			type: String,
			default: ''
		},
		/**
		 * 图标大小
		 */
		size: {
			type: [String,Number],
			default: 'medium'
		}
	}
};