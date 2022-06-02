import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Sv, St } from "components";

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
      <Modal
        title="연락하기"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Sv col>
          <St text="이메일" />
          <a href="mailto:coco@consalad.io">
            <St s2 text="coco@consalad.io" />
          </a>
        </Sv>
      </Modal>
    </>
  );
};
