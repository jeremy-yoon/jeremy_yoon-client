import { colors } from "styles/colors";
import styled, { css } from "styled-components";

export const St = (props: any) => (
  <StyledText {...props} allowFontScaling={false}>
    {props.children}
    {props.text}
  </StyledText>
);

interface StProps {
  h1: any;
  h2: any;
  h3: any;
  s1: any;
  s2: any;
  s3: any;
  s4: any;
  s5: any;
  b1: any;
  b2: any;
  b3: any;
  c1: any;
  c2: any;
  c3: any;
  typo: any;
  primary: any;
  secondary: any;
  black: any;
  g0: any;
  g1: any;
  g2: any;
  g3: any;
  g4: any;
  g5: any;
  g6: any;
  g7: any;
  white: any;
  red: any;
  disableSelect: any;
  color: any;
  m: any;
  mt: any;
  mb: any;
  ml: any;
  mr: any;
  mx: any;
  my: any;
  p: any;
  pt: any;
  pb: any;
  pl: any;
  pr: any;
  px: any;
  py: any;
  center: any;
  left: any;
  right: any;
  size: number;
  weight: number;
  style: string;
  z: any;
  en: any;
  title: any;
}

export const StyledText: any = styled.span<StProps>`
  word-break: break-word;
  font-family: "Pretendard";
  white-space: pre-wrap;
  word-break: keep-all;
  line-height: 1.4;

  ${(props) => props.h1 && h1}
  ${(props) => props.h2 && h2}
  ${(props) => props.h3 && h3}
  ${(props) => props.s1 && s1}
  ${(props) => props.s2 && s2}
  ${(props) => props.s3 && s3}
  ${(props) => props.s4 && s4}
  ${(props) => props.s5 && s5}
  ${(props) => props.b1 && b1}
  ${(props) => props.b2 && b2}
  ${(props) => props.b3 && b3}
  ${(props) => props.c1 && c1}
  ${(props) => props.c2 && c2}
  ${(props) => props.c3 && c3}

  ${(props) => props.typo == "h1" && h1}
  ${(props) => props.typo == "h2" && h2}
  ${(props) => props.typo == "h3" && h3}
  ${(props) => props.typo == "s1" && s1}
  ${(props) => props.typo == "s2" && s2}
  ${(props) => props.typo == "s3" && s3}
  ${(props) => props.typo == "s4" && s4}
  ${(props) => props.typo == "s5" && s5}
  ${(props) => props.typo == "b1" && b1}
  ${(props) => props.typo == "b2" && b2}
  ${(props) => props.typo == "b3" && b3}
  ${(props) => props.typo == "c1" && c1}
  ${(props) => props.typo == "c2" && c2}
  ${(props) => props.typo == "c3" && c3}


  ${(props) => props.primary && primary}
  ${(props) => props.secondary && secondary}
  ${(props) => props.black && black}
  ${(props) => props.g0 && g0}
  ${(props) => props.g1 && g1}
  ${(props) => props.g2 && g2}
  ${(props) => props.g3 && g3}
  ${(props) => props.g4 && g4}
  ${(props) => props.g5 && g5}
  ${(props) => props.g6 && g6}
  ${(props) => props.g7 && g7} 
  ${(props) => props.white && white}
  ${(props) => props.red && red}
  ${(props) => props.disableSelect && disableSelect} 
  ${(props) => props.color && color} 

  ${(props) => props.color == "primary" && primary}
  ${(props) => props.color == "secondary" && secondary}
  ${(props) => props.color == "black" && black}
  ${(props) => props.color == "g0" && g0}
  ${(props) => props.color == "g1" && g1}
  ${(props) => props.color == "g2" && g2}
  ${(props) => props.color == "g3" && g3}
  ${(props) => props.color == "g4" && g4}
  ${(props) => props.color == "g5" && g5}
  ${(props) => props.color == "g6" && g6}
  ${(props) => props.color == "g7" && g7} 
  ${(props) => props.color == "white" && white}
  ${(props) => props.color == "red" && red}
  ${(props) => props.color == "disableSelect" && disableSelect} 
  ${(props) => props.color == "color" && color} 

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

  ${(props) => props.center && center}
  ${(props) => props.left && left}
  ${(props) => props.right && right}

  ${(props) => props.size && size}
  ${(props) => props.weight && weight}
  ${(props) => props.style && style}

  ${(props) => props.z && z}

  ${(props) => props.en && en}

  ${(props) => props.title && title}
`;

const h1 = css`
  font-weight: 700;
  font-size: min(9vw, 60px);
  line-height: 1.4;
`;
const h2 = css`
  font-weight: 600;
  font-size: min(7.5vw, 48px);
  line-height: 1.4;
`;
const h3 = css`
  font-weight: 600;
  font-size: min(5.5vw, 26px);
  line-height: 1.4;
`;
const s1 = css`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.4;
`;
const s2 = css`
  font-weight: 500;
  font-size: 19px;
  line-height: 1.4;
`;
const s3 = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
`;
const s4 = css`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
`;
const s5 = css`
  font-weight: 500;
  font-size: 11px;
  line-height: 1.4;
`;
const b1 = css`
  font-weight: 200;
  font-size: 16px;
  line-height: 1.4;
`;
const b2 = css`
  font-weight: 200;
  font-size: 14px;
  line-height: 1.4;
`;
const b3 = css`
  font-weight: 200;
  font-size: 12px;
  line-height: 1.4;
`;
const c1 = css`
  font-weight: 200;
  font-size: 13px;
  line-height: 1.4;
`;
const c2 = css`
  font-weight: 200;
  font-size: 12px;
  line-height: 1.4;
`;
const c3 = css`
  font-weight: 200;
  font-size: 10px;
  line-height: 1.4;
`;
const primary = css`
  color: ${colors.primary};
`;
const secondary = css`
  color: ${colors.secondary};
`;
const black = css`
  color: ${colors.black};
`;
const g7 = css`
  color: ${colors.g7};
`;
const g6 = css`
  color: ${colors.g6};
`;
const g5 = css`
  color: ${colors.g5};
`;
const g4 = css`
  color: ${colors.g4};
`;
const g3 = css`
  color: ${colors.g3};
`;
const g2 = css`
  color: ${colors.g2};
`;
const g1 = css`
  color: ${colors.g1};
`;
const g0 = css`
  color: ${colors.g0};
`;
const white = css`
  color: ${colors.white};
`;
const red = css`
  color: red;
`;

const color = css<{ color: any }>`
  color: ${(props) => props.color};
`;

const disableSelect = css`
  user-select: none;
`;

const center = css`
  text-align: center;
`;
const left = css`
  text-align: left;
`;
const right = css`
  text-align: right;
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

const size = css<{ size: any }>`
  font-size: ${(props) => props.size}px !important;
`;

const weight = css<{ weight: any }>`
  font-weight: ${(props) => props.weight};
`;

const style = css<{ style: any }>`
  font-style: ${(props) => props.style};
`;

//------------------------------------------------------------------
//영문일 떄 폰트를 따로 지정합니다.
const en = css<{ en: any }>`
  font-family: "Gilroy" !important;
`;
//제목일 떄 폰트를 따로 지정합니다.
const title = css<{ title: any }>`
  font-family: "NanumMyeongjo" !important;
`;
