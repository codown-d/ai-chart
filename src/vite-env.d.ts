/// <reference types="vite/client" />
import 'axios';

declare module 'axios' {
  interface AxiosRequestConfig {
    token?: string; // 在 AxiosRequestConfig 中添加 token 属性
    silence?:boolean
  }
}