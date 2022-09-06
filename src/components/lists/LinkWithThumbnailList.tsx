import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, MotionButton } from "components";
import { SvTest } from "components/styled-components/StyledComponentTest";
import dummy from "images/dummy.png";
import main_bg1 from "images/main-bg1.jpg";
import { colors } from "styles/colors";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import moment from "moment";
import parse from "html-react-parser";

interface LinkWithThumbnailListProps {
  // href: any;
  // imgSrc: StaticImageData | string;
  // date: string;
  // category: string;
  // title: string;
  // body: string;
  // likeCount: number;
  // viewCount: number;

  href?: any;
  imgSrc?: StaticImageData | string;
  date?: string;
  category?: string;
  title?: string;
  body?: string;
  likeCount?: number;
  viewCount?: number;
}
export const LinkWithThumbnailList: React.FC<LinkWithThumbnailListProps> = ({
  href = "/",
  imgSrc = dummy,
  date = "date",
  category = "category",
  title = "title",
  body = "body",
  likeCount = 0,
  viewCount = 0,
}) => {
  return (
    <MotionButton href={href}>
      <S.Container jsb act>
        <Sv>
          <Sv col>
            <St s2 g0 mt={4} text={title} />
            <S.BodyText b2 g2 mt={8} text={body.replace(/(<([^>]+)>)/gi, "")} />
          </Sv>
          <Sv mt={16} row act gx={12}>
            <Sv bg={colors.g6} br={99} px={8} py={2} ml={-4}>
              <St c1 g0 text={category} />
            </Sv>
            <St c1 g3 text={moment(date).format("YYYY년 M월 D일")} />
          </Sv>
        </Sv>
        <S.ImageWrapper>
          <Image
            src={imgSrc}
            width={140}
            height={140}
            objectFit="cover"
            objectPosition="right"
            placeholder="blur"
          />
        </S.ImageWrapper>
      </S.Container>
      <Sv h={1} bg={colors.g6} />
    </MotionButton>
  );
};

const S: any = {};

S.ImageWrapper = styled(Sv)`
  max-width: 140px;
  max-height: 140px;
  @media only screen and (max-width: 768px) {
    max-width: 64px;
    max-height: 64px;
    min-width: 64px;
    min-height: 64px;
  }
`;

S.Container = styled(Sv)`
  padding-top: 32px;
  padding-bottom: 32px;
  border: 1px solid ${colors.g6};
  padding: 20px;
  border-radius: 0px;
  cursor: pointer;
  background-color: ${colors.white};
  @media only screen and (max-width: 768px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

S.BodyText = styled(St)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-width: 608px;
  @media only screen and (max-width: 768px) {
    max-width: 60vw;
  }
`;
