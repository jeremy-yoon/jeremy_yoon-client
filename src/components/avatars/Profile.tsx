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
      <St b2 g0 text={`세상에 강한 임팩트를 주고자 하는 개발자 입니다.`} />
      <Sv h={40} />
      <ButtonL title="연락하기" href="/contact" />
    </Sv>
  );
};

const S: any = {};

S.Image = styled(Image)`
  max-width: 40px;
  max-height: 40px;
  border-radius: 100px;
`;
