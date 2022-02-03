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
}

export const ButtonL: React.FC<ButtonLProps> = ({
  onClick,
  href = "/",
  title = "title",
}) => {
  return (
    <Link href={href}>
      <Sv
        onClick={onClick}
        act
        jct
        py={8}
        px={20}
        br={4}
        pointer
        bg={colors.black}
      >
        <St white>{title}</St>
      </Sv>
    </Link>
  );
};

const S: any = {};

S.Image = styled(Image)``;
