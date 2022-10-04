import React, { useRef } from "react";
import styled from "styled-components";
import Line from "../components/Layout/Line";
import Categories from "../components/UI/Posting/Categories";
import RadioBtn from "../components/UI/Posting/RadioBtn";
import pencil from "../assets/pencil.png";

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
    <FormContainer>
      <form onSubmit={onSubmitHandler}>
        <LineContainer>
          <label htmlFor="title">
            <FormTitle>글 제목</FormTitle>
          </label>
          <StyledInput
            ref={postTitleInputRef}
            type="text"
            id="title"
            placeholder="글제목"
          />
        </LineContainer>
        <Line />
        <LineContainer>
          <label>
            <FormTitle>창업 기간</FormTitle>
          </label>
          <RadioBtn />
        </LineContainer>

        <Line />
        <LineContainer>
          <label>
            <FormTitle>카테고리</FormTitle>
          </label>
          <Categories />
        </LineContainer>
        <Line />
        <LineContainer>
          <label>
            <FormTitle>#태그</FormTitle>
          </label>
          <StyledInput />
        </LineContainer>
        <Line />
        <LineContainer>
          <label>
            <FormTitle>내용</FormTitle>
          </label>
          <PostingTextArea placeholder={postingContentPlaceholder} />
        </LineContainer>
        <BtnContainer>
          <SubmitBtn primary type="submit">
            <SubmitPencilImg src={pencil} />
            완료
          </SubmitBtn>
        </BtnContainer>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  /* background-color: lightcoral; */
  height: 800px;
  padding: 50px;
`;
const LineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15pt;
  font-family: sans-serif;
  padding: 15px 0;
`;

const FormTitle = styled.span`
  font-size: 15pt;
  font-family: sans-serif;
  font-weight: 600;
  margin-right: 20px;
`;

const StyledInput = styled.input`
  border: 1px solid #aaa;
  border-radius: 5px;
  width: 85%;
  height: 40px;
  padding-left: 10px;
`;

const PostingTextArea = styled.textarea`
  width: 86.2%;
  min-height: 300px;
  resize: none;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 12pt;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SubmitBtn = styled.button`
  border: none;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em 0.35em 1em;
  cursor: pointer;
  border-radius: 3px;
  background-color: #42837b;
  color: white;
`;

const SubmitPencilImg = styled.img`
  width: 20px;
  height: 20px;
  filter: invert(1);
  position: relative;
  top: 2px;
  left: -1px;
`;

export default PostingPage;
