/*
* @Author: LeoYang
* @Date: 2024-01-24 14:23:30
* @Description: 单列数据选择器相关方法
* 单列，字符串，回调参数：索引，选择值字符串
* 单列，对象，回调参数：索引，选择的值对象
*/
import { callBackParams } from './interface';
export default {
	methods: {
		// 单列数据chang
		selectorChange(value:Array<string|number>):void {
			this.current = value[0];
			this.$emit("change",this.callBackParams());
		},
		// 触发确认事件
		selectorConfirm():void {
			const { current,columns,valueKey,columnItemType } = this;
			const selectedValue = columnItemType === 'object' ? columns[current][valueKey] : current;
			this.$emit("update:value",selectedValue);
			this.$emit("update:text",this.selectSelectedText());
			this.$emit("confirm",this.callBackParams());  
		},
		// value初始化完成触发事件
		selectorInit():void {
			this.$emit("update:text",this.selectSelectedText());
		},
		/**
		 * 获取当前value对应的text值
		 */
		selectSelectedText():string {
			const { current,columns,textKey,columnItemType } = this;
			return columnItemType === 'object' ? columns[current][textKey] : columns[current]; 
		},
		/**
		 * 获取回调参数
		 */
		callBackParams(): callBackParams {
			const {current,columns,valueKey,columnItemType} = this;
			return {
				index: current,
				item: columns[current],
				value: columnItemType === 'object' ? columns[current][valueKey] : columns[current]
			};
		}
	}
};