const getMode = () => {
  // const darkMode = getRecoil(darkModeAtom);
  // const darkMode = useRecoilValue(darkModeAtom);
  const darkMode = false;
  return darkMode;
};

export const colors = {
  primary: "#1890ff",
  secondary: "#00B881",
  white: "#fff",
  g0: getMode() ? "#fff" : "#000",
  g1: getMode() ? "#FAFAFA" : "#3A3A3A",
  g2: getMode() ? "#F1F1F1" : "#606060",
  g3: getMode() ? "#E6E6E6" : "#9E9E9E",
  g4: getMode() ? "#d9d9d9" : "#d9d9d9",
  g5: getMode() ? "#9E9E9E" : "#ebebeb",
  g6: getMode() ? "#606060" : "#f7f7f7",
  g7: getMode() ? "#3A3A3A" : "#FAFAFA",
  g8: getMode() ? "#3A3A3A" : "#fcfcfc",
  g10: getMode() ? "#000" : "#fff",
  black: "#000",
};
