import React from "react";
import styled from "styled-components";
import PostCard from "./PostCards";

const WeekHotPosts = () => {
  return (
    <PostSectionsContainer>
      <PostCard>
        <MainPostTitle>포스트1</MainPostTitle>
        <p>내용1</p>
      </PostCard>
      <PostCard>
        <MainPostTitle>포스트1</MainPostTitle>
        <p>내용1</p>
      </PostCard>
      <PostCard>
        <MainPostTitle>포스트1</MainPostTitle>
        <p>내용1</p>
      </PostCard>
      <PostCard>
        <MainPostTitle>포스트1</MainPostTitle>
        <p>내용1</p>
      </PostCard>
    </PostSectionsContainer>
  );
};

const PostSectionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: lightyellow;
  min-width: 1000px;
`;

const MainPostTitle = styled.h2`
  font-weight: bold;
`;

export default WeekHotPosts;
