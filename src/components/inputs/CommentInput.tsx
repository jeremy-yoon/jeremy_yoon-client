import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, ButtonL } from "components";
import dummy from "images/dummy.png";
import { colors } from "styles/colors";

interface CommentInputProps {
  onClickRegister: Function;
  value: string;
  onChange: Function;
}

export const CommentInput: React.FC<CommentInputProps> = ({
  onClickRegister,
  value,
  onChange,
}) => {
  return (
    <>
      <S.Container p={16}>
        <Sv row act>
          <St c1 g2>
            이름 :
          </St>
          <S.Input
            placeholder="작성자로 표시될 이름을 알려주세요.(최대 20자)"
            maxLength={30}
          />
        </Sv>
        <Sv h={1} bg={colors.g6} />
        <Sv mt={8}>
          <S.Textarea
            placeholder="댓글을 입력하세요.(최대 150자)"
            value={value}
            onChange={onChange && onChange}
            maxLength={150}
          />
        </Sv>
        <Sv jed>
          <St c1 g4 text={value?.length || 0 + "/150"} />
        </Sv>
        <Sv mt={8}>
          <ButtonL title="등록하기" onClick={onClickRegister} disabled={true} />
        </Sv>
      </S.Container>
      <Sv h={1} bg={colors.g6} />
    </>
  );
};

const S: any = {};

S.Image = styled(Image)``;

S.Container = styled(Sv)`
  background-color: ${colors.white};
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

S.Input = styled.input`
  width: 280px;
  border-radius: 2px;
  padding: 8px;
  border: none;
  font-size: 13px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${colors.g4};
  }
`;

S.Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 2px;
  padding: 8px 0px;
  border: none;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${colors.g4};
  }
`;
