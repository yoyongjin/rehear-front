import React from "react";
import styled from "styled-components";
import WeekHotPosts from "../components/UI/MainPosts/WeekHotPosts";

const MainPage = () => {
  return (
    <MainContainer>
      {/* <Carousel>배너 광고</Carousel> */}
      <WeekHotArticle>
        <MainTitle>금주의 HOT 게시글</MainTitle>
        <WeekHotPosts />
      </WeekHotArticle>
      <WeekHotArticle>
        <MainTitle>최근에 올라온 질문</MainTitle>
        <WeekHotPosts />
      </WeekHotArticle>
      <WeekHotArticle>
        <MainTitle>여러분! 이 지원사업 확인 하셨나요?</MainTitle>
        <WeekHotPosts />
      </WeekHotArticle>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: darkblue;
  height: 1000px;
  min-width: 1000px;
`;

// const Carousel = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100px;
//   background-color: lightyellow;
// `;
const WeekHotArticle = styled.article`
  width: 100%;
  height: auto;
  background-color: white;
  margin: 1rem;
  padding: 1rem;
`;

const MainTitle = styled.h1`
  color: #42837b;
`;

export default MainPage;
