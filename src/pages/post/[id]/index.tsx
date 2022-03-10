import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, ProfileContainer, Navigation } from "components";
import { Row, Col } from "antd";
import styled from "styled-components";
import { getRequest, postRequest } from "apis/common";
import moment from "moment";
import { colors } from "styles/colors";
import parse from "html-react-parser";
import CommentModal from "./CommentModal";
import { getPost } from "apis/service";
import LeftContainer from "./LeftContainer";
import { useWindowSize } from "@react-hook/window-size";

const PostScreen: React.FC = () => {
  const [width] = useWindowSize();
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();
  const [isTablet, setIsTablet] = useState(false);
  const [isCommentModalOpen, setCommentModalOpen] = useState(undefined);

  const renderNavigation = () => {
    if (!isTablet) {
      return <Navigation />;
    }
  };

  const renderProfileContainer = () => {
    if (!isTablet) {
      return <ProfileContainer bg={colors.g8} />;
    }
  };

  useEffect(() => {
    setIsTablet(width < 1024);
  }, [width]);

  useEffect(() => {
    if (id) {
      getPost(setPost, id);
    }
  }, [id]);

  return (
    <S.Body gx={16}>
      {renderNavigation()}
      <LeftContainer />
      {renderProfileContainer()}
    </S.Body>
  );
};

export default PostScreen;

const S: any = {};

S.Body = styled(Sv)`
  background-color: ${colors.g7};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
