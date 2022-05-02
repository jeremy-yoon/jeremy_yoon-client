import React from "react";
import { motion } from "framer-motion";
import { Sv } from "components";

export const MotionButton = ({
  children,
  tapConfig = {},
  hoverConfig = {},
  style = {},
  onClick,
}) => {
  const config = {
    initial: {
      scale: 1,
    },
    whileTap: {
      scale: 0.95,
      ...tapConfig,
    },
    whileHover: {
      scale: 1.05,
      ...hoverConfig,
    },
  };

  return (
    <motion.div
      onMouseDown={onClick && onClick}
      variants={config}
      initial={"initial"}
      whileTap={"whileTap"}
      whileHover={"whileHover"}
      layout="position"
    >
      <Sv act jct>
        {children}
      </Sv>
    </motion.div>
  );
};
