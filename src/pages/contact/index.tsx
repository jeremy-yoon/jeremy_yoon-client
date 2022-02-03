import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, Profile, Comment, CommentInput } from "components";
import { Row, Col } from "antd";
import styled from "styled-components";
import { getRequest } from "apis/common";
import moment from "moment";
import { colors } from "styles/colors";
import parse from "html-react-parser";

export default function ContactModal() {
  return <S.Body></S.Body>;
}

const S = {};

S.Body = styled(Sv)`
  flex: 1;
  max-width: 512px;
`;
