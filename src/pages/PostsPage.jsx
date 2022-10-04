// import {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "../components/UI/Posting/Search";

const PostsPage = () => {
  // const [postList, setPostList] = useState([]);

  return (
    <PostingContainer>
      <QnABanner>
        <BannerTextContainer>
          <h1>QnA - 이 질문 리:히어 해주세요!</h1>
          <p>여러분의 고민과 답변 모두 소중하게 다시 들여다보는 어쩌구</p>
        </BannerTextContainer>
        <Link to="/posting">
          <InquireBtn>질문하기</InquireBtn>
        </Link>
      </QnABanner>

      <Search />
    </PostingContainer>
  );
};

const PostingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QnABanner = styled.div`
  background-color: #cbe8dc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 10px;
  margin-top: 15px;
`;

const BannerTextContainer = styled.div`
  margin-left: 1rem;
`;

const InquireBtn = styled.button`
  margin-right: 2.5rem;
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export default PostsPage;
