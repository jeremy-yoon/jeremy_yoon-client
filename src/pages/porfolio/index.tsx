import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sv, St, ButtonL, PostCardL, PostCardM, PostCardS } from "components";
import { Row, Col } from "antd";
import styled from "styled-components";
import { getRequest } from "apis/common";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function PortFolioMainScreen() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getPostList = async () => {
    try {
      const result = await getRequest("/post/");
      setPostList(result);
      console.log("getPostList", result);
    } catch (e) {
      console.log("getPost 에러", e);
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <S.Body>
      <S.Container>
        <Sv col py={120}>
          <St h1>안녕하세요.</St>
          <St h1>Jeremy Yoon 입니다.</St>
          {/* {isLoading && (
          <Skeleton circle height="100%" containerClassName="avatar-skeleton" />
        )} */}

          <Link href="/resume">
            <St b1 primary mt={20}>
              이력서 보기 {">"}
            </St>
          </Link>
        </Sv>
        <Sv mb={40}>
          <PostCardL
            href={{
              pathname: "/post",
              query: { id: 1 },
            }}
            title={postList[0]?.title}
            body={postList[0]?.body}
            // imgSrc={postList[0]?.represent_image}]
          />
        </Sv>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <PostCardS href="/post" />
          </Col>
          <Col span={8}>
            <PostCardS href="/post" />
          </Col>
          <Col span={8}>
            <PostCardS href="/post" />
          </Col>
        </Row>
        <Sv h={40} />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <PostCardM href="/post" />
          </Col>
          <Col span={12}>
            <PostCardM href="/post" />
          </Col>
        </Row>
      </S.Container>
    </S.Body>
  );
}

const S = {};

S.Body = styled(Sv)`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.Container = styled(Sv)`
  max-width: 1024px;
`;
