import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, Profile } from "components";
import dummy from "images/dummy.png";

interface PostItProps {
  href: string;
  imgSrc: StaticImageData;
  title: string;
  body: string;
}

export const PostIt: React.FC<PostItProps> = ({
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

const S: any = {};

S.Image = styled(Image)``;
