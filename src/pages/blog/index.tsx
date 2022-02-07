import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sv, St, ButtonL, PostList } from "components";
import { Row, Col } from "antd";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getPostList } from "apis/service";
import { colors } from "styles/colors";

interface BlogScreen {}

export default function BlogScreen() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getPostList(setPostList);
  }, []);

  return (
    <S.Body>
      <S.Container>
        <Sv pt={120} pb={32}>
          <St h1>About</St>
          <St h1 ml={16}>
            everything
          </St>
        </Sv>
        <Sv mb={40}>
          <PostList
            href="/post/1/"
            title={postList[0]?.title}
            body={postList[0]?.body}
          />
          <PostList
            href="/post/1/"
            date="5 days ago"
            title="What You Need to Know About Cardano’s Potential in 2022"
            body="Addressing the Cardano drama — Is Cardano (ADA) a total failure? No. But it has been involved in a lot of drama lately. SundaeSwap, which is being"
          />
          <PostList
            href="/post/1/"
            date="5 days ago"
            title="What You Need to Know About Cardano’s Potential in 2022"
            body="Addressing the Cardano drama — Is Cardano (ADA) a total failure? No. But it has been involved in a lot of drama lately. SundaeSwap, which is being"
          />
          <PostList
            href="/post/1/"
            date="5 days ago"
            title="What You Need to Know About Cardano’s Potential in 2022"
            body="Addressing the Cardano drama — Is Cardano (ADA) a total failure? No. But it has been involved in a lot of drama lately. SundaeSwap, which is being"
          />
          <PostList
            href="/post/1/"
            date="5 days ago"
            title="What You Need to Know About Cardano’s Potential in 2022"
            body="Addressing the Cardano drama — Is Cardano (ADA) a total failure? No. But it has been involved in a lot of drama lately. SundaeSwap, which is being"
          />
          <PostList
            href="/post/1/"
            date="5 days ago"
            title="What You Need to Know About Cardano’s Potential in 2022"
            body="Addressing the Cardano drama — Is Cardano (ADA) a total failure? No. But it has been involved in a lot of drama lately. SundaeSwap, which is being"
          />
        </Sv>
      </S.Container>
      <S.SecondContainer>
        <Sv mt={120} col>
          <St s1 g0 text="Jeremy Yoon" />
          <St b1 g0 text="내 소개" />
          <ButtonL title="연락하기" />
        </Sv>
      </S.SecondContainer>
    </S.Body>
  );
}

const S: any = {};

S.Body = styled(Sv)`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

S.Container = styled(Sv)`
  width: 1024px;
  border-left: 1px solid ${colors.g4};
  border-right: 1px solid ${colors.g4};
  padding-left: 120px;
  padding-right: 120px;
`;

S.SecondContainer = styled(Sv)`
  width: 512px;
  padding-left: 40px;
`;
