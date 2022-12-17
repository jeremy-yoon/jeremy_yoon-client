import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Sv,
  St,
  ButtonL,
  SearchInput,
  Profile,
  PostListS,
  PostListSSkeleton,
} from "components";
import { Row, Col } from "antd";
import styled, { css } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { colors } from "styles/colors";
import { useRecoilState } from "recoil";
import { userRecentReadPostAtom } from "recoil/atoms/user";
import { getPost } from "apis/service";
import dummy from "images/dummy.png";

interface ProfileContainer {
  bg: any;
}

export function ProfileContainer({ bg = "rgba(255, 255, 255, 0.4)" }) {
  const router = useRouter();
  const [recentReadPost, setRecentReadPost] = useRecoilState(
    userRecentReadPostAtom
  );

  const [isLoading, setLoading] = useState(true as boolean);

  const [searchKeyword, setSearchKeyword] = useState("");

  const [recentPost1, setRecentPost1] = useState({} as any);
  const [recentPost2, setRecentPost2] = useState({} as any);
  const [recentPost3, setRecentPost3] = useState({} as any);

  const renderSkeleton = () => {
    if (isLoading) {
      return (
        <Sv>
          <PostListSSkeleton />
          <PostListSSkeleton />
          <PostListSSkeleton />
        </Sv>
      );
    }
  };

  useEffect(() => {
    if (recentReadPost[0]) {
      getPost(setRecentPost1, setLoading, recentReadPost[0]);
    }
  }, [recentReadPost[0]]);

  useEffect(() => {
    if (recentReadPost[1]) {
      getPost(setRecentPost2, setLoading, recentReadPost[1]);
    }
  }, [recentReadPost[1]]);

  useEffect(() => {
    if (recentReadPost[2]) {
      getPost(setRecentPost3, setLoading, recentReadPost[2]);
    }
  }, [recentReadPost[2]]);

  return (
    <S.Container bg={bg}>
      <S.Wrapper>
        <Sv mt={72} col>
          <SearchInput
            value={searchKeyword}
            onChange={(e: any) => setSearchKeyword(e.target.value)}
          />
          <Profile />
          <Sv mt={48}>
            {Object.keys(recentPost1).length > 0 && (
              <St s2 g0 text="당신이 최근 본 포스트" />
            )}
            <Sv h={8} />
            {renderSkeleton()}
            {Object.keys(recentPost1).length > 0 && (
              <PostListS
                title={recentPost1.title}
                body={recentPost1.body}
                imgSrc={
                  recentPost1.represent_image
                    ? `https://api.jeremy-yoon.com${recentPost1.represent_image}`
                    : dummy
                }
                onClick={() => {
                  router.push(`/post/${recentPost1.id}`);
                }}
              />
            )}
            {Object.keys(recentPost2).length > 0 && (
              <PostListS
                title={recentPost2.title}
                body={recentPost2.body}
                imgSrc={
                  recentPost2.represent_image
                    ? `https://api.jeremy-yoon.com${recentPost2.represent_image}`
                    : dummy
                }
                onClick={() => {
                  router.push(`/post/${recentPost2.id}`);
                }}
              />
            )}
            {Object.keys(recentPost3).length > 0 && (
              <PostListS
                title={recentPost3.title}
                body={recentPost3.body}
                imgSrc={
                  recentPost3.represent_image
                    ? `https://api.jeremy-yoon.com${recentPost3.represent_image}`
                    : dummy
                }
                onClick={() => {
                  router.push(`/post/${recentPost3.id}`);
                }}
              />
            )}
          </Sv>
        </Sv>
        <S.Footer>
          <St s3 g3 weight={600} text="Technical overview" />
          <Sv mt={4} row gx={12} wrap>
            <a href="https://nextjs.org/" target="_blank">
              <St c1 g4 text="Next.js" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank">
              <St c1 g4 text="Typescript" />
            </a>
            <a href="https://www.djangoproject.com/" target="_blank">
              <St c1 g4 text="Django" />
            </a>
            <a href="https://www.framer.com/motion/" target="_blank">
              <St c1 g4 text="Framer-motion" />
            </a>
          </Sv>
          <St
            mt={16}
            b2
            g4
            text="Copyrightⓒ 2022 All rights reserved by Jeremy Yoon"
          />
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  );
}

const S: any = {};

const blur = css`
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

S.Container = styled(Sv)`
  position: relative;
  background: ${(props) => props.bg};
  overflow: hidden;
  width: 414px;
  min-width: 388px;
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;
  ${blur}
`;

S.Wrapper = styled(Sv)`
  padding-left: 24px;
  padding-right: 24px;
  min-width: 366px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

S.Footer = styled(Sv)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
`;
