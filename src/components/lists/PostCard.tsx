import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, Profile } from "components";
import { SvTest } from "components/styled-components/StyledComponentTest";
import dummy from "images/dummy.png";

interface PostCardLProps {
  href: any;
  imgSrc: StaticImageData;
  title: string;
  body: string;
}
export const PostCardL: React.FC<PostCardLProps> = ({
  href = "/",
  imgSrc = dummy,
  title = "title",
  body = "body",
}) => {
  return (
    <Link href={href}>
      <Sv row pointer>
        <S.Image
          src={imgSrc}
          width="676px"
          height="352px"
          objectFit="cover"
          placeholder="blur"
        />
        <Sv ml={24}>
          <Sv col mt={16}>
            <St s1 g0>
              {title}
            </St>
            <St b1 g3>
              {body}
            </St>
          </Sv>
        </Sv>
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
