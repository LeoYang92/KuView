export default {
	emits: [
		"update:show",  // 是否显示组件，双向绑定
		"update:value", // 组件每项显示的值 value，双向绑定
		"confirm",		// 确认事件
		"cancel",		// 取消事件
		"change",		// 组件选中值修改
		"close"     	// 组件关闭
	]
};