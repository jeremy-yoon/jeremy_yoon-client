import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, PostList } from "components";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import { colors } from "styles/colors";

const PortfolioScreen: React.FC = () => {
  const router = useRouter();

  const [keyword, setKeyword] = useState("keyword" as any);

  useEffect(() => {
    setKeyword(router.query.q);
  }, [router]);

  return (
    <S.Container>
      <Sv col>
        <Sv row mt={64}>
          <St h2 weight={800} text={`${keyword}`} />
          <St h2 weight={200} text="에 대한 검색결과" />
        </Sv>
        <Sv h={1} bg={colors.g5} my={20} />
      </Sv>
    </S.Container>
  );
};

export default PortfolioScreen;

const S: any = {};

S.Container = styled(Sv)`
  padding-top: 60px;
  width: 742px;
  max-width: 100vw;
  padding-left: 24px;
  padding-right: 24px;
  overflow: visible;
  @media only screen and (max-width: 768px) {
    padding-top: 0px;
  }
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
`;
