import "../styles/globals.css";
import "../styles/star-icon.css";
import "antd/dist/antd.css";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../styles/Home.module.css";
import "styles/Cursor.module.css";
import { Sv, St, MainHeader } from "components";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import { RecoilRoot } from "recoil";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  motion,
  useTransform,
} from "framer-motion";
import { animations } from "animations/animations";
import react, { useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";

const { Header, Content, Footer } = Layout;

interface MyAppProps {
  Component: any;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const startIndex = 0;
  const router = useRouter();
  const [animation, setAnimation] = useState(animations[startIndex]);

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function projectEnter(event) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <RecoilRoot>
      <Layout>
        {/* {router.pathname !== "/" && <MainHeader />} */}

        <S.Content>
          <LazyMotion features={domAnimation}>
            <AnimatePresence exitBeforeEnter>
              <m.div
                ref={ref}
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
              <motion.div
                variants={variants}
                className="circle"
                animate={cursorVariant}
                transition={spring}
              >
                <span className="cursorText">{cursorText}</span>
                <div className="contactWrapper">
                  <div
                    className="contact"
                    onMouseEnter={contactEnter}
                    onMouseLeave={contactLeave}
                  >
                    Want to Chat?
                  </div>
                </div>
              </motion.div>
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
