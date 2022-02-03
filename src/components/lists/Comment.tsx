import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, Profile } from "components";
import dummy from "images/dummy.png";
import { colors } from "styles/colors";
import moment from "moment";

interface CommentProps {
  href: string;
  imgSrc: StaticImageData;
  body: string;
  date: string;
}

export const Comment: React.FC<CommentProps> = ({
  href = "/",
  imgSrc = dummy,
  body = "body",
  date,
}) => {
  return (
    <>
      <Sv py={12}>
        <Sv>
          <St s3>작성자</St>
          <St c2 g2 ml={8}>
            {moment(date).format("YYYY년 M월 D일")}
          </St>
        </Sv>
        <Sv row>
          <S.Bubble mt={8}>
            <St>{body}</St>
          </S.Bubble>
        </Sv>
      </Sv>
    </>
  );
};

const S: any = {};

S.Bubble = styled(Sv)`
  border-radius: 20px;
  background-color: ${colors.g6};
  padding: 8px 16px;
  display: flex;
`;
