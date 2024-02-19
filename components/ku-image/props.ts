import commonProps from '../../core/mixins/commonProps';
import Theme from '../../theme';
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
		},
		/**
		 * 图片圆角,默认0
		 */
		radius: {
			type: [Number,String],
			default: 0
		},
		/**
		 * 是否为圆形图片
		 */
		circle: {
			type: Boolean,
			default: false
		},
		/**
		 * 图片宽度
		 */
		width: {
			type: [Number,String],
			default: 100
		},
		/**
		 * 图片高度
		 */
		height: {
			type: [Number,String],
			default: 100
		},
		/**
		 * 图片路径
		 */
		src: {
			type: String,
			default: ''
		},
		/**
		 * 组件背景颜色，图片加载成功组件设置透明
		 */
		laadingBgColor: {
			type: String,
			default: Theme.bgColorGrey
		},
		/**
		 * 图片裁剪、缩放的模式
		 * 可参考：https://uniapp.dcloud.net.cn/component/image.html#mode-%E6%9C%89%E6%95%88%E5%80%BC 
		 */
		mode: {
			type: String,
			default: 'scaleToFill'
		},
		/**
		 * 图片懒加载，只针对page与scroll-view下的image有效
		 * 可参考：https://uniapp.dcloud.net.cn/component/image.html#image
		 * 仅支持：微信小程序、百度小程序、抖音小程序、飞书小程序
		 */
		lazyLoad: {
			type: Boolean,
			default: false
		},
		/**
		 * 在系统不支持webp的情况下是否单独启用webp。默认false，只支持网络资源。webp支持详见下面说明
		 * 仅支持微信小程序
		 * 可参考：https://uniapp.dcloud.net.cn/component/image.html#image
		 */
		webp: {
			type: Boolean,
			default: false
		},
		/**
		 * 开启长按图片显示识别小程序码菜单
		 * 仅支持微信小程序
		 * 可参考：https://uniapp.dcloud.net.cn/component/image.html#image
		 */
		showMenuByLongpress: {
			type: Boolean,
			default: false
		},
		/**
		 * 是否能拖拽图片
		 * 仅支持：H5 3.1.1+、App（iOS15+）
		 * 可参考：https://uniapp.dcloud.net.cn/component/image.html#image
		 */
		draggable: {
			type: Boolean,
			default: true
		}
	}
};