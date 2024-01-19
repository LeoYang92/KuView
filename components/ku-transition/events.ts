export default {
	emits: [
		"beforeEnter",  // 动画执行前
		"enter",  // 正在执行动画
		"afterEnter",  // 动画执行完成
		"beforeLeave",  // 动画结束前
		"leave",  // 动画结束中
		"afterLeave" // 动画结束完毕
	]
};