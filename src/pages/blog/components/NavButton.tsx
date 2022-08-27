import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { Sv, St, Profile, MotionButton } from "components";
import { colors } from "styles/colors";
import { motion } from "framer-motion";
import { preventDrag } from "styles/global-styles";

interface NavButtonProps {
  href?: string;
  title: string;
  duration?: number;
  reverse?: boolean;
  onClick?: () => void;
}

export const NavButton: React.FC<NavButtonProps> = ({
  href = "/",
  title = "title",
  duration = 1.0,
  reverse = false,
  onClick = () => {},
}) => {
  return (
    <MotionButton onClick={onClick}>
      <Sv row>
        <S.SelectedH1 en duration={duration} reverse={reverse}>
          {title}
        </S.SelectedH1>
      </Sv>
    </MotionButton>
  );
};

const S: any = {};

S.SelectedH1 = styled(St)<{ duration: number }>`
  font-size: 80px;
  font-weight: 800;
  line-height: 1;
  color: black;
  cursor: pointer;

  transition: all 0.25s;
  /* animation-duration: ${(props) => props.duration}s !important; */
`;
