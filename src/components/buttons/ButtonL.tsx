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
}

export const ButtonL: React.FC<ButtonLProps> = ({
  onClick,
  href = "/",
  title = "title",
  line,
}) => {
  return (
    <Link href={href}>
      <S.Container
        onClick={onClick}
        act
        jct
        py={8}
        px={20}
        pointer
        bg={colors.g0}
        line={line}
      >
        <St white={!line}>{title}</St>
      </S.Container>
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
