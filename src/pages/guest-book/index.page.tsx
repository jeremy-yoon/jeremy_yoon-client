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
        <MainLogo />
        <Sv col>
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

S.Container = styled(Sv)`
  padding-top: 60px;
  width: 100%;
  max-width: 100vw;
  padding-left: 24px;
  padding-right: 24px;
  overflow: visible;
  background-color: pink;
  @media only screen and (max-width: 768px) {
    padding-top: 0px;
  }
`;

S.RepresentImage = styled(Image)``;

S.BottomNavContainer = styled.div`
  position: fixed;
  bottom: 0;
`;
