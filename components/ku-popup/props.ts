import zIndex from '../../core/config/zIndex';
import commonProps from '../../core/mixins/commonProps';
export default 
{
	props: {
		...commonProps,
		/**
		 * 是否显示弹窗,v-model:show 双向绑定
		 */
		show: {
			type: Boolean,
			default: false
		},
		/**
		 * 弹性显示方向
		 * @todo 目前仅仅支持bottom方向弹窗，后续需要支持center、top、keft、right方向的弹窗
		 * @default center 居中弹窗
		 * @value bottom 底部弹窗
		 */
		type: {
			type: String,
			default: 'center'
		},
		/**
		 * 定位层级
		 */
		zIndex: {
			type: [String,Number],
			default: zIndex.middle
		},
		/**
		 * 显示弹窗显示时长
		 */
		duration: {
			type: [String,Number],
			default: 100
		},
		/**
		 * 是否适配底部安全区域
		 */
		safeAreaBottom: {
			type: Boolean,
			default: true
		},
		/**
		 * 底部安全区域背景颜色
		 */
		safeAreaBottomBg: {
			type: String,
			default: ""
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
