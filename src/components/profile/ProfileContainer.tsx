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
import { getPost } from "apis/service";

interface ProfileContainer {
  bg: any;
}

export function ProfileContainer({ bg = "rgba(255, 255, 255, 0.4)" }) {
  const [recentReadPost, setRecentReadPost] = useRecoilState(
    userRecentReadPostAtom
  );

  const [recentPost1, setRecentPost1] = useState();
  const [recentPost2, setRecentPost2] = useState();
  const [recentPost3, setRecentPost3] = useState();

  useEffect(() => {
    if (recentReadPost[0]) {
      getPost(setRecentPost1, recentReadPost[0]);
    }
  }, [recentReadPost[0]]);

  useEffect(() => {
    if (recentReadPost[1]) {
      getPost(setRecentPost2, recentReadPost[1]);
    }
  }, [recentReadPost[1]]);

  useEffect(() => {
    if (recentReadPost[2]) {
      getPost(setRecentPost3, recentReadPost[2]);
    }
  }, [recentReadPost[2]]);

  return (
    <S.Container bg={bg}>
      <Sv mt={72} col>
        <SearchInput />
        <Profile />
        <Sv mt={48}>
          <St s2 g0 text="당신이 최근 본 포스트" />
          <Sv h={8} />
          {recentPost1 && (
            <PostListS
              title={recentPost1.title}
              date={recentPost1.create_date}
              body={recentPost1.body}
              imgSrc={
                recentPost1.represent_image
                  ? `http://127.0.0.1:8000${recentPost1.represent_image}`
                  : dummy
              }
              href={`/post/${recentPost1.id}`}
            />
          )}
          {recentPost2 && (
            <PostListS
              title={recentPost2.title}
              date={recentPost2.create_date}
              body={recentPost2.body}
              imgSrc={
                recentPost2.represent_image
                  ? `http://127.0.0.1:8000${recentPost2.represent_image}`
                  : dummy
              }
              href={`/post/${recentPost2.id}`}
            />
          )}
          {recentPost3 && (
            <PostListS
              title={recentPost3.title}
              date={recentPost3.create_date}
              body={recentPost3.body}
              imgSrc={
                recentPost3.represent_image
                  ? `http://127.0.0.1:8000${recentPost3.represent_image}`
                  : dummy
              }
              href={`/post/${recentPost3.id}`}
            />
          )}
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
  /* backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(4px); */
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

S.Container = styled(Sv)`
  position: relative;
  background: ${(props) => props.bg};
  overflow: hidden;
  width: 414px;
  padding-left: 40px;
  padding-right: 40px;
  z-index: 1;
  ${blur}
`;

S.Footer = styled(Sv)`
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 0;
  display: flex;
  flex-direction: column;
`;
