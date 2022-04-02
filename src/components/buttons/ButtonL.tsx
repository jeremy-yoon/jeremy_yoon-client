import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, Profile } from "components";
import dummy from "images/dummy.png";
import { colors } from "styles/colors";

interface ButtonLProps {
  onClick?: Function;
  href?: string;
  title: string;
  line?: boolean;
  isOpenNewTab?: boolean;
}

export const ButtonL: React.FC<ButtonLProps> = ({
  onClick,
  href = "/",
  title = "title",
  line,
  isOpenNewTab,
}) => {
  return (
    <Link href={href}>
      <a
        href={isOpenNewTab ? href : ""}
        target={isOpenNewTab ? "_blank" : "_self"}
      >
        <S.Container
          onClick={onClick}
          act
          jct
          py={8}
          px={20}
          pointer
          line={line}
        >
          <St s4 white={!line}>
            {title}
          </St>
        </S.Container>
      </a>
    </Link>
  );
};

const S: any = {};

S.Image = styled(Image)``;

S.Container = styled(Sv)`
  border-radius: 2px;
  background-color: ${(props: any) => (props.line ? "transparent" : colors.g0)};
  border: ${(props: any) => (props.line ? `1px solid ${colors.g4}` : "none")};
`;
