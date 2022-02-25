import React, { useState, useEffect } from "react";
import { Sv, St, NavigationButton } from "components";
import styled, { css } from "styled-components";

interface Navigation {}

export default function Navigation() {
  return (
    <S.Container col gy={12} jct>
      <NavigationButton selected={true} />
      <NavigationButton />
      <NavigationButton />
    </S.Container>
  );
}

const S: any = {};

S.Container = styled(Sv)``;
