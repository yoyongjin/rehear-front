import React, { useState } from "react";
import styled from "styled-components";
import likeImg from "../../../assets/like.png";
import likedImg from "../../../assets/liked.png";

const LikeBtn = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);

  const likeToggle = () => {
    setIsLiked(!isLiked);
    setLikedCount(likedCount + 1);
    console.log(likedCount);
  };
  return (
    <LikeContainer>
      {!isLiked ? (
        <LikeImg onClick={likeToggle} src={likeImg} />
      ) : (
        <LikedImg onClick={likeToggle} src={likedImg} />
      )}
      <LikedSpan>{likedCount}</LikedSpan>
    </LikeContainer>
  );
};

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
`;
const LikeImg = styled.img``;
const LikedImg = styled.img``;

const LikedSpan = styled.span`
  margin-left: 5px;
  font-size: 12pt;
  font-weight: 400;
`;

export default LikeBtn;
