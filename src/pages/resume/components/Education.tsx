import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, LinkWithThumbnailList } from "components";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import { colors } from "styles/colors";

const Education: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <St h3 text="Education." />
      <St text={`2013.03 - 2016.02 선린인터넷고등학교 웹운영과 졸업`} />
    </>
  );
};

export default Education;

const S: any = {};
