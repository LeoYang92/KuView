import commonProps from '../../core/mixins/commonProps';
export default 
{
	props: {
		...commonProps,
		/**
		 * 宽度 默认单位px
		 * @value 数字  默认单位px  比如传值100 那么默认就是100px
		 * @value 数字+指定单位  比如可以直接传值  100px 或者100rpx
		 */
		width: {
			type: [Number, String]
		},
		/**
		 * 高度 默认10px
		 * @value 数字  默认单位px  比如传值100 那么默认就是100px
		 * @value 数字+指定单位  比如可以直接传值  100px 或者100rpx
		 */
		height: {
			type: [Number, String],
			default: 10
		},
		/**
		 * 背景颜色
		 */
		bgColor: {
			type: String,
			default: 'transparent'
		}
	}
};
