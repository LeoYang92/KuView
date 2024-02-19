export default {
	emits: [
		"click",
		"load", // 图片加载完成，回调参数参考：https://uniapp.dcloud.net.cn/component/image.html#image
		"error" // 图片加载失败，回调参数参考：https://uniapp.dcloud.net.cn/component/image.html#image
	]
};