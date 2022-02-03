import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, ButtonL } from "components";
import dummy from "images/dummy.png";
import { colors } from "styles/colors";

interface CommentInputProps {
  href: string;
  imgSrc: StaticImageData;
  title: string;
  body: string;
  onClickRegister: Function;
  value: string;
  onChange: Function;
}

export const CommentInput: React.FC<CommentInputProps> = ({
  href = "/",
  imgSrc = dummy,
  title = "title",
  body = "body",
  onClickRegister,
  value,
  onChange,
}) => {
  return (
    <>
      <Sv h={1} bg={colors.g6} />
      <Sv py={16}>
        <Sv row act>
          <St c1 g2>
            이름 :
          </St>
          <S.Input placeholder="작성자로 표시될 이름을 알려주세요." />
        </Sv>
        <Sv mt={8}>
          <S.Textarea
            placeholder="댓글을 입력하세요."
            value={value}
            onChange={onChange && onChange}
          />
        </Sv>
        <Sv mt={4}>
          <ButtonL title="등록하기" onClick={onClickRegister} href="/" />
        </Sv>
      </Sv>
      <Sv h={1} bg={colors.g6} />
    </>
  );
};

const S: any = {};

S.Image = styled(Image)``;

S.Input = styled.input`
  width: 280px;
  border-radius: 20px;
  padding: 8px;
  border: none;
  ::placeholder {
    color: ${colors.g3};
  }
`;

S.Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 20px;
  background-color: ${colors.g6};
  padding: 8px 16px;
  border: none;
`;
