import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, MainLogo, GalleryCard } from "components";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import { colors } from "styles/colors";
import { Row, Col } from "antd";

const PortfolioScreen: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <S.Container>
        <Sv px={120} col>
          <MainLogo />
          <Sv row mt={16}>
            <St size={80} weight={800} text="포트폴리오" />
            <St size={80} weight={200} text="를" />
          </Sv>
          <St size={80} weight={200} text="둘러보세요." />
          <Sv col gy={40} mt={64}>
            <GalleryCard onClick={() => router.push()} />
            <GalleryCard />
            <GalleryCard />
          </Sv>
        </Sv>
      </S.Container>
    </>
  );
};

export default PortfolioScreen;

const S: any = {};

const blur = css`
  background: ${colors.g8};
  backdrop-filter: blur(30px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

S.Container = styled(Sv)`
  position: relative;
  width: 1024px;
  max-height: 100vh;
  padding-top: 72px;
  padding-bottom: 64px;
  z-index: 1;
  overflow-y: scroll;
  ${blur}
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
