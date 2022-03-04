import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sv, St, MainLogo, PostList, PostListSkeleton } from "components";
import { CategoryList, TitleText, NavButton } from "./components";
import { Row, Col } from "antd";
import styled, { css } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getCategoryList, getPostList } from "apis/service";
import { colors } from "styles/colors";
import moment from "moment";
import main_bg1 from "images/blog-bg.jpg";
import useMouse from "@react-hook/mouse-position";
import { motion, useTransform } from "framer-motion";

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
        imgSrc={`http://127.0.0.1:8000${item.represent_image}`}
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

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

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

  function contactEnter(event) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <>
      <S.Container ref={ref}>
        <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div>
        <S.Bg>
          {/* <Image src={main_bg1} layout="fill" objectFit="cover" /> */}
        </S.Bg>
        <Sv>
          <Sv onMouseEnter={contactEnter} onMouseLeave={contactLeave}>
            <MainLogo />
          </Sv>
          <Sv row mt={16}>
            <S.Title>
              WELCOME
              <S.Title text=" to" weight={200} italic />
            </S.Title>
          </Sv>
          <Sv>
            <S.Title text="JEREMY'S BLOG" />
          </Sv>
        </Sv>
        <Sv mt={30} row act gx={20}>
          {renderCategoryList()}
        </Sv>
        <Sv h={1} bg={colors.g5}></Sv>
        <Sv h={24} />
        {renderSkeleton()}
        {renderPostList()}
        {renderPostList()}
        <Sv h={40} />
      </S.Container>
    </>
  );
}

const S: any = {};

const blur = css`
  background: rgba(255, 255, 255, 0.6);
  /* backdrop-filter: blur(30px); */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

S.Container = styled(Sv)`
  width: 1024px;
  max-height: 100vh;
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 60px;
  z-index: 1;
  overflow-y: scroll;
  ${blur}
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
  }
`;

S.Bg = styled(Sv)`
  position: absolute;
  top: 24px;
  left: 24px;
  right: 24px;
  height: 250px;
  z-index: -1;
`;

S.Title = styled(St)`
  font-size: 80px;
  font-weight: ${(props) => props.weight || 800};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  color: ${colors.g0};
  font-family: "Gilroy";
  @media only screen and (max-width: 414px) {
    font-size: 16vw;
  }
`;
