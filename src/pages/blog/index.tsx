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
        <Sv pt={140} pb={32}>
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
            title={postList[0]?.title}
            body={postList[0]?.body}
          />
        </Sv>
      </S.Container>
    </S.Body>
  );
}

const S: any = {};

S.Body = styled(Sv)`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.Container = styled(Sv)`
  width: 1024px;
  border-left: 1px solid ${colors.g4};
  border-right: 1px solid ${colors.g4};
  padding-left: 80px;
  padding-right: 80px;
`;
