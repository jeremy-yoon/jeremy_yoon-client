import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, MotionButton } from "components";
import { SvTest } from "components/styled-components/StyledComponentTest";
import dummy from "images/dummy.png";
import { colors } from "styles/colors";

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
      <MotionButton>
        <S.ImageWrapper>
          <S.Image
            src={imgSrc}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </S.ImageWrapper>
        <Sv col gy={4} mt={16}>
          <St s2 g0>
            {title}
          </St>
          <St b2 g3>
            {body}
          </St>
        </Sv>
      </MotionButton>
    </Link>
  );
};

const S: any = {};

S.Image = styled(Image)``;

S.ImageWrapper = styled.div`
  position: relative;
  height: 480px;
  width: 100%;
  background-color: ${colors.g6};
  @media only screen and (max-width: 768px) {
    height: 28vh;
  }
`;
