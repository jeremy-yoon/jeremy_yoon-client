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
const getPostListRequest = async (setPostList, setLoading) => {
  setLoading(true);
  const result = await getRequest("/post/");
  setPostList(result);
  setLoading(false);
};
const getPostListException = async (setLoading, e) => {
  setLoading(false);
};
export const getPostList = (setPostList, setLoading) =>
  commonExceptionForm(
    () => getPostListRequest(setPostList, setLoading),
    getPostListException(setLoading)
  );

// 포스트 상세 불러오기
const getPostRequest = async (setPost, setLoading, id) => {
  const result = await getRequest(`/post/${id}/`);
  setPost(result);
  console.log("getPost", result);
  setLoading(false);
};
const getPostException = async (setLoading, e) => {
  setLoading(false);
};
export const getPost = (setPost, setLoading, id) =>
  commonExceptionForm(
    () => getPostRequest(setPost, setLoading, id),
    getPostException(setLoading)
  );
