export default {
	emits: [
		"update:show",  // 是否显示组件，双向绑定
		"update:value", // 组件选中值 value，双向绑定
		"update:text",	// 组件选中的值对应的text，双向绑定，用于在页面内直接显示选中的文字信息
		"confirm",		// 确认事件
		"cancel",		// 取消事件
		"change",		// 组件选中值修改
		"close"     	// 组件关闭
	]
};