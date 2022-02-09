import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sv, St, ButtonL, PostCardL, PostCardM, PostCardS } from "components";
import styled, { css, keyframes } from "styled-components";
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
  return (
    <S.BGContainer>
      <Image src={bg} layout="fill" objectFit="cover" />
      <S.Shape1_2>
        <Image src={shape01_2} width={1000} objectFit="scale-down" />
      </S.Shape1_2>
      <S.Shape1>
        <Image src={shape01} width={1000} objectFit="scale-down" />
      </S.Shape1>
      <S.Shape2_2>
        <Image src={shape02_2} width={500} objectFit="scale-down" />
      </S.Shape2_2>
      <S.Shape2>
        <Image src={shape02} width={500} objectFit="scale-down" />
      </S.Shape2>

      <S.Shape4_2>
        <Image src={shape04_2} width={500} objectFit="scale-down" />
      </S.Shape4_2>
      <S.Shape4>
        <Image src={shape04} width={500} objectFit="scale-down" />
      </S.Shape4>
      <S.Shape5_2>
        <Image src={shape05_2} width={1900} objectFit="scale-down" />
      </S.Shape5_2>
      <S.Shape5>
        <Image src={shape05} width={1900} objectFit="scale-down" />
      </S.Shape5>
      <S.Shape3_2>
        <Image src={shape03_2} width={800} objectFit="scale-down" />
      </S.Shape3_2>
      <S.Shape3>
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

S.BGContainer = styled(Sv)`
  position: absolute;
  left: 100px;
  right: 100px;
  top: 100px;
  bottom: 100px;
  overflow: hidden;
`;

S.Shape1 = styled(Sv)`
  position: absolute;
  top: -600px;
  right: -200px;
  mix-blend-mode: screen;
`;
S.Shape1_2 = styled(S.Shape1)`
  mix-blend-mode: multiply !important;
`;

S.Shape2 = styled(Sv)`
  position: absolute;
  top: -400px;
  left: 300px;
  mix-blend-mode: screen;
`;
S.Shape2_2 = styled(S.Shape2)`
  mix-blend-mode: multiply !important;
`;

S.Shape3 = styled(Sv)`
  position: absolute;
  bottom: -400px;
  left: 200px;
  mix-blend-mode: screen;
`;
S.Shape3_2 = styled(S.Shape3)`
  mix-blend-mode: multiply !important;
`;

S.Shape4 = styled(Sv)`
  position: absolute;
  bottom: -160px;
  right: 20px;
  mix-blend-mode: screen;
`;
S.Shape4_2 = styled(S.Shape4)`
  mix-blend-mode: multiply !important;
`;

S.Shape5 = styled(Sv)`
  position: absolute;
  bottom: -600px;
  left: -680px;
  mix-blend-mode: screen;
`;
S.Shape5_2 = styled(S.Shape5)`
  mix-blend-mode: multiply !important;
`;

S.BG = styled.img``;
