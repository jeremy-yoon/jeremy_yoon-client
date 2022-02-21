import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, Profile, Comment, CommentInput } from "components";
import { Row, Col } from "antd";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import moment from "moment";
import { colors } from "styles/colors";
import parse from "html-react-parser";
import CommentModal from "./CommentModal";
import RecommendPost from "./RecommendPost";
import BottomNav from "./BottomNav";
import { getPost } from "apis/service";
import dummy from "images/dummy.png";

const LeftContainer: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const bottomNavRef = useRef<HTMLDivElement>(null);
  const [post, setPost] = useState();
  const [isCommentModalOpen, setCommentModalOpen] = useState(undefined);
  const [scrollY, setScrollY] = useState(0);
  const [bottomNavY, setBottomNavY] = useState(0);
  const [hitCount, setHitCount] = useState(0);

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
      return <BottomNav />;
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
    getBottomNavY();
  }, []);

  useEffect(() => {
    console.log("fdadfs");
  }, [scrollY]);

  return (
    <>
      <S.Container>
        <Sv px={120}>
          <Sv col>
            <St h2 g0 title>
              {post?.title}
            </St>
            <St b2 g3 mt={8}>
              {moment(post?.create_date).format("YYYY년 M월 D일")}
            </St>
          </Sv>
          <Sv mt={40}>
            <S.RepresentImage src={dummy} />
          </Sv>
          <Sv mt={40}>
            <St b2 g0>
              {parse(`${post?.body}`)}
            </St>
          </Sv>
          <Sv mt={40} row gx={20} ref={bottomNavRef}>
            <Sv pointer onClick={() => setCommentModalOpen(true)}>
              <St b1>🥚 ({hitCount})</St>
            </Sv>
            <Sv pointer onClick={() => setCommentModalOpen(true)}>
              <St b1>💬 (3)</St>
            </Sv>
          </Sv>
        </Sv>
        <RecommendPost />
      </S.Container>
      {renderBottomNav()}
      {renderCommentModal()}
    </>
  );
};

export default LeftContainer;

const S: any = {};

const blur = css`
  background: ${colors.g8};
  backdrop-filter: blur(30px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

S.Container = styled(Sv)`
  position: relative;
  width: 1024px;
  max-height: 100vh;
  padding-top: 120px;
  padding-bottom: 64px;
  z-index: 1;
  overflow-y: scroll;
  ${blur}
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
`;

S.RepresentImage = styled(Image)``;

S.BottomNavContainer = styled.div`
  position: fixed;
  bottom: 0;
`;
