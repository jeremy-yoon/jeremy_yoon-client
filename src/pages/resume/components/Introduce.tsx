import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Sv, St, LinkWithThumbnailList } from "components";
import styled, { css } from "styled-components";
import { getRequest, postRequest } from "apis/common";
import { colors } from "styles/colors";

const Introduce: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Sv row mt={16}>
        <St h1 weight={200} text="안녕하세요." />
      </Sv>
      <St h1 weight={800} text="세상에 강한 임팩트를" />
      <St h1 weight={200} text="주고자 하는 개발자," />
      <Sv row>
        <St h1 weight={800} text="윤정탁" />
        <St h1 weight={200} text=" 입니다." />
      </Sv>
      <Sv mt={80} col>
        <St h3 g0 text="Introduce." />
        <St
          mt={20}
          g0
          b1
          text={`작년(2021년) 개발자로 전직해 1년간 프론트엔드 개발을 하였습니다. 그 이전엔 3년간의 그래픽 디자인 에이전시 운영 경험, 2년간의 UI/UX 설계 및 디자인 경험, 1년간의 스타트업 운영 경험을 가지고 있습니다. 한 명의 공동창업자와 스타트업을 시작해서 총 인원 9명 규모까지 확장하고, 작지만 M&A까지 이끌어나간 경험이 있습니다.

빠르고 명확한 소통, 효율적인 제품 개발을 위해 여러 가지 분야를 공부하고 경험하는 것을 좋아합니다. 스타트업 생활을 하며 직접 경영, 디자인, 개발 분야에 부딪히고 개발 역량과 커뮤니케이션 역량을 키우기 위해 적극적으로 노력해왔습니다.

시스템을 구축하고 효율적인 프로세스로 개선하는 것을 좋아합니다. 디자인 시스템을 구축해 UI디자인과 소통 속도를 상승시키고, 이 시스템에 부합하는 CSS framework를 개발해 UI 코딩 시간을 단축한 경험이 있습니다.

스타트업에서 여러 가지 분야를 경험해봤지만, 개발에 가장 큰 흥미를 느꼈고, 이제는 개발 역량을 높이는 데에 집중하여 좋은 개발자, 비즈니스적 임팩트를 줄 수 있는 개발자가 되고자 합니다.`}
        />
      </Sv>
    </>
  );
};

export default Introduce;

const S: any = {};
