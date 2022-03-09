import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sv, St, ButtonL, SearchInput, Profile, PostListS } from "components";
import { Row, Col } from "antd";
import styled, { css } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { colors } from "styles/colors";
import { useRecoilState } from "recoil";
import { userRecentReadPostAtom } from "recoil/atoms/user";

interface ProfileContainer {
  bg: any;
}

export function ProfileContainer({ bg = "rgba(255, 255, 255, 0.4)" }) {
  const [recentReadPost, setRecentReadPost] = useRecoilState(
    userRecentReadPostAtom
  );
  return (
    <S.Container bg={bg}>
      <Sv mt={72} col>
        <SearchInput />
        <Profile />
        <Sv mt={40}>
          <St s2 g0 text="당신이 최근 본 포스트" />
          <Sv h={16} />
          {/* {recentReadPost.map((post, index) => (
            <PostListS
              title={post}
              // key={index}
              // href={`/post/${post.id}`}
              // title={post.title}
              // date={post.create_date}
              // body={post.body}
              // imgSrc={post.represent_image}
            />
          ))} */}
          {recentReadPost[0] && <PostListS title={recentReadPost[0]} />}
          {recentReadPost[1] && <PostListS title={recentReadPost[1]} />}
          {recentReadPost[2] && <PostListS title={recentReadPost[2]} />}
        </Sv>
      </Sv>
      <S.Footer>
        <St s3 g3 weight={600} text="Powered by" />
        <Sv mt={4} row gx={12} wrap>
          <St c1 g4 text="Next.js" />
          <St c1 g4 text="Typescript" />
          <St c1 g4 text="Django" />
          <St c1 g4 text="Framer-motion" />
        </Sv>
        <St
          mt={16}
          b2
          g4
          text="Copyrightⓒ 2022 All rights reserved by Jeremy Yoon"
        />
      </S.Footer>
    </S.Container>
  );
}

const S: any = {};

const blur = css`
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

S.Container = styled(Sv)`
  background: ${(props) => props.bg};
  overflow: hidden;
  width: 414px;
  padding-left: 40px;
  padding-right: 40px;
  z-index: 1;
  ${blur}
`;

S.Footer = styled(Sv)`
  position: fixed;
  bottom: 40px;
  left: 40px;
  right: 0;
  display: flex;
  flex-direction: column;
`;
