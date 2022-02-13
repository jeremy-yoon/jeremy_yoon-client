import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, ButtonL } from "components";
import dummy from "images/dummy.png";
import { colors } from "styles/colors";

interface SearchInputProps {
  href: string;
  imgSrc: StaticImageData;
  title: string;
  body: string;
  onClickSearch: Function;
  value: string;
  onChange: Function;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  href = "/",
  imgSrc = dummy,
  title = "title",
  body = "body",
  onClickSearch,
  value,
  onChange,
}) => {
  return (
    <>
      <S.Input
        placeholder="검색어를 입력하세요."
        value={value}
        onChange={onChange && onChange}
      />
    </>
  );
};

const S: any = {};

S.Image = styled(Image)``;

S.Input = styled.input`
  width: 100%;
  border-radius: 20px;
  padding: 8px;
  padding-left: 16px;
  border: 1px solid ${colors.g5};
  ::placeholder {
    color: ${colors.g3};
  }
`;
