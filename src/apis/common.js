import { wrapRequest, instance } from "./index";
import axios from "axios";
import { getToken } from "pages/_app";
import { ROOT_URL } from "./url";

// 기본 post 요청
export const postRequest = wrapRequest(async (url, data) => {
  return instance().post(url, { ...data });
});
// 기본 get 요청
export const getRequest = wrapRequest(async (url, data, token = true) => {
  return instance().get(url, { params: data, token: token });
});
