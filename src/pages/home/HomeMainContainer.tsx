import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sv, St, ButtonL, PostCardL, PostCardM, PostCardS } from "components";
import { Row, Col } from "antd";
import styled, { css, keyframes } from "styled-components";
import { getRequest } from "apis/common";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import BlogScreen from "pages/blog";
import { colors } from "styles/colors";
import { NavButton, TitleText } from "./components";
import bg1 from "images/main-bg1.jpg";
import bg2 from "images/main-bg2.jpg";
import ReactPageScroller from "react-page-scroller";

export default function HomeMainContainer() {
  return (
    <S.Body>
      <S.Logo>Jeremy.yoon</S.Logo>
      <S.SideText>Created by Me ©2022</S.SideText>
      <S.BGContainer>
        <Image src={bg2} layout="fill" objectFit="cover" />
      </S.BGContainer>
      <S.MainContainer>
        <Sv ml={40} mt={40}>
          <Sv col>
            <TitleText title="Please" />
            <TitleText title="check my" duration={1.2} />
            <NavButton title="blog," duration={1.4} href="/blog" />
            <NavButton title="resume." href="/resume" />
            <TitleText title="If you wanna" duration={1.2} />
            <TitleText title="work with me," duration={1.4} />
            <NavButton title="Contact me!" href="/contact" />
          </Sv>
        </Sv>
      </S.MainContainer>
    </S.Body>
  );
}

const S: any = {};

const slideUp = keyframes`
  from {
    transform: translateX(200px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;

  }
`;

const slidUpSet = css`
  animation-duration: 0.8s;
  animation-timing-function: ease;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
`;

S.Body = styled(Sv)`
  flex: 1;
  overflow: hidden;
  background-color: #e5e5e5;
`;

S.MainContainer = styled(Sv)`
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

S.BGContainer = styled(Sv)`
  position: absolute;
  left: 100px;
  right: 100px;
  top: 100px;
  bottom: 100px;
`;

S.BG = styled.img``;

S.Logo = styled(St)`
  position: absolute;
  right: 100px;
  top: 16px;
  font-family: "Gilroy";
  cursor: pointer;
  font-weight: 700;
  font-size: 44px;
`;

S.SideText = styled(St)`
  z-index: 1;
  position: absolute;
  right: -150px;
  bottom: 288px;
  font-family: "Gilroy";
  font-weight: 500;
  font-size: 24px;
  transform: rotate(90deg);
  letter-spacing: 0.4em;
`;
