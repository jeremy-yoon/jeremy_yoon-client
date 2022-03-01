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

interface PostListProps {
  href: any;
  imgSrc: StaticImageData;
  date: string;
  category: string;
  title: string;
  body: string;
  likeCount: number;
  viewCount: number;
}
export const PostList: React.FC<PostListProps> = ({
  href = "/",
  imgSrc = main_bg1,
  date = "date",
  category = "category",
  title = "title",
  body = "body",
  likeCount = "0",
  viewCount = "0",
}) => {
  return (
    <Link href={href}>
      <Sv>
        <S.Container jsb>
          <Sv pointer>
            <Sv row act>
              <St c2 g3 text={`Likes ${likeCount} · Views ${viewCount}`} />
            </Sv>
            <Sv col>
              <St s2 g0 mt={4} text={title} />
              <S.BodyText b2 g2 mt={8} text={body} />
            </Sv>
            <Sv mt={16} row act gx={12}>
              <Sv bg={colors.g6} br={99} px={8} py={2} ml={-4}>
                <St c1 g0 text={category} />
              </Sv>
              <St c1 g3 text={moment(date).format("YYYY년 MM월 DD일")} />
            </Sv>
          </Sv>
          <S.ImageWrapper>
            <Image src={imgSrc} width={140} height={140} objectFit="cover" />
          </S.ImageWrapper>
        </S.Container>
        <Sv h={1} bg={colors.g5} />
      </Sv>
    </Link>
  );
};

const S: any = {};

S.ImageWrapper = styled(Sv)`
  max-width: 140px;
  max-height: 140px;
  @media only screen and (max-width: 768px) {
    max-width: 64px;
    max-height: 64px;
  }
`;

S.Container = styled(Sv)`
  padding-top: 32px;
  padding-bottom: 32px;
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
`;

export const PostListSkeleton = () => (
  <SkeletonTheme baseColor={colors.g7}>
    <Sv row act jsb py={16}>
      {/* <Skeleton circle height={40} width={40} /> */}
      <Sv col>
        <Skeleton count={1} width={40} height={16} />
        <Sv h={8} />
        <Skeleton count={1} width={300} height={24} />
        <Sv h={16} />
        <Skeleton count={2} width={500} height={16} />
        <Sv h={24} />
        <Skeleton count={1} width={80} height={16} />
      </Sv>
      <Sv>
        <Skeleton height={112} width={112} />
      </Sv>
    </Sv>
  </SkeletonTheme>
);
