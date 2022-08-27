import React from "react";
import { motion } from "framer-motion";
import { Sv } from "components";
import styled from "styled-components";

interface MotionButtonProps {
  onClick?: Function;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  href?: string;
}

export const MotionButton: React.FC<MotionButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  const config = {
    initial: {
      scale: 1,
    },
    whileTap: {
      scale: 0.98,
    },
    whileHover: {
      scale: 1.02,
    },
  };

  return (
    <S.MotionDiv
      disabled={disabled}
      onMouseDown={onClick}
      variants={config}
      initial={"initial"}
      whileTap={"whileTap"}
      whileHover={"whileHover"}
      layout="position"
      style={{
        width: "100%",
        height: "fitContent",
        cursor: "pointer",
      }}
    >
      <a href={disabled ? undefined : "/"}>{children}</a>
    </S.MotionDiv>
  );
};

const S: any = {};

S.MotionDiv = styled(motion.div)`
  pointer-events: ${(props: any) => (props.disabled ? "none" : "auto")};
  opacity: ${(props: any) => (props.disabled ? 0.5 : 1)};
`;
