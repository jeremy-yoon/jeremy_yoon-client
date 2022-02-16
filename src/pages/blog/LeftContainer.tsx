import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sv, St, ButtonL, PostList } from "components";
import { CategoryList, TitleText, NavButton } from "./components";
import { Row, Col } from "antd";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getCategoryList, getPostList } from "apis/service";
import { colors } from "styles/colors";
import moment from "moment";

interface LeftContainer {}

export default function LeftContainer() {
  const [postList, setPostList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    getCategoryList(setCategoryList);
    getPostList(setPostList);
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
        date={moment(item.create_date).format("YYYY-MM-DD")}
        body={item.body}
        imgSrc={item.represent_image}
        href={`/post/${item.id}`}
      />
    ));

  // render Skeleton
  const renderSkeleton = () => {
    if (isLoading) {
      return (
        <SkeletonTheme color={colors.gray}>
          <Skeleton count={10} />
        </SkeletonTheme>
      );
    }
  };

  return (
    <S.Container>
      <Sv row mt={60}>
        <NavButton title="Do it for " />
        <TitleText title="fun" />
      </Sv>
      <Sv pb={24}></Sv>
      <Sv row gx={20}>
        {renderCategoryList()}
      </Sv>
      <Sv h={1} bg={colors.g4}></Sv>
      <Sv mb={40}>
        {renderSkeleton()}
        {renderPostList()}
      </Sv>
    </S.Container>
  );
}

const S: any = {};

S.Container = styled(Sv)`
  width: 1024px;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  padding-left: 120px;
  padding-right: 120px;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.5);
`;
