import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, Profile } from "components";
import { SvTest } from "components/styled-components/StyledComponentTest";
import dummy from "images/dummy.png";
import main_bg1 from "images/main-bg1.jpg";
import { colors } from "styles/colors";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import moment from "moment";
import parse from "html-react-parser";

interface PostListSProps {
  href: any;
  imgSrc: StaticImageData | string;
  title: string;
  body: string;
}
export const PostListS: React.FC<PostListSProps> = ({
  href = "/",
  imgSrc = main_bg1,
  title = "title",
  body = "body",
}) => {
  return (
    <Link href={href}>
      <>
        <Sv pointer row act py={20}>
          <S.ImageWrapper>
            <Image
              src={imgSrc}
              width={64}
              height={64}
              objectFit="cover"
              objectPosition="right"
            />
          </S.ImageWrapper>
          <Sv col ml={12} mb={6}>
            <St s3 g0 mt={4} text={title} />
            <S.BodyText c1 g2 mt={4} text={body.replace(/(<([^>]+)>)/gi, "")} />
          </Sv>
        </Sv>
        <Sv h={1} bg={colors.g6} />
      </>
    </Link>
  );
};

const S: any = {};

S.ImageWrapper = styled(Sv)`
  min-width: 64px;
  height: 64px;
`;

S.BodyText = styled(St)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-width: 264px;
`;
