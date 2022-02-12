import { wrapRequest, instance } from "../index";
import { commonExceptionForm } from "helper/common.tsx";
import { getRequest } from "apis/common";

// 카테고리 리스트 불러오기
const getCategoryListRequest = async (setCategoryList) => {
  const result = await getRequest("/category/");
  const all = { title: "All" };
  setCategoryList([all, ...result]);
  console.log("getCategoryList", result);
};
const getCategoryListException = async (e) => {
  console.log("getCategoryList 에러", e);
};
export const getCategoryList = (setCategoryList) =>
  commonExceptionForm(
    () => getCategoryListRequest(setCategoryList),
    getCategoryListException
  );

// 포스트 리스트 불러오기
const getPostListRequest = async (setPostList) => {
  const result = await getRequest("/post/");
  setPostList(result);
  console.log("getPostList", result);
};
const getPostListException = async (e) => {
  console.log("getPostList 에러", e);
};
export const getPostList = (setPostList) =>
  commonExceptionForm(
    () => getPostListRequest(setPostList),
    getPostListException
  );

// 포스트 상세 불러오기
const getPostRequest = async (setPost, id) => {
  const result = await getRequest(`/post/${id}/`);
  setPost(result);
  console.log("getPost", result);
};
const getPostException = async (e) => {
  console.log("getPost 에러", e);
};
export const getPost = (setPost, id) =>
  commonExceptionForm(() => getPostRequest(setPost, id), getPostException);
