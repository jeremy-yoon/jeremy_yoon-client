import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, MotionButton } from "components";
import { colors } from "styles/colors";

interface MainLogoProps {
  onClick?: Function;
  href?: string;
  size?: number;
}

export const MainLogo: React.FC<MainLogoProps> = ({
  onClick,
  href = "/blog",
  size = 24,
}) => {
  return (
    <Link href={href}>
      <MotionButton>
        <Sv py={16} pointer row>
          <St
            s1
            weight={1000}
            size={size}
            en
            g0
            style={{ fontStyle: "italic" }}
          >
            JE
          </St>
          <St
            s1
            weight={1000}
            size={size}
            en
            g0
            style={{ fontStyle: "italic" }}
          >
            Log!
          </St>
        </Sv>
      </MotionButton>
    </Link>
  );
};

const S: any = {};
