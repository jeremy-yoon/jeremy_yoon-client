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
  categoryList: Array;
}

const CategoryItem: React.FC<CategoryListProps> = ({
  href = "/",
  imgSrc = dummy,
  title = "title",
  selectedCategory,
}) => {
  return (
    <Sv
      p={12}
      b={`1px solid ${selectedCategory ? colors.g0 : "transparent"}`}
      br={100}
      act
      jct
      style={{ minWidth: 80 }}
    >
      <S.BodyText
        selectedCategory={selectedCategory}
        en
        bold={selectedCategory}
        color={selectedCategory ? colors.g0 : colors.g4}
        text={title}
        center
      />
    </Sv>
  );
};

export const CategoryList: React.FC<CategoryListProps> = ({
  categoryList = [],
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <S.ListContainer mt={30} row act gx={20}>
      {categoryList.map((item, index) => (
        <Sv py={8} pointer onClick={() => setSelectedCategory(item.title)}>
          <CategoryItem
            title={item.title}
            selectedCategory={selectedCategory == item.title}
          />
        </Sv>
      ))}
    </S.ListContainer>
  );
};

const S: any = {};

S.ListContainer = styled(Sv)`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, auto));
  /* grid-template-columns: repeat(4, minmax(0, 1fr)); */
`;

S.Image = styled(Image)`
  max-width: 40px;
  max-height: 40px;
  border-radius: 100px;
`;

S.BodyText = styled(St)`
  font-size: 16px;
  font-weight: ${(props: any) => (props.bold ? "bold" : "normal")};
`;
