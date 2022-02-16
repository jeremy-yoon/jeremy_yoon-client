import React from "react";
import Image from "next/image";
import { Sv, St, ButtonL, PostList } from "components";
import styled from "styled-components";
import { colors } from "styles/colors";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import blog_bg from "images/blog-bg.jpg";
import blog_bg2 from "images/blog-bg2.jpg";
import blog_bg3 from "images/blog-bg3.jpg";

interface BlogScreen {}

export default function BlogScreen() {
  return (
    <S.Body>
      <S.bg>
        <Image src={blog_bg} width={800} height={800} />
      </S.bg>
      <S.bg2>
        <Image src={blog_bg2} width={400} height={400} />
      </S.bg2>
      <S.bg3>
        <Image src={blog_bg3} width={400} height={400} />
      </S.bg3>
      <LeftContainer />
      <RightContainer />
    </S.Body>
  );
}

const S: any = {};

S.Body = styled(Sv)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
`;

S.bg = styled(Sv)`
  position: fixed;
  opacity: 0.6;
  top: 10%;
  right: -15%;
`;

S.bg2 = styled(Sv)`
  position: fixed;
  opacity: 0.2;
  top: 10%;
  right: 30%;
`;

S.bg3 = styled(Sv)`
  position: fixed;
  opacity: 0.2;
  bottom: 10%;
  left: 2%;
`;
