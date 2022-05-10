import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, ButtonL } from "components";
import dummy from "images/dummy.png";
import { colors } from "styles/colors";
import ic_search from "images/svg/ic_search.svg";
import { useRouter } from "next/router";

interface SearchInputProps {
  value: string;
  onChange: Function;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
}) => {
  const router = useRouter();

  const onClickEnter = () => {
    router.push(`/search?q=${value}`);
  };

  const onKeyPress = (event: { key: any }) => {
    const { key } = event;
    if (key === "Enter" && onClickEnter) onClickEnter();
  };

  return (
    <S.InputWrapper>
      <S.Icon width={14} />
      <S.Input
        placeholder="검색어를 입력하세요."
        value={value}
        onChange={onChange && onChange}
        onKeyPress={onKeyPress}
      />
    </S.InputWrapper>
  );
};

const S: any = {};

S.InputWrapper = styled(Sv)`
  position: relative;
`;

S.Input = styled.input`
  width: 100%;
  border-radius: 20px;
  padding: 8px;
  padding-left: 40px;
  border: 1px solid ${colors.g5};
  ::placeholder {
    color: ${colors.g3};
  }
`;

S.Icon = styled(ic_search)`
  position: absolute;
  top: 13px;
  left: 17px;
`;
