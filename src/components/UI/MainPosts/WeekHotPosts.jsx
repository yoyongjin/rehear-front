import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostCard from "./PostCards";

const WeekHotPosts = () => {
  const [hotTitle, setHotTitle] = useState([]);
  const [hotContent, setHotContent] = useState([]);

  useEffect(() => {
    const fetchHotTitle = async () => {
      const getTitle = await axios.get("http://localhost:5000/posts");
      setHotTitle(getTitle.data[0].title);
    };
    fetchHotTitle();
  }, []);
  useEffect(() => {
    const fetchHotContent = async () => {
      const getContent = await axios.get("http://localhost:5000/posts");
      setHotContent(getContent.data[0].content);
    };
    fetchHotContent();
  }, []);

  return (
    <PostSectionsContainer>
      <PostCard>
        <MainPostTitle>{hotTitle}</MainPostTitle>
        <p>{hotContent}</p>
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
`;

const MainPostTitle = styled.h2`
  font-weight: bold;
`;

export default WeekHotPosts;
