import React, { useRef } from "react";
import styled from "styled-components";
import Line from "../components/Layout/Line";
import Categories from "../components/UI/Posting/Categories";
import RadioBtn from "../components/UI/Posting/RadioBtn";

const PostingPage = () => {
  const postTitleInputRef = useRef("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log({
      title: postTitleInputRef.current.value,
      // period:
    });
  };

  const postingContentPlaceholder = `내용을 입력해주세요

  리히어는 건강한 커뮤니티를 만들기 위해 노력하고 있습니다. 커뮤니티 이용 규칙을 준수하여 주세요.
  다음과 같은 글들은 통보없이 삭제됩니다.
  - 욕설, 비속어 등으로 불쾌감을 주는 글
  - 음란물, 성적 수치심을 유발하는 글
  `;

  return (
    <PostingContainer>
      <FormContainer>
        <form onSubmit={onSubmitHandler}>
          <LineContainer>
            <label htmlFor="title">글제목</label>
            <input
              ref={postTitleInputRef}
              type="text"
              id="title"
              placeholder="글제목"
            />
          </LineContainer>
          <Line />
          <LineContainer>
            <label>창업기간</label>
            <RadioBtn />
          </LineContainer>

          <Line />
          <LineContainer>
            <label>카테고리</label>
            <Categories />
          </LineContainer>
          <Line />
          <LineContainer>
            <label>#태그</label>
            <input />
          </LineContainer>
          <Line />

          <PostingTextArea placeholder={postingContentPlaceholder} />
          <button type="submit">완료</button>
        </form>
      </FormContainer>
    </PostingContainer>
  );
};

const PostingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgreen;
  align-items: center;
  margin: 45px 15px;

  /* width: 90%; */
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;
const LineContainer = styled.div`
  display: flex;
`;

const PostingTextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
  resize: none;
`;
export default PostingPage;
