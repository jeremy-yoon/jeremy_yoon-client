const getMode = () => {
  // const darkMode = getRecoil(darkModeAtom);
  // const darkMode = useRecoilValue(darkModeAtom);
  const darkMode = false;
  return darkMode;
};

export const colors = {
  primary: "#4b42ff",
  secondary: "#00B881",
  white: "#fff",
  g0: getMode() ? "#fff" : "#161D24",
  g1: getMode() ? "#FAFAFA" : "#28323C",
  g2: getMode() ? "#F1F1F1" : "#374553",
  g3: getMode() ? "#E6E6E6" : "#525c68",
  g4: getMode() ? "#d9d9d9" : "#afb6bd",
  g5: getMode() ? "#9E9E9E" : "#E3E5EA",
  g6: getMode() ? "#606060" : "#F1F3F8",
  g7: getMode() ? "#3A3A3A" : "#FAFBFC",
  g8: getMode() ? "#3A3A3A" : "#fcfcfc",
  g10: getMode() ? "#000" : "#fff",
  black: "#000",
};
