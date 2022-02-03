import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, Profile, Comment, CommentInput, PostIt } from "components";
import { Row, Col } from "antd";
import styled from "styled-components";
import { getRequest } from "apis/common";
import moment from "moment";
import { colors } from "styles/colors";

export default function GuestBookScreen() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <S.Body>
      <Sv mt={100} col>
        <St h2 g0>
          방명록
        </St>
      </Sv>
      <Sv mt={40}>
        <St b2 g0>
          작성해주세용
        </St>
      </Sv>
      <Sv mt={100}>
        <Sv h={1} bg={colors.g6} />
        <PostIt />
        <PostIt />
        <PostIt />
        <CommentInput />
      </Sv>
    </S.Body>
  );
}

const S = {};

S.Body = styled(Sv)`
  flex: 1;
  max-width: 512px;
`;
