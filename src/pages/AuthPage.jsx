import React, { useState } from "react";
import styled from "styled-components";

import LoginBtn from "../components/UI/Auth/LoginBtn";

const AuthPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  const authToggle = (event) => {
    event.preventDefault();
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <LoginFormContainer>
      <Logo alt="logo" src="img/logo_rehear.png" />
      <h2>{isLoggedIn ? "로그인" : "회원가입"}</h2>
      <LoginForm>
        <InputContainer>
          {/* <Label>아이디</Label> */}
          <AuthInput type="text" placeholder="아이디를 입력하세요" />
        </InputContainer>
        <InputContainer>
          {/* <Label>비밀번호</Label> */}
          <AuthInput type="text" placeholder="비밀번호를 입력하세요" />
        </InputContainer>
        <LoginBtn>{isLoggedIn ? "로그인" : "회원가입"}</LoginBtn>

        <AuthToggleBtn onClick={authToggle}>
          {isLoggedIn ? "새 계정 만들기" : "기존 아이디로 로그인"}
        </AuthToggleBtn>
        <APILogin>
          <LoginBtn>카카오톡으로 로그인하기</LoginBtn>
          <LoginBtn>Google로 로그인하기</LoginBtn>
        </APILogin>
      </LoginForm>
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  height: 100vh;
`;
const Logo = styled.img`
  width: 240px;
  height: 87.9px;
  margin-top: 15px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  /* background-color: lightyellow; */
  width: 350px;
  padding: 20px 40px;

  align-items: center;
  justify-content: space-between;

  gap: 0.5rem;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  /* background-color: lightgreen; */
  padding: 5px;
  width: 100%;
`;
// const Label = styled.label`
//   display: inline-block;
//   width: 4rem;
//   /* background-color: red; */
// `;

const AuthInput = styled.input`
  height: 40px;
  width: 100%;
  padding-left: 0.75rem;
  border: none;
  border-radius: 5px;
`;

const AuthToggleBtn = styled.button`
  width: 60%;
  background-color: #fff;
  height: 1.75rem;
  border: none;
  background: none;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
const APILogin = styled.div`
  display: flex;
  /* background-color: lightcoral; */
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  width: inherit;
  padding: 5px;
  margin-top: 3rem;
`;

export default AuthPage;
