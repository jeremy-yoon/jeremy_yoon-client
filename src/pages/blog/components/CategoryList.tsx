import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, ButtonL } from "components";
import dummy from "images/dummy.png";
import { colors } from "styles/colors";

interface CategoryItemProps {
  title: string;
  isSelected: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, isSelected }) => {
  return (
    <Sv
      p={12}
      b={`1px solid ${isSelected ? colors.g0 : "transparent"}`}
      br={100}
      act
      jct
      style={{ minWidth: 80 }}
    >
      <S.BodyText
        selectedCategory={isSelected}
        en
        bold={isSelected}
        color={isSelected ? colors.g0 : colors.g4}
        text={title}
        center
      />
    </Sv>
  );
};

interface CategoryListProps {
  selectedCategory: string;
  setSelectedCategory: Function;
  categoryList: any;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  categoryList = [],
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <S.ListContainer mt={30} row act gx={20}>
      {categoryList.map((item: any) => (
        <Sv py={8} pointer onClick={() => setSelectedCategory(item.title)}>
          <CategoryItem
            title={item.title}
            isSelected={selectedCategory == item.title}
          />
        </Sv>
      ))}
    </S.ListContainer>
  );
};

const S: any = {};

S.ListContainer = styled(Sv)`
  margin-left: -24px;
  margin-right: -24px;
  padding-left: 24px;
  padding-right: 24px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

S.Image = styled(Image)`
  max-width: 40px;
  max-height: 40px;
  border-radius: 100px;
`;

S.BodyText = styled(St)`
  font-size: 14px;
  font-weight: ${(props: any) => (props.bold ? "bold" : "normal")};
`;
