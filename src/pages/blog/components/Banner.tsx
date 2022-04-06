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

S.Container = styled(Sv)`
  padding-top: 16px;
`;

S.Title = styled(St)`
  line-height: min(15vw, 110px);
  font-size: min(10vw, 80px);
  font-weight: ${(props) => props.weight || 500};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  color: ${colors.g0};
  font-family: "Gilroy";
`;

S.TextContainer = styled(Sv)``;

S.TextWrapper = styled(Sv)`
  display: flex;
  width: fit-content;
`;
