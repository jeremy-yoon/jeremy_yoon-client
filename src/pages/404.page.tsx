import Link from "next/link";
import { Sv, St, MainLogo } from "components";

export default function FourOhFour() {
  return (
    <Sv>
      <MainLogo />
      <St h1>404 - 페이지를 찾을 수 없어요 :(</St>
      <Link href="/">
        <Sv mt={20} pointer>
          <St s1>홈 화면으로 이동하기 {`>`}</St>
        </Sv>
      </Link>
    </Sv>
  );
}
