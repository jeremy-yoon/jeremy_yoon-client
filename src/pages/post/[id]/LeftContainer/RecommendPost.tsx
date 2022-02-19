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
    <>
      <Sv h={12} bg={colors.g6} mt={80} />
      <Sv bg={colors.g7} py={80} px={120}>
        <Sv col>
          <St s1 g0 text="이 글을 다 읽었다면" />
          <St s1 g0 text="당신에게 더 추천할 만한 글들" />
        </Sv>
        <Sv mt={20}>
          <PostList />
          <PostList />
          <PostList />
        </Sv>
      </Sv>
    </>
  );
};

export default RecommendPost;

const S: any = {};

S.Container = styled(Sv)``;
