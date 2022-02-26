import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sv, St, ButtonL, Profile } from "components";
import { Row, Col } from "antd";
import styled, { css } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { colors } from "styles/colors";

interface BottomNav {}

export default function BottomNav({ setCommentModalOpen }) {
  return (
    <S.Container jct pt={20}>
      <S.Wrapper w={1024} h={64} act jsb px={120}>
        <Sv row gx={20}>
          <Sv pointer onClick={() => setCommentModalOpen(true)}>
            <St b1>🥚 (23)</St>
          </Sv>
          <Sv pointer onClick={() => setCommentModalOpen(true)}>
            <St b1>💬 (3)</St>
          </Sv>
        </Sv>
        <Sv>
          <St b1>💌 공유하기</St>
        </Sv>
      </S.Wrapper>
      <Sv w={358} />
    </S.Container>
  );
}
const S: any = {};

const blur = css`
  background: ${colors.white};
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

S.Container = styled(Sv)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  overflow: hidden;
  padding-left: 40px;
  padding-right: 40px;
`;

S.Wrapper = styled(Sv)`
  ${blur}
`;
