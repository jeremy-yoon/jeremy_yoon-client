import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, MotionButton } from "components";
import dummy from "images/dummy.png";
import { colors } from "styles/colors";

interface ButtonLProps {
  onClick?: Function;
  href?: string;
  title: string;
  line?: boolean;
  isOpenNewTab?: boolean;
  disabled?: boolean;
}

export const ButtonL: React.FC<ButtonLProps> = ({
  onClick,
  href = "/",
  title = "title",
  line,
  isOpenNewTab,
  disabled,
}) => {
  return (
    <MotionButton onClick={onClick && onClick} disabled={disabled}>
      <a
        href={isOpenNewTab ? href : ""}
        target={isOpenNewTab ? "_blank" : "_self"}
      >
        <S.Container act jct py={8} px={20} pointer line={line}>
          <St s4 white={!line}>
            {title}
          </St>
        </S.Container>
      </a>
    </MotionButton>
  );
};

const S: any = {};

S.Image = styled(Image)``;

// S.MotionButton = styled(MotionButton)`
//   pointer-events: ${(props: any) => (props.disabled ? "none" : "auto")};
//   opacity: ${(props: any) => (props.disabled ? 0.5 : 1)};
// `;

S.Container = styled(Sv)`
  border-radius: 2px;
  background-color: ${(props: any) => (props.line ? "transparent" : colors.g0)};
  border: ${(props: any) => (props.line ? `1px solid ${colors.g4}` : "none")};
`;
