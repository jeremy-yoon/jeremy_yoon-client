import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import useMouse from "@react-hook/mouse-position";
import styled, { css, keyframes } from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  bg,
  shape01,
  shape02,
  shape03,
  shape04,
  shape05,
  shape01_2,
  shape02_2,
  shape03_2,
  shape04_2,
  shape05_2,
} from "images/main";

export default function Background() {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 1900], [45, -45]);
  const rotateY = useTransform(x, [0, 1900], [-45, 45]);

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  ///////////////////////////////////

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition: any = 0;
  let mouseYPosition: any = 0;

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

  function projectEnter() {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter() {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <S.BGContainer onMouseMove={handleMouse}>
      {/* <motion.div
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
      </motion.div> */}
      <Image src={bg} layout="fill" objectFit="cover" />

      <S.Shape1_2 style={{ rotateX: rotateX, rotateY: rotateY }}>
        <Image src={shape01_2} width={1000} objectFit="scale-down" />
      </S.Shape1_2>
      <S.Shape1 style={{ rotateX: rotateX, rotateY: rotateY }}>
        <Image src={shape01} width={1000} objectFit="scale-down" />
      </S.Shape1>

      <S.Shape2_2 style={{ rotateX: rotateX, rotateY: rotateY }}>
        <Image src={shape02_2} width={500} objectFit="scale-down" />
      </S.Shape2_2>
      <S.Shape2 style={{ rotateX: rotateX, rotateY: rotateY }}>
        <Image src={shape02} width={500} objectFit="scale-down" />
      </S.Shape2>

      <S.Shape4_2 style={{ rotateX: rotateX, rotateY: rotateY }}>
        <Image src={shape04_2} width={500} objectFit="scale-down" />
      </S.Shape4_2>
      <S.Shape4 style={{ rotateX: rotateX, rotateY: rotateY }}>
        <Image src={shape04} width={500} objectFit="scale-down" />
      </S.Shape4>

      <S.Shape5_2 style={{ rotateX: rotateX, rotateY: rotateY }}>
        <Image src={shape05_2} width={1900} objectFit="scale-down" />
      </S.Shape5_2>
      <S.Shape5 style={{ rotateX: rotateX, rotateY: rotateY }}>
        <Image src={shape05} width={1900} objectFit="scale-down" />
      </S.Shape5>

      <S.Shape3_2 style={{ rotateX: rotateX, rotateY: rotateY }}>
        <Image src={shape03_2} width={800} objectFit="scale-down" />
      </S.Shape3_2>
      <S.Shape3 style={{ rotateX: rotateX, rotateY: rotateY }}>
        <Image src={shape03} width={800} objectFit="scale-down" />
      </S.Shape3>
    </S.BGContainer>
  );
}

const S: any = {};

const slideUp = keyframes`
  from {
    transform: translateX(200px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;

  }
`;

const globalStyle = css`
  position: absolute;
  mix-blend-mode: screen;
  transition-duration: 3s;
  perspective: 400;
`;

S.BGContainer = styled(motion.div)`
  position: fixed;
  left: 100px;
  right: 100px;
  top: 100px;
  bottom: 100px;
  overflow: hidden;
`;

S.Shape1 = styled(motion.div)`
  ${globalStyle}
  top: -600px;
  right: -200px;
`;
S.Shape1_2 = styled(S.Shape1)`
  mix-blend-mode: multiply !important;
`;

S.Shape2 = styled(motion.div)`
  ${globalStyle}
  top: -400px;
  left: 300px;
`;
S.Shape2_2 = styled(S.Shape2)`
  mix-blend-mode: multiply !important;
`;

S.Shape3 = styled(motion.div)`
  ${globalStyle}
  bottom: -400px;
  left: 200px;
`;
S.Shape3_2 = styled(S.Shape3)`
  mix-blend-mode: multiply !important;
`;

S.Shape4 = styled(motion.div)`
  ${globalStyle}
  bottom: -160px;
  right: 20px;
`;
S.Shape4_2 = styled(S.Shape4)`
  mix-blend-mode: multiply !important;
`;

S.Shape5 = styled(motion.div)`
  ${globalStyle}
  bottom: -600px;
  left: -680px;
`;
S.Shape5_2 = styled(S.Shape5)`
  mix-blend-mode: multiply !important;
`;

S.BG = styled.img``;
