import React, { useState, useEffect } from "react";
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
import { getPost } from "apis/service";

const LeftContainer: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState();

  const [isCommentModalOpen, setCommentModalOpen] = useState(undefined);

  useEffect(() => {
    if (id) {
      getPost(setPost, id);
    }
  }, [id]);

  return (
    <>
      <S.Container>
        <Sv mt={100} col>
          <St h2 g0 title>
            {post?.title}
          </St>
          <St b2 g3 mt={8}>
            {moment(post?.create_date).format("YYYY년 M월 D일")}
          </St>
        </Sv>
        <Sv mt={40}>
          <St b2 g0>
            {parse(`${post?.body}`)}
          </St>
        </Sv>
        <Sv mt={40} row gx={20}>
          <Sv pointer onClick={() => setCommentModalOpen(true)}>
            <St h3>🥚 (23)</St>
          </Sv>
          <Sv pointer onClick={() => setCommentModalOpen(true)}>
            <St h3>💬 (3)</St>
          </Sv>
        </Sv>
        {isCommentModalOpen && (
          <CommentModal
            postId={id}
            isCommentModalOpen={isCommentModalOpen}
            setCommentModalOpen={setCommentModalOpen}
          />
        )}
      </S.Container>
    </>
  );
};

export default LeftContainer;

const S: any = {};

const blur = css`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

S.Container = styled(Sv)`
  width: 1024px;
  max-height: 100vh;
  padding-left: 120px;
  padding-right: 120px;
  z-index: 1;
  overflow-y: scroll;
  ${blur}
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
`;
