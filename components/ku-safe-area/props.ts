import commonProps from '../../core/mixins/commonProps';
export default 
{
	props: {
		...commonProps,
		/**
		 * 安全区域位置
		 * @default bottom 底部安全区域
		 * @value top 顶部状态栏
		 */
		position: {
			type: String,
			default: 'bottom'
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
