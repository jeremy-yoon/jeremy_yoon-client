import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sv,
  St,
  ContactModal,
  PostCardL,
  PostCardM,
  PostCardS,
} from "components";
import { Row, Col } from "antd";
import styled, { css, keyframes } from "styled-components";
import { getRequest } from "apis/common";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import BlogScreen from "pages/blog/index.page";
import { colors } from "styles/colors";
import { NavButton, TitleText } from "./components";
import Background from "./Background";

export default function HomeMainContainer() {
  const [isContactModalVisible, setIsContactModalVisible] = useState(false);
  return (
    <S.Body>
      <S.Logo>Jeremy.yoon</S.Logo>
      <S.SideText>Created by Me ©2022</S.SideText>
      <Background />
      <S.MainContainer>
        <Sv ml={40} mt={40}>
          <Sv col>
            <TitleText title="Please" />
            <TitleText title="check my" duration={1.2} />
            <NavButton title="blog," duration={1.4} href="/blog" />
            <NavButton title="resume." href="/resume" />
            <TitleText title="If you wanna" duration={1.2} />
            <TitleText title="work with me," duration={1.4} />
            <NavButton
              title="Contact me!"
              onClick={() => setIsContactModalVisible(true)}
            />
          </Sv>
        </Sv>
      </S.MainContainer>
      <ContactModal
        isModalVisible={isContactModalVisible}
        setIsModalVisible={setIsContactModalVisible}
      />
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
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${colors.g7};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

S.MainContainer = styled(Sv)`
  height: 200vh;
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
  @media (max-width: 768px) {
    left: 40px;
    right: 40px;
    top: 40px;
    bottom: 40px;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
`;
