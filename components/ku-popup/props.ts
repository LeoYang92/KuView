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
		 * @todo 目前仅仅支持bottom方向弹窗，后续需要支持center、top、left、right方向的弹窗
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
			default: "transparent"
		},
		/**
		 * 是否适配设置顶部状态栏高度
		 */
		safeAreaTop: {
			type: Boolean,
			default: true
		},
		/**
		 * 顶部状态栏背景颜色
		 */
		safeAreaTopBg: {
			type: String,
			default: "transparent"
		},
		/**
		 * 弹层遮罩层透明度
		 */
		maskOpacity: {
			type: [String,Number],
			default: 0.4
		},
		/**
		 * 遮罩层样式
		 */
		maskStyle: {
			type: Object,
			default() {
				return {};
			}
		},
		/**
		 * 点击遮罩层是否关闭，默认关闭
		 */
		clickMakeClose: {
			type: Boolean,
			default: true
		}
	}
};
