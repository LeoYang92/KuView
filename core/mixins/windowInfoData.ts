/*
* @Author: LeoYang
* @Date: 2024-01-20 23:48:07
* @Description: 设备信息，共用data数据
*/
import { windowInfo } from '../utils/utils';
export default 
{
	data() {
		return {
			windowInfo: null
		};
	},
	created() {
		this.windowInfo = windowInfo();
	}
};