export default {
	emits: [
		// 显示隐藏双向绑定 v-model:show
		"update:show",
		// 弹层打开前执行
		"beforOpen",
		// 弹层打开
		"afterOpen",
		// 弹层关闭前
		"beforClose",
		// 弹层关闭
		"afterClose"
	]
};