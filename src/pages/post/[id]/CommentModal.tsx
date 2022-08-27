import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, Profile, Comment, CommentInput } from "components";
import { Row, Col } from "antd";
import styled, { keyframes, css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import moment from "moment";
import { colors } from "styles/colors";
import parse from "html-react-parser";

interface CommentModalProps {
  postId: any;
  isCommentModalOpen: boolean;
  setCommentModalOpen: Function;
}

const CommentModal: React.FC<CommentModalProps> = ({
  postId,
  isCommentModalOpen,
  setCommentModalOpen,
}) => {
  const [commentList, setCommentList] = useState([]);
  const [commentContent, setCommentContent] = useState("");

  const getCommentList = async () => {
    try {
      const result = await getRequest(`/${postId}/comments/`);
      setCommentList(result);
      console.log("getCommentList", result);
    } catch (e) {
      console.log(e);
    }
  };

  const postComment = async () => {
    try {
      const result = await postRequest(`/${postId}/comments/`, {
        content: commentContent,
      });
      console.log("postComment", result);
      getCommentList();
    } catch (e) {
      console.log(e);
    }
  };

  const renderCommentList = () => {
    if (commentList.length > 0) {
      return commentList.map((v: any) => (
        <Comment writer={v.writer} body={v.content} date={v.create_date} />
      ));
    } else {
      return (
        <Sv act jct f={1}>
          <St g4 b1 text="첫 번째로 댓글을 달아보세요!" />
        </Sv>
      );
    }
  };

  useEffect(() => {
    if (isCommentModalOpen) {
      getCommentList();
    }
  }, [isCommentModalOpen]);

  return (
    <>
      <S.Overlay
        onClick={() => setCommentModalOpen(false)}
        isCommentModalOpen={isCommentModalOpen}
      />
      <S.Body isCommentModalOpen={isCommentModalOpen}>
        <S.OpenButton onClick={() => setCommentModalOpen(!isCommentModalOpen)}>
          <St s1 ml={8}>
            💬
          </St>
        </S.OpenButton>
        <S.ModalContainer p={24} bg={colors.white} aed f={1}>
          <Sv col f={1} h="100%">
            <Sv h={1} bg={colors.g6} />
            <Sv f={1} col jed mb={24}>
              {renderCommentList()}
            </Sv>
            <CommentInput
              value={commentContent}
              onChange={(e: any) => setCommentContent(e.target.value)}
              onClickRegister={postComment}
            />
          </Sv>
        </S.ModalContainer>
      </S.Body>
    </>
  );
};

export default CommentModal;

const S: any = {};

const slideIn = keyframes`
	0%{
		right: -378px;
	}
	100%{
		right: 0px;
	}
`;

const slideOut = keyframes`
	0%{
		right: 0px;
	}
	100%{
		right: -378px;
	}
`;

S.Body = styled(Sv)`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: -378px;
  bottom: 0;
  width: 528px;
  display: flex;
  align-items: center;
  max-width: 512px;
  z-index: 100;

  animation-duration: 0.25s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  ${(props) =>
    props.isCommentModalOpen === false &&
    css`
      animation-name: ${slideOut} !important;
    `}
  ${(props) =>
    props.isCommentModalOpen === true &&
    css`
      animation-name: ${slideIn} !important;
    `}
`;

S.Overlay = styled(Sv)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: 1s;
  opacity: ${(props) => (props.isCommentModalOpen ? 1 : 0)};
  display: ${(props) => (props.isCommentModalOpen ? "inline" : "none")};
`;

S.OpenButton = styled(Sv)`
  height: 50px;
  width: 40px;
  margin-left: 10px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.08),
    0px 0px 1px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

S.ModalContainer = styled(Sv)`
  flex: 1;
  height: 100%;
`;
