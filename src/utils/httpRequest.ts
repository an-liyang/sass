import axios from "axios";

// import router from "../router";
import { useRouter } from "vue-router";
import store from "../store";

type StringObj = { [k: string]: string }
type UrlParamBack = null | string | StringObj
const {push} = useRouter()

// import { getAppUserKey, getAppUserSecret } from "@/utils/auth.js";
// 创建axios实例
const startTips =
  "          .----.\n" +
  "       _.'__    `.\n" +
  "   .--(O) (O)--/ #\\\n" +
  " .' @         / ###\\\n" +
  " :   ·...·  ,  #####）\n" +
  "  `-..__.-'_.- ### /\n" +
  "        `:_:   `..\n" +
  '      .\'"""""\'.\n' +
  "     //  start \\\\\n" +
  "     //  成功!  \\\\\n" +
  "    `-._______.-'\n" +
  "    ___`. | .'___\n" +
  "   (______|______)\n";
console.log(startTips);
const baseUrl =
  process.env.NODE_ENV === "development" ? "/" : "/";
class HttpRequest {
  constructor(baseUrl:string = '') {
    // this.baseUrl = baseUrl;
  }
  getInsideConfig() {
    const config = {
      baseURL: baseUrl,
      timeout: 60 * 1000,
      headers: {
        //
      }
    };
    return config;
  }  
  interceptors(instance:any, url:string) {
    // 请求拦截
    instance.interceptors.request.use(
      (config:any) => {
        // 添加全局的loading...
        // store.state.loadding = true; //在请求发出之前进行一些操作
        let token = window.localStorage.getItem("token");
        if (token) {
          config.headers.token = token;
          return config;
        }
      },
      (error:any) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res:any) => {
        // store.state.loadding = false; //在这里对返回的数据进行处理
        const { data, status } = res;
        if (res.data && res.data.code == 401) {
          push({
            path: "/",
          });
        } else {
          return { data, status };
        }
      },
      (error:any) => {
        // store.state.loadding = false; //在这里对返回的数据进行处理
        console.log("error" + error);
        // addErrorLog(error.response);
        return Promise.reject(error);
      }
    );
  }
  request(options:any) {
    // console.log(options);
    const instance = axios.create();
    axios.defaults.withCredentials = true; //默认携带cookie
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}

const httpRequest = new HttpRequest(baseUrl);
export default httpRequest;
