import React from "react";
import styled from "styled-components";

import axios from "axios";

const postTitle = axios.get();

const MainPost = () => {
  return (
    <SectionContainer>
      <div>
        <h1>제목</h1>
        <p>내용</p>
        <div>좋아요</div>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
`;

export default MainPost;
