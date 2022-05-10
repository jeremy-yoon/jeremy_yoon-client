import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import { Sv, St, MotionButton } from "components";
import { colors } from "styles/colors";
import ic_home from "images/svg/ic_home.svg";

interface NavigationButtonProps {
  onClick?: Function;
  href?: string;
  selected?: boolean;
  icon?: any;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  onClick,
  href = "/blog",
  selected,
  icon = ic_home,
}) => {
  return (
    <Link href={href}>
      <MotionButton>
        <S.Container py={16} pointer selected={selected}>
          <Sv
            as={icon}
            width={20}
            fill={selected ? colors.g0 : "none"}
            stroke={selected ? colors.g0 : colors.g4}
          />
        </S.Container>
      </MotionButton>
    </Link>
  );
};

const S: any = {};

const blur = css`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(30px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const selected = css`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(30px);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

S.Container = styled(Sv)`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  z-index: 1;
  ${(props) => (props.selected ? selected : blur)}
`;
