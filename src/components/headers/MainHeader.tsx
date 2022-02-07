import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, Profile, ButtonL } from "components";
import dummy from "images/dummy.png";
import { Layout, Menu } from "antd";
import { colors } from "styles/colors";
const { Header } = Layout;

interface MainProps {}

export const MainHeader: React.FC<MainProps> = ({}) => {
  return (
    <S.Header>
      <S.Wrapper>
        <Link href="/">
          <Sv pointer>
            <S.Logo>Jeremy.yoon</S.Logo>
          </Sv>
        </Link>
        <Sv row act gx={8}>
          <Link href="/guest-book">
            <S.Item>방명록</S.Item>
          </Link>
          <a href="https://github.com/jeremy-yoon" target="_blank">
            <S.Item>깃허브</S.Item>
          </a>
          <ButtonL title="연락하기" href="/" />
        </Sv>
      </S.Wrapper>
    </S.Header>
  );
};

const S: any = {};

S.Logo = styled(St)`
  font-family: "Gilroy";
  cursor: pointer;
  font-weight: 700;
  font-size: 28px;
`;

S.Header = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.g4};
`;

S.Wrapper = styled(Sv)`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.Item = styled(Sv)`
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition-duration: 0.3s;
  :hover {
    background: ${colors.g6};
  }
`;

S.Image = styled(Image)``;
