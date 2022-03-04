import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, ButtonL } from "components";
import profile_me from "images/profile_me.png";

interface ProfileProps {
  href: string;
  imgSrc: StaticImageData;
  name: string;
  body: string;
}

export const Profile: React.FC<ProfileProps> = ({
  href = "/",
  imgSrc = profile_me,
  name = "제레미",
  body = "body",
}) => {
  return (
    <Sv col pt={40}>
      <Sv>
        <S.Image src={imgSrc} width={88} height={88} objectFit="cover" />
      </Sv>
      <St s1 g0 text="Jeremy Yoon" />
      <Sv h={4} />
      <St
        b2
        g0
        text={`최고의 프로그래머는 그냥 좋은 프로그래머들보다
조금 더 나은 게 아니다. 그들은 어떻게 측정하던 간에 보통 사람들 보다 한 자리 수 이상이다.
창의력, 스피드, 설계능력, 문제해결 능력까지.
- Randall E. Stross -`}
      />
      <Sv h={40} />
      <Sv col gy={8}>
        <ButtonL title="연락하기" href="/resume" />
        <ButtonL title="GitHub Repo" href="/contact" line />
      </Sv>
    </Sv>
  );
};

const S: any = {};

S.Image = styled(Image)`
  max-width: 40px;
  max-height: 40px;
  border-radius: 100px;
`;
