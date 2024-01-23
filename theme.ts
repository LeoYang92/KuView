/*
* @Author: LeoYang
* @Date: 2024-01-22 23:15:11
* @Description: 与theme.scss一致，方便JS调用
* @todo 方便开发者们统一系统配色，后续可以通过node统一修改theme.scss和theme.ts
*/
export default {
	// 系统行为颜色
	colorPrimary: '#007aff',  	// 系统默认颜色
	colorSuccess: '#4cd964',  	// 成功相关颜色
	colorWarning: '#f0ad4e',	// 警告相关颜色
	colorError: '#dd524d',		// 错误相关颜色
	
	// 文字大小
	fontSizeBase: '28rpx',  // 系统文字基础大小
	fontSizeSm: '23rpx', 	// 系统小号文字
	fontSizeLg: '30rpx', 	// 系统大号文字
	
	// 文字颜色
	textColorBase: '#333', // 系统文字基本色
	textColorInverse: '#fff',// 系统文字反色
	textColorGrey: '#999', // 辅助灰色，如加载更多的提示信息
	textColorPlaceholder: '#808080', // 占位符
	textColorDisable: '#c0c0c0',  // 禁止禁用文字颜色
	
	
	// 背景颜色
	bgColorWhite: '#ffffff', // 白色背景颜色
	bgColorGrey: '#f8f8f8', // 灰色
	bgColorHover: '#f1f1f1' //点击状态颜色
};