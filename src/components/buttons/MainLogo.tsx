import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, Profile } from "components";
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
      <Sv py={16} pointer>
        <St s1 weight={900} size={size} en g0>
          Jeremy
        </St>
        <St s1 weight={200} size={size} en g0>
          yoon!
        </St>
      </Sv>
    </Link>
  );
};

const S: any = {};
