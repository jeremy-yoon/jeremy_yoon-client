import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, Profile } from "components";
import dummy from "images/dummy.png";
import { colors } from "styles/colors";
import { Input } from "antd";
const { TextArea } = Input;

interface EditorInputProps {
  href: string;
  title: string;
}

export const EditorInput: React.FC<EditorInputProps> = ({
  href = "",
  title = "title",
}) => {
  return (
    <>
      <TextArea placeholder="Basic usage" bordered={false} />
    </>
  );
};

const S: any = {};

S.Input = styled.input``;
