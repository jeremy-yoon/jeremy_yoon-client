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
            <St h0 weight={800} text="포트폴리오" />
            <St h0 weight={200} text="를" />
          </Sv>
          <St h0 weight={200} text="둘러보세요." />
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

S.RepresentImage = styled(Image)``;

S.BottomNavContainer = styled.div`
  position: fixed;
  bottom: 0;
`;
