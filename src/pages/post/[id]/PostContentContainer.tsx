import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, Profile, Comment, CommentInput } from "components";
import { Row, Col } from "antd";
import styled from "styled-components";
import { getRequest, postRequest } from "apis/common";
import moment from "moment";
import { colors } from "styles/colors";
import parse from "html-react-parser";
import CommentModal from "./CommentModal";
import { getPost } from "apis/service";

const PostScreen: React.FC = () => {
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
    <S.Body>
      <Sv mt={100} col>
        <St h2 g0>
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
      <Sv row gx={20}>
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
    </S.Body>
  );
};

export default PostScreen;

const S: any = {};

S.Body = styled(Sv)`
  flex: 1;
  max-width: 512px;
`;
