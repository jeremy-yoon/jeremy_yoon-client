import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Sv, St, ButtonL, ProfileContainer, Navigation } from "components";
import styled from "styled-components";
import { colors } from "styles/colors";
import LeftContainer from "./LeftContainer";
import blog_bg from "images/blog-bg.jpg";
import blog_bg2 from "images/blog-bg2.jpg";
import blog_bg3 from "images/blog-bg3.jpg";
import { useWindowSize } from "@react-hook/window-size";

interface BlogScreen {}

export default function BlogScreen() {
  const [width] = useWindowSize();
  const [isTablet, setIsTablet] = useState(false);

  const renderProfileContainer = () => {
    if (!isTablet) {
      return <ProfileContainer />;
    }
  };

  const renderNavigation = () => {
    if (!isTablet) {
      return <Navigation />;
    }
  };

  useEffect(() => {
    setIsTablet(width < 1024);
  }, [width]);

  return (
    <S.Body gx={16}>
      <Head>
        <title>Jelog</title>
      </Head>
      <S.bg>
        <Image src={blog_bg} width={800} height={800} />
      </S.bg>
      <S.bg2>
        <Image src={blog_bg2} width={400} height={400} />
      </S.bg2>
      <S.bg3>
        <Image src={blog_bg3} width={400} height={400} />
      </S.bg3>
      {renderNavigation()}
      <LeftContainer />
      {renderProfileContainer()}
    </S.Body>
  );
}

const S: any = {};

S.Body = styled(Sv)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
`;

S.bg = styled(Sv)`
  position: fixed;
  opacity: 0.8;
  top: 10%;
  right: -15%;
`;

S.bg2 = styled(Sv)`
  position: fixed;
  opacity: 0.3;
  top: 10%;
  right: 30%;
`;

S.bg3 = styled(Sv)`
  position: fixed;
  opacity: 0.3;
  bottom: 10%;
  left: 2%;
`;
