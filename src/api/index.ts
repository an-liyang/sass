/**
 * 基础数据 API 集合类
 * 集成Abstract
 * 
 */
import Abstract from '@/api/abstract';
import { GetDemo ,PostDemo} from '@/api/types';

class Basic extends Abstract {
    
    /**
     * get示例
     */
    getDemo(params: GetDemo) {
        return this.getReq({ url: 'Basic.GetDemo', params });
    }
    
    /**
     * post示例
     */
    getSqlIp(data: object) {
        return this.postReq({ url: 'Basic.PostDemo', data });
    }
    
}

// 单列模式返回对象
const instance = new Basic();
export default instance;



