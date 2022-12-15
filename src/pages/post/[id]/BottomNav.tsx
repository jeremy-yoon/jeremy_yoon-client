import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sv, St, ButtonL, Profile } from "components";
import { Row, Col } from "antd";
import styled, { css } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { colors } from "styles/colors";
import ic_comment from "images/svg/ic_comment.svg";
import ic_like from "images/svg/ic_like.svg";

interface BottomNavProps {
  setCommentModalOpen: Function;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  setCommentModalOpen,
}) => {
  const onClickLike = () => {};
  return (
    <S.Container jct pt={20}>
      <S.Wrapper h={64} act jsb>
        <Sv row gx={20}>
          <Sv pointer row act gx={8} onClick={onClickLike}>
            <Sv as={ic_like} width={24} height={24} stroke={colors.g3} />
            <St b2>0</St>
          </Sv>
          <Sv pointer row act gx={8} onClick={() => setCommentModalOpen(true)}>
            <Sv as={ic_comment} width={24} height={24} stroke={colors.g3} />
            <St b2>0</St>
          </Sv>
        </Sv>
        <Sv></Sv>
      </S.Wrapper>
      <S.Dummy w={358} />
    </S.Container>
  );
};
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
  right: 0;
  left: 0;
  z-index: 3;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

S.Dummy = styled(Sv)`
  width: 358px;
  @media only screen and (max-width: 768px) {
    width: 0px;
  }
`;

S.Wrapper = styled(Sv)`
  ${blur}
  padding-left: 160px;
  padding-right: 160px;
  width: 100%;
  max-width: 1024px;
  @media only screen and (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
