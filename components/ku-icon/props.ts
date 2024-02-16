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
		}
	}
}