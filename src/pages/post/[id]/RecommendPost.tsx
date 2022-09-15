import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, PostList } from "components";
import styled, { css } from "styled-components";
import { colors } from "styles/colors";

const RecommendPost: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <S.Container bg={colors.g10}>
      <Sv h={16} bg={colors.g6} mt={80} />
      <S.Wrapper py={80}>
        <Sv col>
          <St s1 g0 text="이 글을 다 읽었다면" />
          <St s1 g0 text="당신에게 더 추천할 만한 글들" />
        </Sv>
        <Sv mt={20}>
          {/* <PostList />
          <PostList />
          <PostList /> */}
        </Sv>
      </S.Wrapper>
    </S.Container>
  );
};

export default RecommendPost;

const S: any = {};

S.Container = styled(Sv)`
  padding-bottom: 64px;
`;

S.Wrapper = styled(Sv)`
  padding-left: 160px;
  padding-right: 160px;
  padding-top: 80px;
  @media only screen and (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
  }
`;
