import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, LinkWithThumbnailList } from "components";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import { colors } from "styles/colors";

const Projects: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <St h3 text="Project." />
      <St g1 b1>
        <S.ProjectWrapper>
          <S.H3>{`캐릭터 코디네이팅 및 실시간 커뮤니케이션 서비스`}</S.H3>
          <S.S3>{`2022.05 ~ 현재`}</S.S3>
          <S.S3>{`주디, 좀 귀여운 슬라임(주식회사 컨샐러드)`}</S.S3>

          <S.Ul>
            <S.TitleLi>{`- 캐릭터, 공간 코디네이팅 시스템 개발(Next.js)`}</S.TitleLi>
            <S.Li>{`- 모자, 눈, 얼굴, 손 등 총 8가지 타입의 의상을 장착/해제할 수 있고, 6가지 타입의 가구를 이용해 방을 꾸밀 수 있는 기능을 React를 이용해 개발`}</S.Li>
            <S.TitleLi>{`- 유저가 직접 도트 아이템을 창작 및 출시 할 수 있는 시스템 개발(Next.js)`}</S.TitleLi>
            <S.Li>{`- 도트 디자인 툴을 이용해 유저가 서비스 내에서 직접 도트 아이템을 디자인하고, 콘테스트와 유저 심사를 통해 아이템을 출품까지 할 수 있는 시스템을 개발`}</S.Li>
            <S.TitleLi>{`- 인터렉티브 퀴즈 컨텐츠 제작 스튜디오 개발(React.js)`}</S.TitleLi>
            <S.Li>{`- 퀴즈, 서베이, 심리테스트 등 선택지를 고르는 형태의 인터렉티브 컨텐츠를 제작할 수 있는 기능 개발`}</S.Li>
            <S.TitleLi>{`- 코디 공유, 게임 랭킹, 자체 콘테스트용 커뮤니티 개발(Next.js)`}</S.TitleLi>
            <S.Li>{`- 게시글, 댓글 CRUD, 부문별 랭킹 조회, 콘테스트 조회 및 투표 기능 개발`}</S.Li>
            <S.TitleLi>{`- 전반적인 프로덕트 아키텍처 설계 및 디자인 시스템 구축`}</S.TitleLi>
            <S.Li>{`- mvp부터 정식 서비스 출시까지 확장성을 고려한 아키텍처 설계 및 디자인 작업의 생산성과 일관성을 위한 디자인 시스템 구축`}</S.Li>
            <S.TitleLi>{`- `}</S.TitleLi>
            <S.Li>{`- `}</S.Li>
          </S.Ul>
        </S.ProjectWrapper>

        <S.ProjectWrapper>
          <S.H3>{`채팅형 인터렉티브 웹소설 플랫폼 서비스`}</S.H3>
          <S.S3>{`샤벳, 새로운 웹소설(주식회사 컨샐러드)`}</S.S3>
          <S.S3>{`2021.10 ~ 현재`}</S.S3>

          <S.Ul>
            <S.TitleLi>{`- 인터렉티브 웹소설 뷰어 개발(Next.js, React Native)`}</S.TitleLi>
            <S.Li>{`- 등장인물끼리 채팅하는 듯한 형식으로 읽을 수 있는 소설 뷰어 개발`}</S.Li>
            <S.TitleLi>{`- 작가용 인터렉티브 웹소설 스튜디오 개발(React)`}</S.TitleLi>
            <S.Li>{`- 소설의 등장인물별 프로필 생성, 등장인물끼리 채팅하는 듯한 형식의 소설을 직접 작성할 수 있는 스튜디오 개발`}</S.Li>
            <S.TitleLi>{`- 작가용 게시글 피드, 커뮤니티 개발(Next.js, React Native)`}</S.TitleLi>
            <S.Li>{`- 작가와 독자가 소통할 수 있도록, 글이나 일정 등을 피드에 올릴 수 있는 기능 개발`}</S.Li>
          </S.Ul>
        </S.ProjectWrapper>

        <S.ProjectWrapper>
          <S.H3>{`테니스 플레이어 매칭 및 테니스장 예약 양도, 테니스 커뮤니티 서비스`}</S.H3>
          <S.S3>{`스매시, 빠르고 간편한 테니스 매칭/양도(주식회사 컨샐러드)`}</S.S3>
          <S.S3>{`2022.01 ~ 2022.04`}</S.S3>

          <S.Ul>
            <S.TitleLi>{`- 테니스 플레이어 매칭 시스템 개발(React Native)`}</S.TitleLi>
            <S.Li>{`- 구력, 위치 등 플레이어 정보를 기반으로 매칭글을 생성하고, 그룹 또는 개인 플레이어가 매칭을 신청해 서로 매칭될 수 있는 시스템 개발`}</S.Li>
            <S.TitleLi>{`- 테니스장 예약 양도 시스템 개발(React Native)`}</S.TitleLi>
            <S.Li>{`- 위치, 시간 등 테니스 코트장 예약 정보를 기반으로 양도글을 생성하고, 양도 신청을 받아 예약을 양도할 수 있는 시스템 개발`}</S.Li>
            <S.TitleLi>{`- 테니스 관련 정보 공유 커뮤니티 개발(React Native)`}</S.TitleLi>
          </S.Ul>
        </S.ProjectWrapper>

        <S.ProjectWrapper>
          <S.H3>{`와인 개인화 추천 및 와인 직구 서비스`}</S.H3>
          <S.S3>{`소믈리, 와인을 일상속으로(주식회사 컨샐러드)`}</S.S3>
          <S.S3>{`2021.05 ~ 2021.07`}</S.S3>

          <S.Ul>
            <S.TitleLi>{`- 서비스 전체 UI 뷰 개발(React)`}</S.TitleLi>
            <S.Li>{`- 처음 개발에 입문하여 html/css를 이용해 뷰 구성과 스타일링을 하는 방법을 배우고, 선배 개발자들의 도움을 받아 아키텍처 구조에 대한 이해를 점차 습득`}</S.Li>
            <S.TitleLi>{`- 서비스 소개페이지 개발(React)`}</S.TitleLi>
            <S.Li>{`- 반응형 디자인과 애니메이션이 포함된 원페이지 소개페이지 개발`}</S.Li>
          </S.Ul>
        </S.ProjectWrapper>

        <S.ProjectWrapper>
          <S.H3>{`여행 기록 공유 및 제주 여행지 추천 서비스`}</S.H3>
          <S.S3>{`탐라, 당신의 제주 타임라인(주식회사 컨샐러드)`}</S.S3>
          <S.S3>{`2021.07 ~ 2021.09`}</S.S3>

          <S.Ul>
            <S.TitleLi>{`- 여행 기록 타임라인 기능 개발(React Native)`}</S.TitleLi>
            <S.Li>{`- React 프로젝트(소믈리)에서 습득한 지식을 바탕으로 진행한 첫 번째 React Native 프로젝트를 개발`}</S.Li>
            <S.TitleLi>{`- 서비스 전체 UI 뷰 개발(React Native)`}</S.TitleLi>
            <S.Li>{`- React Native에 대한 아키텍처를 공부하며 일반적인 개발 패턴에 대한 지식 습득`}</S.Li>
            <S.Li>{`- SCSS, Styled component를 도입해 개발`}</S.Li>
          </S.Ul>
        </S.ProjectWrapper>

        <S.ProjectWrapper>
          <S.H3>{`개인용 블로그`}</S.H3>
          <S.S3>{`JELog! - 젤로그(개인)`}</S.S3>
          <S.S3>{`2022.04 ~ 현재`}</S.S3>

          <S.Ul>
            <S.TitleLi>{`- 게시글, 방명록 등 커뮤니티 기능 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
          </S.Ul>
        </S.ProjectWrapper>
      </St>
    </>
  );
};

export default Projects;

const S: any = {};

S.H3 = styled(St)`
  font-size: 32px;
  margin-bottom: 8px;

  /* font-weight: 500; */
`;

S.S2 = styled(St)`
  font-size: 19px;
  font-weight: 500;
  margin-top: 8px;
  margin-bottom: 16px;
  color: ${colors.g4};
`;

S.S3 = styled(St)`
  font-size: 19px;
  font-weight: 500;
  font-weight: 500;
  color: ${colors.g4};
`;

S.Ul = styled(St)`
  display: flex;
  flex-direction: column;
`;

S.Li = styled(St)`
  margin-left: 16px;
  line-height: 1.5;
  color: ${colors.g2};
`;

S.TitleLi = styled(St)`
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 6px;
`;

S.LinkWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 100px;
`;

S.ProjectWrapper = styled(St)`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.g6};
`;
