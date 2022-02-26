import React, { useState, useEffect } from "react";
import { Sv, St, NavigationButton } from "components";
import styled, { css } from "styled-components";
import ic_home from "images/svg/ic_home.svg";
import ic_chat from "images/svg/ic_chat.svg";

interface Navigation {}

export const Navigation = () => {
  return (
    <S.Container col gy={12} jct>
      <NavigationButton icon={ic_home} selected={true} />
      <NavigationButton icon={ic_chat} />
      <NavigationButton />
    </S.Container>
  );
};

const S: any = {};

S.Container = styled(Sv)``;
