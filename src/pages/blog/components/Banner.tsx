import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { Sv, St, Profile } from "components";
import { colors } from "styles/colors";
import { motion } from "framer-motion";
import { preventDrag } from "styles/global-styles";
import blog_sample from "images/blog-sample.jpeg";

interface BannerProps {}

export const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <S.Container>
      {/* <St s2 text="Jeremy의 개발 블로그" /> */}
      <S.TextContainer>
        <S.TextWrapper>
          <S.Title text="PROGRAMMING IS " />
        </S.TextWrapper>
        <S.TextWrapper>
          <S.Title text="Thinking." weight={800} italic />
        </S.TextWrapper>
        <S.TextWrapper row>
          <S.Title text="NOT" />
          <S.Title text=" Typing. " weight={800} italic />
        </S.TextWrapper>
      </S.TextContainer>
    </S.Container>
  );
};

const S: any = {};

const blur = css`
  background: rgba(233, 233, 237, 0.4);
  backdrop-filter: blur(30px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.04);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

S.Container = styled(Sv)`
  padding-top: 16px;
  /* padding: 32px; */
  /* background: ${colors.g7}; */
  /* border-bottom: 40px solid ${colors.g6}; */
  /* ${blur} */
`;

S.Title = styled(St)`
  line-height: 110px;
  font-size: 88px;
  font-weight: ${(props) => props.weight || 500};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  color: ${colors.g0};
  font-family: "Gilroy";
  @media only screen and (max-width: 414px) {
    font-size: 16vw;
  }
`;

S.TextContainer = styled(Sv)`
  /* background-color: ${colors.g5}; */
`;

S.TextWrapper = styled(Sv)`
  /* background: ${colors.g7}; */
  display: flex;
  width: fit-content;
`;
