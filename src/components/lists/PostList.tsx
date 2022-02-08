import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, Profile } from "components";
import { SvTest } from "components/styled-components/StyledComponentTest";
import dummy from "images/dummy.png";
import { colors } from "styles/colors";

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
  imgSrc = dummy,
  date = "date",
  category = "category",
  title = "title",
  body = "body",
  likeCount = "likeCount",
  viewCount = "viewCount",
}) => {
  return (
    <Link href={href}>
      <Sv pt={32}>
        <Sv row jsb pointer w="100%">
          <Sv>
            <Sv row>
              <St b1 g0 text={category} />
              <St b1 g2 text={` · ${date}`} />
            </Sv>
            <Sv col>
              <St s1 g0 mt={4} text={title} />
              <S.BodyText b1 g3 mt={8} text={body} />
            </Sv>
          </Sv>
          <S.Image src={imgSrc} width={112} height={112} objectFit="cover" />
        </Sv>
        <Sv mt={8}>
          <St c1 g2 text={`${likeCount} · ${viewCount}`} />
        </Sv>
        <Sv h={1} bg={colors.g4} mt={32} />
      </Sv>
    </Link>
  );
};

const S: any = {};

S.Image = styled(Image)``;

S.BodyText = styled(St)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-width: 608px;
`;
