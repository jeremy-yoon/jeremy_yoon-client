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
        <Sv col>
          <MainLogo />
          <Sv row mt={16}>
            <St h1 weight={800} text="주디, 좀 귀여운 슬라임" />
          </Sv>
          <Sv col gy={40} mt={64}>
            <Sv>
              <St s1 g0 text="Technical overview" />
              <Sv row gx={8} mt={20}>
                <St b1 g0 text="Next.js" />
                <St b1 g0 text="Django" />
                <St b1 g0 text="Framer-motion" />
              </Sv>
            </Sv>
            <Sv>
              <St s1 g0 text="개요" />
              <Sv row gx={8} mt={20}>
                <St b1 g0>
                  개요입니다.
                </St>
              </Sv>
            </Sv>
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
