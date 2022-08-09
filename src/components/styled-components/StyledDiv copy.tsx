import styled, { css } from "styled-components";
import { colors } from "styles/colors";

interface SvProps {
  w: number | string;
  h: number | string;
  f: number;
  b: string;
  br: number | string;
  row: boolean;
  col: boolean;
  ct: boolean;
  aed: boolean;
  jed: boolean;
  ast: boolean;
  jst: boolean;
  act: boolean;
  jct: boolean;
  jsb: boolean;
  g: number | string;
  gx: number | string;
  gy: number | string;
  m: number | string;
  mt: number | string;
  mb: number | string;
  ml: number | string;
  mr: number | string;
  mx: number | string;
  my: number | string;
  p: number | string;
  pt: number | string;
  pb: number | string;
  pl: number | string;
  pr: number | string;
  px: number | string;
  py: number | string;
  position: string;
  top: number | string;
  bottom: number | string;
  left: number | string;
  right: number | string;
  bg: any;
  pointer: boolean;
  z: number;
  wrap: boolean;
}

export const Sv: any = styled.div<SvProps>`
  /* width와 height */
  //숫자만 쓰면 px로 적용, 문자열이면 그대로 적용(100% or 50vh)
  ${(props) =>
    typeof props.w == "string" ? w_string : typeof props.w == "number" && w}
  ${(props) =>
    typeof props.h == "string" ? h_string : typeof props.h == "number" && h}

/* flex */
${(props) => props.f && f}

/* border */
${(props) => props.b && b}
${(props) => props.br && br} //border-radius

  /* 정렬 속성 */
  ${(props) => props.row && row}
  ${(props) => props.col && col}
  ${(props) => props.ct && ct}
  ${(props) => props.aed && aed}
  ${(props) => props.jed && jed}
  ${(props) => props.ast && ast}
  ${(props) => props.jst && jst}
  ${(props) => props.act && act}
  ${(props) => props.jct && jct}
  ${(props) => props.jsb && jsb}

  /* gap */
  ${(props) => props.g && g}
  ${(props) => props.gx && gx}
  ${(props) => props.gy && gy}

  /*마진 속성*/
  ${(props) => props.m && m}
  ${(props) => props.mt && mt}
  ${(props) => props.mb && mb}
  ${(props) => props.ml && ml}
  ${(props) => props.mr && mr}
  ${(props) => props.mx && mx}
  ${(props) => props.my && my}
  /*패딩 속성*/
  ${(props) => props.p && p}
  ${(props) => props.pt && pt}
  ${(props) => props.pb && pb}
  ${(props) => props.pl && pl}
  ${(props) => props.pr && pr}
  ${(props) => props.px && px}
  ${(props) => props.py && py}

  /* 배치 속성 */
  ${(props) => props.position && position}

  ${(props) => props.top && top}
  ${(props) => props.bottom && bottom}
  ${(props) => props.left && left}
  ${(props) => props.right && right}




  /*background*/
  ${(props) => props.bg && bg}


  ${(props) => props.pointer && pointer}

  ${(props) => props.z && z}

  ${(props) => props.wrap && wrap}

  ${(props) => props.hidden && hidden}
`;

const w = css<{ w: any }>`
  width: ${(props) => props.w}px;
`;

const w_string = css<{ w: any }>`
  width: ${(props) => props.w};
`;

const h = css<{ h: any }>`
  height: ${(props) => props.h}px;
`;

const h_string = css<{ h: any }>`
  height: ${(props) => props.h};
`;

const f = css<{ f: any }>`
  display: flex;
  flex: ${(props) => props.f};
`;

const b = css<{ b: any }>`
  border: ${(props) => props.b};
`;

const br = css<{ br: any }>`
  border-radius: ${(props) => props.br}px;
`;

const bg = css<{ bg: any }>`
  background-color: ${(props) => props.bg};
`;

const row = css`
  display: flex;
  flex-direction: row !important;
`;
const col = css`
  display: flex;
  flex-direction: column !important;
`;

const ct = css`
  display: flex;
  justify-content: center !important;
  align-items: center !important;
`;

const jsb = css`
  display: flex;
  justify-content: space-between !important;
`;

const ast = css`
  display: flex;
  align-items: flex-start !important;
`;

const jst = css`
  display: flex;
  justify-content: flex-start !important;
`;

const aed = css`
  display: flex;
  align-items: flex-end !important;
`;

const jed = css`
  display: flex;
  justify-content: flex-end !important;
`;

const jct = css`
  display: flex;
  justify-content: center !important;
`;

const act = css`
  display: flex;
  align-items: center !important;
`;

const g = css<{ g: any }>`
  display: flex;
  gap: ${(props) => props.g}px;
`;

const gx = css<{ gx: any }>`
  display: flex;
  column-gap: ${(props) => props.gx}px;
`;

const gy = css<{ gy: any }>`
  display: flex;
  row-gap: ${(props) => props.gy}px;
`;

const pointer = css`
  cursor: pointer;
`;

const hidden = css`
  display: none;
`;

//------------------------------------------------------------------
const p = css<{ p: any }>`
  padding: ${(props) => props.p}px !important;
`;
const pt = css<{ pt: any }>`
  padding-top: ${(props) => props.pt}px !important;
`;
const pb = css<{ pb: any }>`
  padding-bottom: ${(props) => props.pb}px !important;
`;
const pl = css<{ pl: any }>`
  padding-left: ${(props) => props.pl}px !important;
`;
const pr = css<{ pr: any }>`
  padding-right: ${(props) => props.pr}px !important;
`;
const px = css<{ px: any }>`
  padding-left: ${(props) => props.px}px !important;
  padding-right: ${(props) => props.px}px !important;
`;
const py = css<{ py: any }>`
  padding-top: ${(props) => props.py}px !important;
  padding-bottom: ${(props) => props.py}px !important;
`;
//------------------------------------------------------------------
const m = css<{ m: any }>`
  margin: ${(props) => props.m}px !important;
`;
const mt = css<{ mt: any }>`
  margin-top: ${(props) => props.mt}px !important;
`;
const mb = css<{ mb: any }>`
  margin-bottom: ${(props) => props.mb}px !important;
`;
const ml = css<{ ml: any }>`
  margin-left: ${(props) => props.ml}px !important;
`;
const mr = css<{ mr: any }>`
  margin-right: ${(props) => props.mr}px !important;
`;
const mx = css<{ mx: any }>`
  margin-left: ${(props) => props.mx}px !important;
  margin-right: ${(props) => props.mx}px !important;
`;
const my = css<{ my: any }>`
  margin-top: ${(props) => props.my}px !important;
  margin-bottom: ${(props) => props.my}px !important;
`;
//------------------------------------------------------------------

const z = css<{ z: any }>`
  z-index: ${(props) => props.z};
`;

//------------------------------------------------------------------

const position = css<{ position: any }>`
  position: ${(props) => props.position};
`;

const top = css<{ top: any }>`
  top: ${(props) => props.top}px;
`;
const bottom = css<{ bottom: any }>`
  bottom: ${(props) => props.bottom}px;
`;
const left = css<{ left: any }>`
  left: ${(props) => props.left}px;
`;
const right = css<{ right: any }>`
  right: ${(props) => props.right}px;
`;

const wrap = css`
  flex-wrap: wrap;
`;
