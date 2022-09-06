import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Sv,
  St,
  MainLogo,
  LinkWithThumbnailList,
  CommentInput,
} from "components";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import { colors } from "styles/colors";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Introduce from "./components/Introduce";
import Skills from "./components/Skills";
import Education from "./components/Education";

const ResumeScreen: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <S.Container>
        <Sv col pb={100}>
          <MainLogo />
          <Introduce />
          <Sv mt={80} col>
            <Experiences />
          </Sv>
          <Projects />
          <Sv mt={80} col>
            <Skills />
          </Sv>
          <Sv mt={80} col>
            <Education />
          </Sv>
        </Sv>
      </S.Container>
    </>
  );
};

export default ResumeScreen;

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

S.H3 = styled(St)`
  font-size: 32px;
  /* font-weight: 500; */
`;

S.S1 = styled(St)`
  font-size: 26px;
  font-weight: 600;
`;

S.S2 = styled(St)`
  font-size: 19px;
  font-weight: 500;
  margin-top: 8px;
  margin-bottom: 16px;
  color: ${colors.g4};
`;

S.Ul = styled(St)`
  display: flex;
  flex-direction: column;
`;

S.Li = styled(St)`
  margin-left: 16px;
  line-height: 1.5;
  color: ${colors.g2};
`;

S.TitleLi = styled(St)`
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 6px;
`;

S.LinkWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 100px;
`;

S.ProjectWrapper = styled(St)`
  margin-top: 32px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;
