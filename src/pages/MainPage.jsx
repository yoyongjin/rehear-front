import React from "react";
import styled from "styled-components";
import MainNavigation from "../components/nav/MainNav";

const MainPage = () => {
  return (
    <MainContainer>
      <Carousel>배너 광고</Carousel>
      <Div3>blue</Div3>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background-color: yellow;
`;
const Div3 = styled.div`
  width: 200px;
  height: 300px;
  background-color: blue;
`;

export default MainPage;
