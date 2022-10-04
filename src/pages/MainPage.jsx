import React from "react";
import styled from "styled-components";
import Footer from "../components/Layout/Footer";
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
        <MainTitle>최근 게시글</MainTitle>
        <WeekHotPosts />
      </WeekHotArticle>
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  gap: 1rem;
  /* background-color: darkblue; */
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
  width: inherit;
  height: auto;
  /* background-color: #772222; */
  /* margin: 1rem; */
  padding: 1rem 75px;
`;

const MainTitle = styled.h1`
  font-size: 36pt;
  color: #42837b;
`;

export default MainPage;
