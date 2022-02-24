import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sv, St, ButtonL, PostList, PostListSkeleton } from "components";
import { CategoryList, TitleText, NavButton } from "./components";
import { Row, Col } from "antd";
import styled, { css } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getCategoryList, getPostList } from "apis/service";
import { colors } from "styles/colors";
import moment from "moment";

interface LeftContainer {}

export default function LeftContainer() {
  const [postList, setPostList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    getCategoryList(setCategoryList);
    getPostList(setPostList, setLoading);
  }, []);

  // render category list
  const renderCategoryList = () =>
    categoryList.map((item, index) => (
      <Sv py={8} pointer onClick={() => setSelectedCategory(item.title)}>
        <CategoryList
          title={item.title}
          selectedCategory={selectedCategory == item.title}
        />
      </Sv>
    ));

  // render post list
  const renderPostList = () =>
    postList.map((item, index) => (
      <PostList
        key={index}
        category={categoryList[item.category]?.title}
        title={item.title}
        date={item.create_date}
        body={item.body}
        // imgSrc={item.represent_image}
        href={`/post/${item.id}`}
      />
    ));

  // render Skeleton
  const renderSkeleton = () => {
    if (isLoading) {
      return (
        <Sv>
          <PostListSkeleton />
          <PostListSkeleton />
          <PostListSkeleton />
          <PostListSkeleton />
        </Sv>
      );
    }
  };

  return (
    <S.Container>
      <Sv row mt={60}>
        <NavButton title="JEREMY'S " />
        <TitleText title="blog" />
      </Sv>
      <Sv pb={12}></Sv>
      <Sv row gx={20}>
        {renderCategoryList()}
      </Sv>
      <Sv h={1} bg={colors.g5}></Sv>
      <Sv mb={40}>
        {renderSkeleton()}
        {renderPostList()}
      </Sv>
    </S.Container>
  );
}

const S: any = {};

const blur = css`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(30px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

S.Container = styled(Sv)`
  width: 1024px;
  max-height: 100vh;
  padding-left: 120px;
  padding-right: 120px;
  z-index: 1;
  overflow-y: scroll;
  ${blur}
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
`;
