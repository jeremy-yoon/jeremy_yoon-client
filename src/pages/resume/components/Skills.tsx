import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, LinkWithThumbnailList } from "components";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import { colors } from "styles/colors";

const Skills: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <St h3 text="Skill." />
      <St>
        {`Front-End: JavaScript, React.js, React Native, Next.js, HTML, CSS(SCSS)`}
      </St>
      <St>{`Design: Figma, Sketch, XD, Zeplin, Adobe tools`}</St>
    </>
  );
};

export default Skills;

const S: any = {};
