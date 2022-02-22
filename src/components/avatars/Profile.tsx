import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, ButtonL } from "components";
import dummy from "images/dummy.png";

interface ProfileProps {
  href: string;
  imgSrc: StaticImageData;
  name: string;
  body: string;
}

export const Profile: React.FC<ProfileProps> = ({
  href = "/",
  imgSrc = dummy,
  name = "제레미",
  body = "body",
}) => {
  return (
    <Sv col pt={40}>
      <Sv>
        <S.Image src={imgSrc} width={88} height={88} objectFit="cover" />
      </Sv>
      <St s1 g0 text="Jeremy Yoon" />
      <St b1 g0 text="내 소개" />
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
