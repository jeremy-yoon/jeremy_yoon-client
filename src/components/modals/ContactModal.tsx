import React, { useState } from "react";
import { Modal, Button } from "antd";

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
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
