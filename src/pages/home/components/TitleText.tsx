import React from "react";
import styled, { css } from "styled-components";
import { Sv, St, Profile } from "components";
import { slidUpSet } from "../animations/SlideUpSet";
import { colors } from "styles/colors";
import { preventDrag } from "styles/global-styles";

interface TitleTextProps {
  href?: string;
  title: string;
  duration?: number;
  reverse?: boolean;
}

export const TitleText: React.FC<TitleTextProps> = ({
  href = "/",
  title = "title",
  duration = 1.0,
}) => {
  return (
    <S.SelectedH1 en duration={duration}>
      {title}
    </S.SelectedH1>
  );
};

const S: any = {};

const textShadow = css`
  text-shadow: -1px -1px 0 ${colors.black}, 1px -1px 0 ${colors.black},
    -1px 1px 0 ${colors.black}, 1px 1px 0 ${colors.black};
`;

S.SelectedH1 = styled(St)<{ reverse: boolean; duration: number }>`
  font-size: 170px;
  font-weight: 800;
  color: white;
  filter: invert(100%);
  mix-blend-mode: difference;
  letter-spacing: 0.05em;
  line-height: 144px;
  ${preventDrag}

  transition: all 0.25s linear;
  animation-duration: ${(props) => props.duration}s !important;
  ${textShadow}/* ${slidUpSet}; */
`;
