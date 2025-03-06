import api from "./api";
import { IResponseData } from "./definition";
import http from "./http";

export const postChatMessages = async (
  params?: any
): Promise<IResponseData<any>> => {
  return http.post(api.chatMessages, params);
};
export const getUserInfo = async (
  params?: any
): Promise<IResponseData<any>> => {
  return http.get(api.chatMessages, params);
};
