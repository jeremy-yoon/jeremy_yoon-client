import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, ButtonL, ContactModal, MotionButton } from "components";
import profile_me from "images/profile_me.png";
import { colors } from "styles/colors";

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
  const [isContactModalVisible, setIsContactModalVisible] = useState(false);

  return (
    <>
      <Sv col pt={40}>
        <Sv row>
          <MotionButton>
            <S.ProfileImageWrapper>
              <S.Image
                src={profile_me}
                width={88}
                height={88}
                objectFit="cover"
                placeholder="blur"
                draggable="false"
              />
            </S.ProfileImageWrapper>
          </MotionButton>
        </Sv>
        <St mt={8} s1 g0 text="Jeremy Yoon" />
        <St
          mt={4}
          b2
          g3
          text={`효율적으로 일하는 방법을 고민하는 개발자 윤정탁 입니다.
현재 컨샐러드에서 프로덕트 디자이너 겸 프론트엔드 디벨로퍼로 일하고 있습니다. 
`}
        />
        <Sv h={40} />
        <Sv col gy={8}>
          <ButtonL
            title="연락하기"
            onClick={() => setIsContactModalVisible(true)}
          />
          <ButtonL
            isOpenNewTab
            title="GitHub 프로필"
            href="https://github.com/jeremy-yoon"
            line
          />
        </Sv>
      </Sv>
      <ContactModal
        isModalVisible={isContactModalVisible}
        setIsModalVisible={setIsContactModalVisible}
      />
    </>
  );
};

const S: any = {};

S.Image = styled(Image)`
  max-width: 40px;
  max-height: 40px;
  border-radius: 100px;
`;

S.ProfileImageWrapper = styled.div`
  outline: 2px solid ${colors.primary};
  border-radius: 100px;
  width: 94px;
  height: 94px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
