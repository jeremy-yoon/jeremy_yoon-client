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
  title: string;
  body: string;
}
export const PostList: React.FC<PostListProps> = ({
  href = "/",
  imgSrc = dummy,
  date = "date",
  title = "title",
  body = "body",
}) => {
  return (
    <Link href={href}>
      <Sv pt={32}>
        <Sv row jsb pointer w="100%">
          <Sv>
            <St b1 g0 text={date} />
            <Sv col>
              <St s1 g0 mt={4} text={title} />
              <St b1 g3 mt={8} text={body} />
            </Sv>
          </Sv>
          <S.Image src={imgSrc} width={112} height={112} objectFit="cover" />
        </Sv>
        <Sv h={1} bg={colors.g4} mt={32} />
      </Sv>
    </Link>
  );
};

interface PostCardMProps {
  href: any;
  imgSrc: StaticImageData;
  title: string;
  body: string;
}
export const PostCardM: React.FC<PostCardMProps> = ({
  href = "/",
  imgSrc = dummy,
  title = "title",
  body = "body",
}) => {
  return (
    <Link href={href}>
      <Sv>
        <S.Image
          src={imgSrc}
          layout="responsive"
          width="504px"
          height="280px"
          objectFit="cover"
        />
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

interface PostCardSProps {
  href: any;
  imgSrc: StaticImageData;
  title: string;
  body: string;
}
export const PostCardS: React.FC<PostCardSProps> = ({
  href = "/",
  imgSrc = dummy,
  title = "title",
  body = "body",
}) => {
  return (
    <Link href={href}>
      <Sv>
        <S.Image
          src={imgSrc}
          layout="responsive"
          width="400px"
          height="260px"
          objectFit="cover"
        />
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
