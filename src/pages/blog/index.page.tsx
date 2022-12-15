import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sv,
  St,
  MainLogo,
  PostList,
  PostListSkeleton,
  SearchInput,
} from "components";
import { CategoryList, Banner } from "./components";
import { Row, Col } from "antd";
import styled, { css } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getCategoryList, getPostList } from "apis/service";
import { colors } from "styles/colors";
import moment from "moment";
import main_bg1 from "images/blog-bg.jpg";
import useMouse from "@react-hook/mouse-position";
import { motion, useTransform } from "framer-motion";
import dummy from "images/dummy.png";

interface BlogScreen {}

export default function BlogScreen() {
  const [postList, setPostList] = useState([] as any);
  const [categoryList, setCategoryList] = useState([] as any);
  const [isLoading, setLoading] = useState(true as boolean);
  const [selectedCategory, setSelectedCategory] = useState("All" as string);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    getCategoryList(setCategoryList);
    getPostList(setPostList, setLoading);
  }, []);

  // render post list
  const renderPostList = () =>
    postList.map((item: any, index: number) => (
      <PostList
        key={index}
        category={categoryList[item.category]?.title}
        title={item.title}
        date={item.create_date}
        body={item.body}
        imgSrc={
          item.represent_image
            ? `https://jeremy-yoon.com${item.represent_image}`
            : dummy
        }
        href={`/post/${item.id}`}
        likeCount={0}
        viewCount={0}
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

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition: any = 0;
  let mouseYPosition: any = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function contactEnter() {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <>
      <S.Container ref={ref}>
        {/* <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div> */}
        <Sv jsb act>
          <Sv onMouseEnter={contactEnter} onMouseLeave={contactLeave}>
            <MainLogo />
          </Sv>
          <S.SearchInputWrapper>
            <SearchInput
              value={searchKeyword}
              onChange={(e: any) => setSearchKeyword(e.target.value)}
            />
          </S.SearchInputWrapper>
        </Sv>
        <Banner />
        <CategoryList
          categoryList={categoryList}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Sv h={1} bg={colors.g5}></Sv>
        <Sv h={24} />
        {renderSkeleton()}
        {renderPostList()}
        <Sv h={40} />
      </S.Container>
    </>
  );
}

const S: any = {};

S.Container = styled(Sv)`
  padding-top: 60px;
  width: 742px;
  max-width: 100vw;
  padding-left: 24px;
  padding-right: 24px;
  overflow: visible;
  @media only screen and (max-width: 768px) {
    padding-top: 0px;
  }
`;

S.SearchInputWrapper = styled(Sv)`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
