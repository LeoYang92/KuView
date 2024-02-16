import commonProps from '../../core/mixins/commonProps';
export default 
{
	props: {
		...commonProps,
		/**
		 * 是否启用淡入效果
		 */
		fade: {
			type: Boolean,
			default: true
		},
		/**
		 * 配合fade，如果fade为false则本参数无效
		 * 淡入效果动画执行时长
		 */
		duration: {
			type: [Number,String],
			default: 400
		}
	}
};