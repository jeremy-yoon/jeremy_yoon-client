import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { Sv, St, Profile } from "components";
import { colors } from "styles/colors";
import { motion } from "framer-motion";
import { preventDrag } from "styles/global-styles";

interface NavButtonProps {
  href?: string;
  title: string;
  duration?: number;
  reverse?: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({
  href = "/",
  title = "title",
  duration = 1.0,
  reverse = false,
}) => {
  return (
    <Sv row>
      <Link href={href}>
        <S.SelectedH1 en duration={duration} reverse={reverse}>
          {title}
        </S.SelectedH1>
      </Link>
    </Sv>
  );
};

const S: any = {};

S.SelectedH1 = styled(St)<{ duration: number }>`
  font-size: 100px;
  font-weight: 800;
  color: black;
  line-height: 144px;
  cursor: pointer;

  transition: all 0.25s;
  /* animation-duration: ${(props) => props.duration}s !important; */

  :hover {
    transform: scale(1.05);
  }
`;
