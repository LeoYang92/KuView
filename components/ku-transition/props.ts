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
			default: false
		},
		/**
		 * 动画模式
		 * @value default 不使用动画
		 * @value fade 淡入
		 */
		mode: {
			type: String,
			default: ""			
		},
		/**
		 * 动画执行时间，单位ms
		 */
		duration: {
			type: [String,Number],
			default: 300
		},
		/**
		 * 动画延时，单位ms
		 */
		delay: {
			type: [String,Number],
			default: 0
		},
		/**
		 *过度函数
		 *取值可参考：https://uniapp.dcloud.net.cn/tutorial/nvue-css.html#transition-timing-function
		 * 	@default ease-out 过渡快速开始，然后变慢的过渡效果
		 *	@value ease  过渡逐渐变慢的过渡效果
		 *	@value ease-in 过渡慢速开始，然后变快的过渡效果
		 * 	@value ease-in-out 过渡慢速开始，然后变快，然后慢速结束的过渡效果
		 * 	@value linear 过渡以匀速变化
		 * 	@value cubic-bezier(x1, y1, x2, y2)  使用三阶贝塞尔函数中自定义 transition 变化过程，函数的参数值必须处于 0 到 1 之间。更多关于三次贝塞尔的信息请参阅 cubic-bezier和 Bézier curve
		 */
		timingFunction: {
			type: String,
			default: "ease-out"
		}
	}
};