import Link from "next/link";
import { Sv, St } from "components"

export default function FourOhFour() {
  return (
    <>
      <h1>404 - 페이지를 찾을 수  없어요 :(</h1>
      <Link href="/">
        <Sv>
          <St>
            홈 화면으로 가기
          </St>
        </Sv>
      </Link>
    </>
  );
}
