import styled, { css } from "styled-components";
import { colors } from "styles/colors";

interface SvProps {
  w: any;
  bg: any;
}

export const SvTest: any = styled.div<SvProps>`
  /* width와 height */
  //숫자만 쓰면 px로 적용, 문자열이면 그대로 적용(100% or 50vh)
  ${(props) =>
    typeof props.w == "string" ? w_string : typeof props.w == "number" && w}
  /*background*/
  ${(props) => props.bg && bg}
`;

const w = css<{ w: any }>`
  width: ${(props) => props.w}px;
`;

const w_string = css<{ w: any }>`
  width: ${(props) => props.w};
`;

const bg = css<{ bg: any }>`
  background-color: ${(props) => props.bg};
`;
