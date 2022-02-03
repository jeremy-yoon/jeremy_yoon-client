import styled, { css, keyframes } from "styled-components";

const scaleUp = keyframes`
  from {
    font-size: 170px;
  }
  to {
    font-size: 180px;
  }
`;

export const scaleUpSet = css`
  animation-duration: 0.2s;
  /* animation-timing-function: ease; */
  animation-name: ${scaleUp};
`;
