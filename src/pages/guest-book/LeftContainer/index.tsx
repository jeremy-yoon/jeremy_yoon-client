import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, MainLogo, Comment, CommentInput } from "components";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import { colors } from "styles/colors";

const LeftContainer: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <S.Container>
        <Sv px={120} col>
          <MainLogo />
          <Sv row mt={16}>
            <St size={80} weight={200} text="안녕하세요." />
          </Sv>
          <St size={80} weight={800} text="세상에 강한 임팩트를" />
          <St size={80} weight={200} text="주고자 하는 개발자," />
          <Sv row>
            <St size={80} weight={800} text="윤정탁" />
            <St size={80} weight={200} text=" 입니다." />
          </Sv>
          <Sv mt={80} col>
            <St s1 text="Introduce." />
            <St
              text={`작년(2021년) 개발자로 전직해 6개월간 프론트엔드 개발을 하였습니다. 그 이전엔 3년간의 그래픽 디자인 에이전시 운영 경험, 2년간의 UI/UX 설계 및 디자인 경험, 1년 간의 스타트업 운영 경험을 가지고 있습니다. 한명의 공동창업자와 스타트업을 시작해서 총 인원 9명 규모까지 확장하고, 작지만 M&A까지 이끌어나간 경험이 있습니다.

빠르고 명확한 소통, 효율적인 제품 개발을 위해 여러가지 분야를 공부하고 경험하는 것을 좋아합니다. 스타트업 생활을 하며 직접 경영, 디자인, 개발 분야에 부딪히고 개발 역량과 커뮤니케이션 역량을 키우기 위해 적극적으로 노력해왔습니다.

시스템을 구축하고 효율적인 프로세스로 개선하는 것을 좋아합니다. 디자인 시스템을 구축해 UI디자인과 소통 속도를 상승시키고, 이 시스템에 부합하는 CSS framework를 개발해 UI 코딩 시간을 단축한 경험이 있습니다.

여러가지 일을 경험해왔지만, 개발에 큰 흥미를 느꼈고, 이제는 개발 역량을 높이는 데에 집중하여 좋은 개발자, 비즈니스 밸류를 높이는데에 기여할 수 있는 개발자가 되고자 합니다.`}
            />
          </Sv>
          <Sv mt={80} col>
            <St s1 text="Experience." />
            <St
              text={`## 컨샐러드 2021.06(설립) ~ 현재

소믈리(주류정보서비스), 탐라(여행정보서비스), 샤벳(웹소설 서비스) 개발 및 운영

- Front-End Developer
    - 자체 CSS framwork을 개발 및 도입해 UI코딩 시간을 평균 30%이상 단축
    - 샤벳 스튜디오(채팅형 웹소설 편집기 프로그램)을 기획 및 개발해  쉽고 편리하게 채팅형 웹소설을 작성할 수 있는 UX를 제공함.
    - 6개월간, 실제 출시 가능한 수준의 프로덕트 세가지 개발 완료.
- UI/UX Designer
    - atomic design system을 이용해 사내 디자인 시스템을 구축
    - 6개월간, 실제 출시 가능한 수준의 프로덕트 세가지 디자인 완료.
- 사내이사-Co-Founder

## 깔라만시 2020.07(설립) ~ 2021.06(M&A)

웹/모바일앱 개발 및 디자인 외주업체

- CEO/Co-Founder
    - 개발 직군 4명, 비개발 직군 3명 채용 및 1년간 유지
    - 주류직구 서비스 “소믈리” 아이템으로 청년창업사관학교 최종합격
- UI/UX Designer
    - 부사수 디자이너 2명 온보딩 및 업무 교육
    - SI 업무에 효율적인 디자인 시스템 구축
- PM(Product Manager)
    - 노션, 지라를 도입해 효율적인 협업, 커뮤니케이션, 업무 프로세스를 정립

## 와이콘즈 2019.01(설립) ~ 2021.03

연세대학교 학식 예약 및 결제 서비스 “Yammi”

- UI/UX Designer
    - 제품의 UI/UX를 총괄함으로서, 연세대학교의 한 식당을 시작으로 모든 식당, 모든 학생이 사용하는 단계까지 성장하는 데에 기여함.
    - 식당에서 주문을 접수하고 처리할 수 있는 POS시스템을 기획하고 제작함.

## 디프 2016.06(설립) ~ 2019.01

BX Design 및 기타 디자인 프로젝트를 진행하는 디자인 스튜디오

- BX Designer
    - 300여건의 BX Design 프로젝트 진행
- CEO/Co-Founder
    - 공부의신 강성태, 래퍼 원썬, 가수 그렉과 콜라보레이트로 카카오 이모티콘 기획 및 출시(그렉 미 출시)`}
            />
          </Sv>
          <Sv mt={80} col>
            <St s1 text="Skill." />
            <St
              text={`Front-End: JavaScript, React.js, React Native, Next.js, HTML, CSS(SCSS)

Design: Figma, Sketch, XD, Zeplin, Adobe tools`}
            />
          </Sv>
          <Sv mt={80} col>
            <St s1 text="Education." />
            <St
              text={`2013.03 - 2016.02 선린인터넷고등학교 소프트웨어과 졸업`}
            />
          </Sv>
        </Sv>
      </S.Container>
    </>
  );
};

export default LeftContainer;

const S: any = {};

const blur = css`
  background: ${colors.g8};
  backdrop-filter: blur(30px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

S.Container = styled(Sv)`
  position: relative;
  min-height: 100vh;
  width: 1024px;
  max-height: 100vh;
  padding-top: 72px;
  padding-bottom: 64px;
  z-index: 1;
  overflow-y: scroll;
  ${blur}
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
`;

S.RepresentImage = styled(Image)``;

S.BottomNavContainer = styled.div`
  position: fixed;
  bottom: 0;
`;
