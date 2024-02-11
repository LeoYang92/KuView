import commonProps from '../../../../core/mixins/commonProps';
export default {
	props: {
		...commonProps,
		/**
		 * view-picker默认选中的数据下标
		 */
		values: {
			type: Array,
			default: []
		}
	}
};