import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostCard from "./PostCards";

const WeekHotPosts = () => {
  const [hotTitle, setHotTitle] = useState([]);

  useEffect(() => {
    const fetchHotTitle = async () => {
      const getTitle = await axios.get("http://localhost:5000/posts");
      setHotTitle(getTitle.data[0].title);
    };
    fetchHotTitle();
  }, []);
  return (
    <PostSectionsContainer>
      <PostCard>
        <MainPostTitle>{hotTitle}</MainPostTitle>
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
`;

const MainPostTitle = styled.h2`
  font-weight: bold;
`;

export default WeekHotPosts;
