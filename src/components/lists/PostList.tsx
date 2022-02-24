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
    <>
      <Link href={href}>
        <Sv pt={32} jsb>
          <Sv pointer w="100%">
            <Sv row act>
              <St c1 g3 text={`Likes ${likeCount} · Views ${viewCount}`} />
            </Sv>
            <Sv col>
              <St s2 g0 mt={4} text={title} />
              <S.BodyText b2 g2 mt={8} text={body} />
            </Sv>
            <Sv mt={16} row act gx={12}>
              <Sv bg={colors.g6} br={99} px={12} py={4} ml={-4}>
                <St b3 g0 text={category} />
              </Sv>
              <St b3 g3 text={moment(date).format("YYYY년 MM월 DD일")} />
            </Sv>
          </Sv>
          <S.Image src={imgSrc} width={140} height={140} objectFit="cover" />
        </Sv>
      </Link>
      <Sv h={1} bg={colors.g5} mt={32} />
    </>
  );
};

const S: any = {};

S.Image = styled(Image)`
  max-width: 140px;
  max-height: 140px;
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
