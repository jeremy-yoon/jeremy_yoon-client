import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Sv, St, NavigationButton } from "components";
import styled, { css } from "styled-components";
import ic_home from "images/svg/ic_home.svg";
import ic_chat from "images/svg/ic_chat.svg";
import ic_resume from "images/svg/ic_resume.svg";
import ic_bulb from "images/svg/ic_bulb.svg";

interface Navigation {}

export const Navigation = () => {
  const router = useRouter();
  return (
    <S.Container col gy={12} jct>
      <NavigationButton
        icon={ic_home}
        selected={
          !router.pathname.includes("guest-book") &&
          !router.pathname.includes("resume") &&
          !router.pathname.includes("portfolio")
        }
        href="/blog"
      />
      <NavigationButton
        icon={ic_chat}
        selected={router.pathname.includes("guest-book")}
        href="/guest-book"
      />
      <NavigationButton
        icon={ic_bulb}
        selected={router.pathname.includes("portfolio")}
        href="/portfolio"
      />
      <NavigationButton
        icon={ic_resume}
        selected={router.pathname.includes("resume")}
        href="/resume"
      />
    </S.Container>
  );
};

const S: any = {};

S.Container = styled(Sv)``;
