import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Sv, St, ButtonL, ContactModal } from "components";
import profile_me from "images/profile_me.png";

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
  const [isContactModalVisible, setIsContactModalVisible] = useState(false);

  return (
    <>
      <Sv col pt={40}>
        <Sv>
          <S.Image src={profile_me} width={88} height={88} objectFit="cover" />
        </Sv>
        <St s1 g0 text="Jeremy Yoon" />
        <Sv h={4} />
        <St
          b2
          g3
          text={`효율적으로 일하는 방법을 고민하는 개발자 윤정탁 입니다.
현재 컨샐러드에서 프로덕트 디자이너 겸 프론트엔드 개발자로 일하고 있습니다. 
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
            title="GitHub Profile"
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
