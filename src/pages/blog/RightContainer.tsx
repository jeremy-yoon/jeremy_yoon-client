import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sv, St, ButtonL, SearchInput } from "components";
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
        <Sv h={24} />
        <St s1 g0 text="Jeremy Yoon" />
        <St b1 g0 text="내 소개" />
        <Sv h={40} />
        <ButtonL title="연락하기" />
      </Sv>
    </S.Container>
  );
}

const S: any = {};

S.Container = styled(Sv)`
  width: 512px;
  padding-left: 40px;
`;
