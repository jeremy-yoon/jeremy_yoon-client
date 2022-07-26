import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, MainLogo, Comment, CommentInput } from "components";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import { colors } from "styles/colors";

const GuestBookScreen: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <S.Container>
        <Sv col>
          <MainLogo />
          <Sv col mt={16}>
            <Sv row>
              <St h0 weight={800} text="방명록" />
              <St h0 weight={200} text="을" />
            </Sv>
            <St h0 weight={200} text="남겨주세요." />
          </Sv>
          <Sv col f={1} h="100%">
            <Sv h={1} bg={colors.g6} />
            <Sv f={1} col jed mb={24}>
              <Comment
                writer="Jeremy"
                body="방명록 기능을 업데이트 준비 중 입니다."
              />
            </Sv>
            <CommentInput />
          </Sv>
        </Sv>
      </S.Container>
    </>
  );
};

export default GuestBookScreen;

const S: any = {};

S.Container = styled(Sv)`
  padding-top: 60px;
  width: 742px;
  max-width: 100vw;
  padding-left: 24px;
  padding-right: 24px;
  overflow: visible;
  @media only screen and (max-width: 768px) {
    padding-top: 0px;
  }
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
