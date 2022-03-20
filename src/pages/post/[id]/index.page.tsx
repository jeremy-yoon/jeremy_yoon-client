import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, MainLogo, Comment, CommentInput } from "components";
import { Row, Col } from "antd";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import moment from "moment";
import { colors } from "styles/colors";
import parse from "html-react-parser";
import CommentModal from "./CommentModal";
import RecommendPost from "./RecommendPost";
import { BottomNav } from "./BottomNav";
import { getPost } from "apis/service";
import dummy from "images/dummy.png";
import ic_comment from "images/svg/ic_comment.svg";
import ic_like from "images/svg/ic_like.svg";
import { useTitle } from "react-use";
import Head from "next/head";
import { useRecoilState } from "recoil";
import {
  userRecentReadPostAtom,
  userTotalReadHistoryAtom,
} from "recoil/atoms/user";

const PostScreen: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const bottomNavRef = useRef<HTMLDivElement>(null);
  const [post, setPost] = useState([] as any);
  const [isCommentModalOpen, setCommentModalOpen] = useState(
    undefined as undefined | boolean
  );
  const [scrollY, setScrollY] = useState(0);
  const [bottomNavY, setBottomNavY] = useState(0);
  const [hitCount, setHitCount] = useState(0);

  const [recentReadPost, setRecentReadPost] = useRecoilState(
    userRecentReadPostAtom
  );
  const [totalReadHistory, setTotalReadHistory] = useRecoilState(
    userTotalReadHistoryAtom
  );

  //get y position of bottomNav
  const getBottomNavY = () => {
    if (bottomNavRef.current) {
      console.log(
        "bottomNavRef.current",
        bottomNavRef.current.getBoundingClientRect().top
      );
      setBottomNavY(bottomNavRef.current.getBoundingClientRect().top);
    }
    return 0;
  };

  const renderBottomNav = () => {
    if (scrollY < bottomNavY) {
      return <BottomNav setCommentModalOpen={setCommentModalOpen} />;
    }
  };

  const renderCommentModal = () => {
    if (isCommentModalOpen) {
      return (
        <CommentModal
          postId={id}
          isCommentModalOpen={isCommentModalOpen}
          setCommentModalOpen={setCommentModalOpen}
        />
      );
    }
  };

  useEffect(() => {
    if (id) {
      getPost(setPost, id);
    }
  }, [id]);

  useEffect(() => {
    //null값이 아닐 때만 실행
    if (id) {
      //현재 게시물의 id가 "최근 본 게시물 리스트"의 첫 번째 원소로 존재한다면 리스트를 변경시키지 않는다.
      if (recentReadPost[0] == id) {
        setRecentReadPost([...recentReadPost]);
        //현재 게시물의 id가 "최근 본 게시물 리스트"의 두 번째 원소로 존재한다면 두 번째 원소를 첫 번째 자리로 놓고, 첫 번째 원소를 두 번째 자리에 놓는다.
      } else if (recentReadPost[1] == id) {
        setRecentReadPost([
          recentReadPost[1],
          recentReadPost[0],
          recentReadPost[2],
        ]);
        //현재 게시물의 id가 "최근 본 게시물 리스트"의 세 번째 원소로 존재한다면 세 번째 원소를 첫 번째 자리로 놓고, 첫 번째 원소를 세 번째 자리에 놓는다.
      } else if (recentReadPost[2] == id) {
        setRecentReadPost([
          recentReadPost[2],
          recentReadPost[0],
          recentReadPost[1],
        ]);
        //현재 게시물의 id가 "최근 본 게시물 리스트"에 존재하지 않는다면, 현재 게시물의 id를 첫 번째 자리에 놓고, 마지막 원소는 삭제한다.
      } else if (!recentReadPost.includes(id)) {
        setRecentReadPost([id, recentReadPost[0], recentReadPost[1]]);
      }
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      //읽은 모든 기록을 저장.
      setTotalReadHistory([...totalReadHistory, id]);
    }
  });

  useEffect(() => {
    getBottomNavY();
  }, []);

  useEffect(() => {
    console.log("fdadfs");
  }, [scrollY]);

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <S.Container>
        <S.Wrapper>
          <MainLogo />
          <Sv col mt={40}>
            <St h2 g0 weight={400}>
              {post?.title}
            </St>
            <Sv row mt={8}>
              <St b2 g3 mr={8}>
                by Jeremy Yoon
              </St>
              <St b2 g4>
                {moment(post?.create_date).format("YYYY년 M월 D일")}
              </St>
            </Sv>
          </Sv>
          <Sv mt={64}>
            {post?.represent_image && (
              <S.ImageWrapper>
                <Image
                  src={`http://127.0.0.1:8000${post?.represent_image}`}
                  layout="fill"
                  objectFit="cover"
                />
              </S.ImageWrapper>
            )}
          </Sv>
          <Sv mt={40}>
            <St b2 g0>
              {parse(`${post?.body}`)}
            </St>
          </Sv>
          <Sv mt={40} row gx={20} ref={bottomNavRef}>
            <Sv
              pointer
              row
              act
              gx={8}
              onClick={() => setCommentModalOpen(true)}
            >
              <Sv as={ic_like} width={24} height={24} stroke={colors.g3} />
              <St b2>3</St>
            </Sv>
            <Sv
              pointer
              row
              act
              gx={8}
              onClick={() => setCommentModalOpen(true)}
            >
              <Sv as={ic_comment} width={24} height={24} stroke={colors.g3} />
              <St b2>3</St>
            </Sv>
          </Sv>
        </S.Wrapper>
        <RecommendPost />
      </S.Container>
      {renderBottomNav()}
      {renderCommentModal()}
    </>
  );
};

export default PostScreen;

const S: any = {};

S.Container = styled(Sv)`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 64px;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    padding-top: 24px;
  }
`;

S.Wrapper = styled(Sv)`
  padding-left: 160px;
  padding-right: 160px;
  @media only screen and (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

S.BottomNavContainer = styled.div`
  position: fixed;
  bottom: 0;
`;

S.ImageWrapper = styled(Sv)`
  position: relative;
  height: 400px;
`;
