export interface callBackParams{
	// change、confirm事件回调参数返回的索引
	index: number;
	// 选择的数据对象
	item: object|number|string;
	// 选择的值
	value: string|number;
}