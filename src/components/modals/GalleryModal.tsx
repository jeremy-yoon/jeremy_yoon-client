import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Sv, St, ButtonL } from "components";
import styled from "styled-components";
import { Image } from "antd";

interface GalleryModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
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
        title="이 맛에 일하지 🚀"
        visible={isModalVisible}
        onCancel={handleCancel}
        cancelText="닫기"
      >
        <S.ImagesWrapper>
          <Image
            width="100%"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image
            width="100%"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image
            width="100%"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image
            width="100%"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </S.ImagesWrapper>
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

S.ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;
