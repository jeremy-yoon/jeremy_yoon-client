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
        <Sv px={120} col>
          <MainLogo />
          <Sv row mt={16}>
            <St size={80} weight={200} text="안녕하세요." />
          </Sv>
          <St size={80} weight={800} text="방명록을" />
          <St size={80} weight={200} text="작성해보세요." />
        </Sv>
      </S.Container>
    </>
  );
};

export default GuestBookScreen;

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
  min-height: 100vh;
  width: 1024px;
  max-height: 100vh;
  padding-top: 72px;
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
