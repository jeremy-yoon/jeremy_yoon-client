import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, ButtonL } from "components";
import dummy from "images/dummy.png";
import { colors } from "styles/colors";

interface CategoryListProps {
  href: string;
  imgSrc: StaticImageData;
  title: string;
  selectedCategory: boolean;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  href = "/",
  imgSrc = dummy,
  title = "title",
  selectedCategory,
}) => {
  return (
    <Sv
      col
      p={12}
      b={selectedCategory && `1px solid ${colors.g0}`}
      br={100}
      act
      jct
      style={{ minWidth: 80 }}
    >
      <S.BodyText
        en
        bold={selectedCategory}
        color={selectedCategory ? colors.g0 : colors.g4}
        text={title}
      />
    </Sv>
  );
};

const S: any = {};

S.Image = styled(Image)`
  max-width: 40px;
  max-height: 40px;
  border-radius: 100px;
`;

S.BodyText = styled(St)`
  font-size: 16px;
  font-weight: ${(props: any) => (props.bold ? "bold" : "normal")};
`;
