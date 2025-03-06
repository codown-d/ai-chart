import {  AxiosRequestConfig,  } from "axios";
import axiosIns from "./axios";
import { IResponseData } from "./definition";

/**
 * GET 请求
 * @param {string} url - 请求的 URL
 * @param {object} params - 查询参数
 */
const get = (url: string, params: object = {},config?:any): Promise<IResponseData<any>> => {
  return axiosIns.get(url, { params,  ...config });
};

/**
 * POST 请求
 * @param {string} url - 请求的 URL
 * @param {object} data - 请求体数据
 */
const post = (url: string, data: object,config?:AxiosRequestConfig<any>): Promise<IResponseData<any>>  => {
  return axiosIns.post(url, data, config);
};

/**
 * PUT 请求
 * @param {string} url - 请求的 URL
 * @param {object} data - 请求体数据
 */
const put = (url: string, data: object): Promise<IResponseData<any>>  => {
  return axiosIns.put(url, data);
};

/**
 * DELETE 请求
 * @param {string} url - 请求的 URL
 */
const remove = (url: string): Promise<IResponseData<any>>  => {
  return axiosIns.delete(url);
};
const http = {
  get,
  post,
  put,
  remove,
};
export default http;