import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userRecentReadPostAtom = atom({
  key: "userRecentReadPostAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const userTotalReadHistoryAtom = atom({
  key: "userTotalReadHistoryAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
