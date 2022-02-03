import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, Profile } from "components";
import dummy from "images/dummy.png";
import { colors } from "styles/colors";
import { Input } from "antd";
const { TextArea } = Input;
// import { Editor } from "@toast-ui/react-editor";

interface PostEditorProps {
  href: string;
  title: string;
}

export const PostEditor: React.FC<PostEditorProps> = ({
  href = "",
  title = "title",
}) => {
  return (
    <>
      {/* <TextArea placeholder="Basic usage" bordered={false} /> */}
      {/* <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      /> */}
    </>
  );
};

const S: any = {};

S.Input = styled.input``;
