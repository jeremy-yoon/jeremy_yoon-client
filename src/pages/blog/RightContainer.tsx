import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sv, St, ButtonL, SearchInput, Profile } from "components";
import { Row, Col } from "antd";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getPostList } from "apis/service";
import { colors } from "styles/colors";

interface RightContainer {}

export default function RightContainer() {
  return (
    <S.Container>
      <Sv mt={120} col>
        <SearchInput />
        <Profile />
      </Sv>
    </S.Container>
  );
}

const S: any = {};

S.Container = styled(Sv)`
  width: 512px;
  padding-left: 40px;
  padding-right: 40px;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
`;
