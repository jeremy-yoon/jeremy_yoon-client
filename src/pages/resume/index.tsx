import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, Profile, Comment, CommentInput } from "components";
import { Row, Col } from "antd";
import styled from "styled-components";
import { getRequest } from "apis/common";
import moment from "moment";
import { colors } from "styles/colors";
import parse from "html-react-parser";

export default function PostScreen() {
  return (
    <S.Body>
      <Sv mt={100} col>
        <St h2 g0 title>
          Jeremy Yoon 입니다.
        </St>
        <St b2 g3 mt={8}>
          업데이트 : 2022년 1월 17일
        </St>
      </Sv>
      <Sv mt={40}>
        <St b2 g0>
          본문 입니다.
        </St>
      </Sv>
      <Sv mt={100}>
        <Sv h={1} bg={colors.g6} />
        <CommentInput />
        <Comment />
        <Comment />
        <Comment />
      </Sv>
    </S.Body>
  );
}

const S = {};

S.Body = styled(Sv)`
  flex: 1;
  max-width: 512px;
`;
