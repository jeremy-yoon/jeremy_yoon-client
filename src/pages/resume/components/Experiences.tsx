import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, LinkWithThumbnailList } from "components";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import { colors } from "styles/colors";

const Experiences: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <St h3 g0 text="Work Experience." />
      <St g1 b1 mt={20}>
        <Sv col>
          <S.H3>{`컨샐러드 2021.06(설립) ~ 현재`}</S.H3>
          <S.S2>
            {`소믈리(주류정보서비스), 탐라(여행정보서비스), 샤벳(웹소설 서비스) 개발 및 운영`}
          </S.S2>

          <S.Ul>
            <S.TitleLi>{`- Front-End Developer`}</S.TitleLi>

            <S.Li>{`- 자체 CSS framwork을 개발 및 도입해 UI코딩 시간을 평균 30%이상 단축`}</S.Li>
            <S.Li>{`- 샤벳 스튜디오(채팅형 웹소설 편집기 프로그램)을 기획 및 개발해  쉽고 편리하게 채팅형 웹소설을 작성할 수 있는 UX를 제공함.`}</S.Li>
            <S.Li>{`- 6개월간, 실제 출시 가능한 수준의 프로덕트 세가지 개발 완료.`}</S.Li>
            <S.TitleLi>{`- UI/UX Designer`}</S.TitleLi>
            <S.Li>{`- atomic design system을 이용해 사내 디자인 시스템을 구축`}</S.Li>
            <S.Li>{`- 6개월간, 실제 출시 가능한 수준의 프로덕트 세가지 디자인 완료.`}</S.Li>
            <S.Li>{`- 사내이사-Co-Founder`}</S.Li>
          </S.Ul>

          <S.LinkWrapper>
            <LinkWithThumbnailList title={"컨샐러드 운영"} />
          </S.LinkWrapper>

          <S.H3 text={`깔라만시 2020.07(설립) ~ 2021.06(M&A)`} />
          <S.S2>{`웹/모바일앱 개발 및 디자인 외주업체`}</S.S2>

          <S.Ul>
            <S.TitleLi>{`- CEO/Co-Founder`}</S.TitleLi>
            <S.Li>{`- 개발 직군 4명, 비개발 직군 3명 채용 및 1년간 유지`}</S.Li>
            <S.Li>{`- 주류직구 서비스 “소믈리” 아이템으로 청년창업사관학교 최종합격`}</S.Li>
            <S.TitleLi>{`- UI/UX Designer`}</S.TitleLi>
            <S.Li>{`- 부사수 디자이너 2명 온보딩 및 업무 교육`}</S.Li>
            <S.Li>{`- SI 업무에 효율적인 디자인 시스템 구축`}</S.Li>
            <S.TitleLi>{`- PM(Product Manager)`}</S.TitleLi>
            <S.Li>{`- 노션, 지라를 도입해 효율적인 협업, 커뮤니케이션, 업무 프로세스를 정립`}</S.Li>
          </S.Ul>

          <S.LinkWrapper>
            <LinkWithThumbnailList />
          </S.LinkWrapper>

          <S.H3>{`와이콘즈 2019.01(설립) ~ 2021.03`}</S.H3>

          <S.S2>{`연세대학교 학식 예약 및 결제 서비스 “Yammi”`}</S.S2>

          <S.Ul>
            <S.TitleLi>{`- UI/UX Designer`}</S.TitleLi>
            <S.Li>{`- 제품의 UI/UX를 총괄함으로서, 연세대학교의 한 식당을 시작으로 모든 식당, 모든 학생이 사용하는 단계까지 성장하는 데에 기여함.`}</S.Li>
            <S.Li>{`- 식당에서 주문을 접수하고 처리할 수 있는 POS시스템을 기획하고 제작함.`}</S.Li>
          </S.Ul>

          <S.LinkWrapper>
            <LinkWithThumbnailList />
          </S.LinkWrapper>

          <S.H3>{`디프 2016.06(설립) ~ 2019.01`}</S.H3>
          <S.S2>{`BX Design 및 기타 디자인 프로젝트를 진행하는 디자인 스튜디오`}</S.S2>

          <S.Ul>
            <S.TitleLi>{`- BX Designer`}</S.TitleLi>
            <S.Li>{`- 300여건의 BX Design 프로젝트 진행`}</S.Li>
            <S.TitleLi>{`- CEO/Co-Founder`}</S.TitleLi>
            <S.Li>{`- 공부의신 강성태, 래퍼 원썬, 가수 그렉과 콜라보레이트로 카카오 이모티콘 기획 및 출시(그렉 미 출시)`}</S.Li>
          </S.Ul>

          <S.LinkWrapper>
            <LinkWithThumbnailList />
          </S.LinkWrapper>
        </Sv>
      </St>
    </>
  );
};

export default Experiences;

const S: any = {};

S.H3 = styled(St)`
  font-size: 32px;
  /* font-weight: 500; */
`;

S.S1 = styled(St)`
  font-size: 26px;
  font-weight: 600;
`;

S.S2 = styled(St)`
  font-size: 19px;
  font-weight: 500;
  margin-top: 8px;
  margin-bottom: 16px;
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
  margin-top: 32px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;
