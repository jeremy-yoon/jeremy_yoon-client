import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, MainLogo, GalleryCard } from "components";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import { colors } from "styles/colors";
import { Row, Col } from "antd";
import joodyMain from "./joody/images/joody-main.png";

const PortfolioScreen: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <S.Container>
        <Sv col>
          <MainLogo />
          <Sv row mt={16}>
            <St h1 weight={800} text="포트폴리오" />
            <St h1 weight={200} text="를" />
          </Sv>
          <St h1 weight={200} text="둘러보세요." />
          <Sv col gy={40} mt={64} mb={100}>
            <GalleryCard
              title="주디, 좀 귀여운 슬라임"
              imgSrc={joodyMain}
              href="/portfolio/joody"
              body="2022년 5월 ~ 현재"
            />
            <GalleryCard
              title="스매시, 쉽고 빠른 매칭"
              href="/portfolio/smaxh"
              body="2021월 12월 ~ 1월"
            />
            <GalleryCard
              title="샤벳, 새로운 웹소설"
              href="/portfolio/charbet"
              body="2021년 10월 ~ 2022년 1월"
            />
          </Sv>
        </Sv>
      </S.Container>
    </>
  );
};

export default PortfolioScreen;

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
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
`;

S.RepresentImage = styled(Image)``;

S.BottomNavContainer = styled.div`
  position: fixed;
  bottom: 0;
`;
