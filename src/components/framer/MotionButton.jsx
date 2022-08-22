import React from "react";
import { motion } from "framer-motion";
import { Sv } from "components";
import styled from "styled-components";

export const MotionButton = ({
  children,
  tapConfig = {},
  hoverConfig = {},
  style = {},
  onClick,
  disabled,
}) => {
  const config = {
    initial: {
      scale: 1,
    },
    whileTap: {
      scale: 0.98,
      ...tapConfig,
    },
    whileHover: {
      scale: 1.02,
      ...hoverConfig,
    },
  };

  return (
    <S.MotionDiv
      disabled={disabled}
      onMouseDown={onClick && onClick}
      variants={config}
      initial={"initial"}
      whileTap={"whileTap"}
      whileHover={"whileHover"}
      layout="position"
      style={{
        width: "fitContent",
        height: "fitContent",
        cursor: "pointer",
      }}
    >
      {children}
    </S.MotionDiv>
  );
};

const S = {};

S.MotionDiv = styled(motion.div)`
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
