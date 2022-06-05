import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Sv, St } from "components";
import styled from "styled-components";

interface ContactModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isModalVisible,
  setIsModalVisible,
}) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <S.Modal
        title="연락하기"
        visible={isModalVisible}
        onCancel={handleCancel}
        cancelText="닫기"
      >
        <Sv col>
          <St text="이메일" />
          <a href="mailto:coco@consalad.io">
            <St s2 g0 decoration="underline" text="coco@consalad.io" />
          </a>
        </Sv>
      </S.Modal>
    </>
  );
};

const S: any = {};

S.Modal = styled(Modal)`
  .ant-btn-primary {
    display: none;
  }
`;
