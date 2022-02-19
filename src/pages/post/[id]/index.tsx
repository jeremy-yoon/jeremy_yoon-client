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
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import BottomNav from "./BottomNav";

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
      <LeftContainer />
      <RightContainer />
      <BottomNav />
    </S.Body>
  );
};

export default PostScreen;

const S: any = {};

S.Body = styled(Sv)`
  background-color: ${colors.g6};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
