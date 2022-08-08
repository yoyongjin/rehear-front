import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Line from "../components/Layout/Line";

const PostingPage = () => {
  const postTitleInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log({
      title: postTitleInputRef.current.value,
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
          {/* <FormContainer> */}
          <label htmlFor="title">글제목</label>
          <input
            ref={postTitleInputRef}
            type="text"
            id="title"
            placeholder="글제목"
          />
          <Line />

          <label>창업기간</label>
          <input type="radio" />

          <Line />

          <label>카테고리</label>
          <select>
            <option value="">--카테고리를 선택해주세요</option>
            <option value="">숙박/음식점업</option>
            <option value="">도매/소매업</option>
            <option value="">제조업</option>
            <option value="">개인 서비스업</option>
            <option value="">교육 서비스업</option>
            <option value="">운수/창고업</option>
            <option value="">예술/스포츠/여가</option>
            <option value="">부동산업</option>
            <option value="">건설업</option>
            <option value="">기타</option>
          </select>

          <Line />
          <div>
            <label>#태그</label>
            <input />
          </div>
          <Line />

          <PostingTextArea placeholder={postingContentPlaceholder} />
          <button type="submit">완료</button>
          {/* </FormContainer> */}
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

  /* width: 90%; */
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
`;
const PostingTextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
  resize: none;
`;
export default PostingPage;
