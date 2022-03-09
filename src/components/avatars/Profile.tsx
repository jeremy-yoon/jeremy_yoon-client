import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, ButtonL, PostListS } from "components";
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
        g3
        text={`효율적으로 일하는 방법을 고민하는 개발자 윤정탁 입니다.
현재 스타트업에서 UI/UX 디자이너 겸 front-end 개발자로 일하고 있습니다. 
`}
      />
      <Sv h={40} />
      <Sv col gy={8}>
        <ButtonL title="연락하기" href="/resume" />
        <ButtonL title="GitHub Repo" href="/contact" line />
      </Sv>
      <Sv mt={40}>
        <St s2 g0 text="당신이 최근 본 포스트" />
        <Sv h={16} />
        <PostListS />
        <PostListS />
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
