import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, PostList } from "components";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import { colors } from "styles/colors";

const SearchScreen: React.FC = () => {
  const router = useRouter();

  const [keyword, setKeyword] = useState("keyword");

  return (
    <>
      <Sv>
        <Sv px={120} col>
          <Sv row mt={64}>
            <St h2 weight={800} text={`${keyword}`} />
            <St h2 weight={200} text="에 대한 검색결과" />
          </Sv>
          <Sv h={1} bg={colors.g5} my={20} />
          {/* <PostList />
          <PostList />
          <PostList /> */}
        </Sv>
      </Sv>
    </>
  );
};

export default SearchScreen;

const S: any = {};
