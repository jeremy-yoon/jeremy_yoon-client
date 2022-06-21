import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Sv, St, ButtonL } from "components";
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
          <St s2 text="coco@consalad.io" mb={20} />
          <ButtonL
            title="이메일 보내기"
            isOpenNewTab
            href={"mailto:coco@consalad.io"}
          />
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
