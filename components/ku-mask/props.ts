import zIndex from '../../core/config/zIndex'
import commonProps from '../../core/mixins/commonProps';
export default 
{
	props: {
		...commonProps,
		/**
		 * 是否显示组件
		 */
		show: {
			type: Boolean,
			default: true
		},
		/**
		 * css定位层级
		 */
		zIndex: {
			type: [String,Number],
			default: zIndex.lower
		},
		/**
		 * 动画时长,单位ms
		 */
		duration: {
			type: [String,Number],
			default: 300
		},
		/**
		 * 遮罩层透明度
		 */
		opacity: {
			type: [String,Number],
			default: 0.5
		},
		/**
		 * 点击遮罩层是否关闭，默认关闭
		 */
		clickClose: {
			type: Boolean,
			default: true
		}
	}
};