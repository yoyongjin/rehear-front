import React from "react";
import styled from "styled-components";
import Line from "../components/Layout/Line";

const RehearStory = () => {
  return (
    <StoryContainer>
      <StoryTitle>
        '창업가의 이야기에 귀 기울이는
        <br />
        리:히어'
      </StoryTitle>
      <Line />
      <Explanation>
        저희 서리담 팀은 고민했습니다. <br />
        왜 우리나라에는 건강하고 활발한 창업 커뮤니티가 없을까? <br />
        <br />
        그래서, 저희가 만들어 나가기로 했습니다.
        <br />
        예비/초기 창업가부터 숙련된 기창업자들까지
        <br /> 한 데 어우러져 다양한 인사이트와 경험을 공유하며 네트워킹이
        가능한 커뮤니티. <br />
        리:히어에서 뵙겠습니다.
      </Explanation>
    </StoryContainer>
  );
};

const StoryContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StoryTitle = styled.h1`
  text-align: center;
`;

const Explanation = styled.p`
  white-space: pre-line;
`;

export default RehearStory;
