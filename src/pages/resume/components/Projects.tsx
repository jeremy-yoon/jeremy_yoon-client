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
            <S.TitleLi>{`- 캐릭터, 공간 코디네이팅 시스템 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
            <S.TitleLi>{`- 인터렉티브 퀴즈 컨텐츠 제작 스튜디오 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
            <S.TitleLi>{`- 일상 공유, 게임 랭킹, 자체 콘테스트용 커뮤니티 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
          </S.Ul>
        </S.ProjectWrapper>

        <S.ProjectWrapper>
          <S.H3>{`테니스 플레이어 매칭 및 테니스장 예약 양도, 테니스 커뮤니티 서비스`}</S.H3>
          <S.S3>{`스매시, 빠르고 간편한 테니스 매칭/양도(주식회사 컨샐러드)`}</S.S3>
          <S.S3>{`2022.01 ~ 2022.04`}</S.S3>

          <S.Ul>
            <S.TitleLi>{`- 테니스 플레이어 매칭 시스템 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
            <S.TitleLi>{`- 테니스장 예약 양도 시스템 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
            <S.TitleLi>{`- 테니스 관련정보 공유 커뮤니티 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
          </S.Ul>
        </S.ProjectWrapper>

        <S.ProjectWrapper>
          <S.H3>{`채팅형 인터렉티브 웹소설 플랫폼 서비스`}</S.H3>
          <S.S3>{`샤벳, 새로운 웹소설(주식회사 컨샐러드)`}</S.S3>
          <S.S3>{`2021.10 ~ 현재`}</S.S3>

          <S.Ul>
            <S.TitleLi>{`- 인터렉티브 웹소설 뷰어 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
            <S.TitleLi>{`- 작가용 인터렉티브 웹소설 스튜디오 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
            <S.TitleLi>{`- 작가용 게시글 피드, 커뮤니티 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
          </S.Ul>
        </S.ProjectWrapper>

        <S.ProjectWrapper>
          <S.H3>{`여행 기록 공유 및 제주 여행지 추천 서비스`}</S.H3>
          <S.S3>{`탐라, 당신의 제주 타임라인(주식회사 컨샐러드)`}</S.S3>
          <S.S3>{`2021.07 ~ 2021.09`}</S.S3>

          <S.Ul>
            <S.TitleLi>{`- 여행 기록 타임라인 기능 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
            <S.TitleLi>{`- 서비스 전체 UI 뷰 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
          </S.Ul>
        </S.ProjectWrapper>

        <S.ProjectWrapper>
          <S.H3>{`와인 개인화 추천 및 와인 직구 서비스`}</S.H3>
          <S.S3>{`소믈리, 와인을 일상속으로(주식회사 컨샐러드)`}</S.S3>
          <S.S3>{`2021.05 ~ 2021.07`}</S.S3>

          <S.Ul>
            <S.TitleLi>{`- 서비스 소개페이지 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
            <S.TitleLi>{`- 서비스 전체 UI 뷰 개발`}</S.TitleLi>
            <S.Li>{`-`}</S.Li>
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
