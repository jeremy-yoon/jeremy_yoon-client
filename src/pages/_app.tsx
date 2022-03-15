import "../styles/globals.css";
import "../styles/star-icon.css";
import "antd/dist/antd.css";
import "react-loading-skeleton/dist/skeleton.css";
import "styles/cursor.css";
import { Sv, St, ProfileContainer, Navigation } from "components";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import { RecoilRoot } from "recoil";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { animations } from "animations/animations";
import React, { useState, useEffect } from "react";
import { useWindowSize } from "@react-hook/window-size";
import blog_bg from "images/blog-bg.jpg";
import blog_bg2 from "images/blog-bg2.jpg";
import blog_bg3 from "images/blog-bg3.jpg";

const { Header, Content, Footer } = Layout;

interface MyAppProps {
  Component: any;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const startIndex = 0;
  const router = useRouter();
  const [animation, setAnimation] = useState(animations[startIndex]);
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
    <RecoilRoot>
      <Layout>
        <S.Content>
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
            <LazyMotion features={domAnimation}>
              <AnimatePresence exitBeforeEnter>
                <m.div
                  key={router.route.concat(animation.name)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  variants={animation.variants}
                >
                  <Component {...pageProps} />
                </m.div>
              </AnimatePresence>
            </LazyMotion>
            {renderProfileContainer()}
          </S.Body>
        </S.Content>
      </Layout>
    </RecoilRoot>
  );
};

const S: any = {};

S.Content = styled(Sv)`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  /* padding-top: 64px; */
  background: white;
`;

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

export default MyApp;
