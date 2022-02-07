import "../styles/globals.css";
import "../styles/star-icon.css";
import "antd/dist/antd.css";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../styles/Home.module.css";
import { Sv, St, MainHeader } from "components";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import { RecoilRoot } from "recoil";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { animations } from "animations/animations";
import react, { useState } from "react";

const { Header, Content, Footer } = Layout;

interface MyAppProps {
  Component: any;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const startIndex = 0;
  const router = useRouter();
  const [animation, setAnimation] = useState(animations[startIndex]);

  return (
    <RecoilRoot>
      <Layout>
        {/* {router.pathname !== "/" && <MainHeader />} */}

        <S.Content>
          <LazyMotion features={domAnimation}>
            <AnimatePresence exitBeforeEnter>
              <m.div
                key={router.route.concat(animation.name)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                variants={animation.variants}
                style={{ width: "100vw" }}
              >
                <Component {...pageProps} />
              </m.div>
            </AnimatePresence>
          </LazyMotion>
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

export default MyApp;
