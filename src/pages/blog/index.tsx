import React from "react";
import Image from "next/image";
import { Sv, St, ButtonL, PostList } from "components";
import styled from "styled-components";
import { colors } from "styles/colors";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import blog_bg from "images/blog-bg.jpg";

interface BlogScreen {}

export default function BlogScreen() {
  return (
    <S.Body>
      <S.bg>
        <Image src={blog_bg} width={1000} height={1000} />
      </S.bg>
      <LeftContainer />
      <RightContainer />
    </S.Body>
  );
}

const S: any = {};

S.Body = styled(Sv)`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

S.bg = styled(Sv)`
  position: absolute;
  top: 10%;
  right: 4%;
`;
