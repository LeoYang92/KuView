/*
* @Author: LeoYang
* @Date: 2024-01-20 23:46:19
* @Description: 常用函数
*/
import Config from '../config/config';

/**
 * 获取缓存键值
 * @param key 缓存键
 * @return string 缓存键
 */
const cachedKey = function(key:string): string
{
	return `${Config.cached_prefix}${key}`;
};

/**
 * 适配尺寸单位
 * 适配规则：如果组件传递数据包含rpx或者px直接返回，如果数值是单纯的数字则返回函数第二个参数指定的单位
 * @param size Number|String 尺寸数值
 * @param unit String 单位  默认px
 *  @default px
 * 	@value rpx
 */
export const unitOfSize = function(size:number|string, unit:string = 'px'): string
{
	let unitSize = size + '';
	if(!isNaN(Number(unitSize))) {
		unitSize += unit;
	}
	return unitSize;
};

/**
 * 分割一个尺寸单位，比如10rpx可以分割成[10,'rpx']，10px可以分割成[10,'px']
 */
export const splitSize = function(size:string): [number,string]
{
	const unit = size.match(/[a-zA-Z%]+/);
	return [parseFloat(size),unit ? unit[0] : ''];
};

/**
 * 获取设备窗口信息
 */
export const windowInfo = function(): object 
{
	const cached_key = cachedKey('window_info');
	let cachedWindowInfo = uni.getStorageSync(cached_key);
	if(!cachedWindowInfo) {
		cachedWindowInfo = uni.getWindowInfo();
		uni.setStorageSync(cached_key,cachedWindowInfo);
	}
	return cachedWindowInfo;
};