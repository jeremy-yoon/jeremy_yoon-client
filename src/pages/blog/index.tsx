import React from "react";
import { Sv, St, ButtonL, PostList } from "components";
import styled from "styled-components";
import { colors } from "styles/colors";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

interface BlogScreen {}

export default function BlogScreen() {
  return (
    <S.Body>
      <LeftContainer />
      <RightContainer />
    </S.Body>
  );
}

const S: any = {};

S.Body = styled(Sv)`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
