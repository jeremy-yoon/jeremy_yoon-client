import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, Profile } from "components";
import { SvTest } from "components/styled-components/StyledComponentTest";
import dummy from "images/dummy.png";

interface GalleryCardProps {
  href: any;
  imgSrc: StaticImageData;
  title: string;
  body: string;
}
export const GalleryCard: React.FC<GalleryCardProps> = ({
  href = "/",
  imgSrc = dummy,
  title = "title",
  body = "body",
}) => {
  return (
    <Link href={href}>
      <Sv pointer>
        <S.ImageWrapper>
          <S.Image src={imgSrc} layout="fill" objectFit="cover" />
        </S.ImageWrapper>
        <Sv col mt={16}>
          <St s1 g0>
            {title}
          </St>
          <St b1 g3>
            {body}
          </St>
        </Sv>
      </Sv>
    </Link>
  );
};

const S: any = {};

S.Image = styled(Image)``;

S.ImageWrapper = styled.div`
  position: relative;
  height: 480px;
  width: 100%;
`;
