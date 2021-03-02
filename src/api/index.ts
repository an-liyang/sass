import httpRequest from "@/utils/httpRequest";
// 请求基础方法
const ajaxFun = (url:string, data:any) => {
  return httpRequest.request({
    url: url,
    data,
    method: "POST",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json;charset=UTF-8"
    }
  });
};
const ajaxFunGet = (url:string, data:any) => {
  return httpRequest.request({
    url: url,
    params: data,
    method: "GET",
    headers: {
      // 'X-Requested-With': 'XMLHttpRequest',
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};
/*获取基本配置*/
export const config = () => {
  return ajaxFunGet("/common/config",'');
};
/*获取实例*/
export function getCookie(data: string){
  return ajaxFun("/getSqlIp", data)
}

