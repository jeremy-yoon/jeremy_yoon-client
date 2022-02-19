import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sv, St, ButtonL, Profile } from "components";
import { Row, Col } from "antd";
import styled, { css } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getPostList } from "apis/service";
import { colors } from "styles/colors";

interface RightContainer {}

export default function RightContainer() {
  return (
    <S.Container>
      <Sv mt={120} col>
        <Profile />
      </Sv>
    </S.Container>
  );
}
const S: any = {};

const blur = css`
  background: ${colors.g7};
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

S.Container = styled(Sv)`
  overflow: hidden;
  width: 414px;
  padding-left: 40px;
  padding-right: 40px;
  z-index: 1;
  ${blur}
`;
