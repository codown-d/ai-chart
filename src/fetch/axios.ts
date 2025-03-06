import { message } from "antd";
import axios, { AxiosResponse } from "axios";
import { debounce } from "lodash";
const VITE_API_URL = import.meta.env.VITE_API_URL;
const axiosIns = axios.create({
  baseURL: VITE_API_URL, // API 基础 URL
  timeout: 50000, // 超时设置
  headers: {
    "Content-Type": "application/json",
  },
});
axiosIns.interceptors.request.use(
  (config) => {
    
    const token = 'app-clbERiJs0r8HTAmMYUhrx3Di'//config.token || localStorage.getItem("token") || ""; 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
      // config.headers["token"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
const debouncedFunction = debounce((msg: string) => {
  message.error(msg);
}, 300);
axiosIns.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    // 处理响应数据
    if (response.data.code != 200 && !response.config["silence"]) {
      console.log(response)
      debouncedFunction(response.data?.desc);
    }
    return response.data; // 直接返回数据
  },
  (error) => {
    // 处理响应错误
    const { response } = error;
    if (response) {
      // 根据响应状态码处理不同的情况
      console.error("API error:", response);
    } else {
      // 处理网络错误
      debouncedFunction(error.message);
      console.error("Network error:", error);
    }
    return Promise.reject(error);
  }
);

export default axiosIns;
