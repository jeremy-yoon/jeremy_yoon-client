import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St } from "components";
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
    <Link href={href}>
      <Sv row>
        <S.Image src={imgSrc} width="40px" height="40px" objectFit="cover" />
        <Sv col ml={12}>
          <St b2 g2>
            {name}
          </St>
          <St c1 g3>
            {body}
          </St>
        </Sv>
      </Sv>
    </Link>
  );
};

const S: any = {};

S.Image = styled(Image)`
  max-width: 40px;
  max-height: 40px;
  border-radius: 100px;
`;
