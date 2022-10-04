import axios from "axios";
import React, { useState, useRef, useContext } from "react";
// import { useEffect } from "react";
import styled from "styled-components";

import LoginBtn from "../components/UI/Auth/LoginBtn";
import AuthContext from "../store/auth-context";
// import DuplicatedModal from "../components/UI/Auth/DuplicatedModal";

const AuthPage = () => {
  const userEmailInputRef = useRef();
  const userPasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogIn, setIsLogIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authToggle = (e) => {
    e.preventDefault();
    setIsLogIn((prevState) => !prevState);
  };

  const DuplicatedCheck = (e) => {
    e.preventDefault();

    const emailCheck = axios
      .get(
        `http://118.67.142.90:8080/duplicated/email/${userEmailInputRef.current.value}`
      )
      .then((res) => console.log(emailCheck));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = userEmailInputRef.current.value;
    const enteredPassword = userPasswordInputRef.current.value;

    // Email/PW validation

    setIsLoading(true);

    let url;

    if (isLogIn) {
      url = "http://118.67.142.90:8080/login";
    } else {
      url = "http://118.67.142.90:8080/join";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((data) => {
            let errorMessage = data.error.message;
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        authCtx.login(data.idToken);
        authCtx.getUserId(data.email);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <LoginFormContainer>
      <Logo alt="logo" src="img/logo_rehear.png" />
      <h2>{isLogIn ? "로그인" : "회원가입"}</h2>
      <LoginForm onSubmit={submitHandler}>
        <InputContainer>
          {/* <Label>아이디</Label> */}
          <CheckingInputContainer>
            <AuthInput
              ref={userEmailInputRef}
              type="text"
              placeholder="아이디를 입력하세요"
              required
            />
            {!isLogIn && (
              <EmailDuplicateCheckBtn onClick={DuplicatedCheck}>
                중복확인
              </EmailDuplicateCheckBtn>
            )}
          </CheckingInputContainer>
          {/* <DuplicatedModal>사용가능한 이메일입니다.</DuplicatedModal> */}
          <AuthInput
            ref={userPasswordInputRef}
            type="password"
            placeholder="비밀번호를 입력하세요"
            required
          />
          {!isLogIn && (
            <AuthInput
              placeholder="비밀번호를 한번 더 입력하세요"
              type="password"
              required
            />
          )}
        </InputContainer>

        {isLoading ? (
          <p>등록중...</p>
        ) : (
          <LoginBtn>{isLogIn ? "로그인" : "회원가입"}</LoginBtn>
        )}

        <AuthToggleBtn onClick={authToggle}>
          {isLogIn ? "새 계정 만들기" : "기존 아이디로 로그인"}
        </AuthToggleBtn>
        {isLogIn && (
          <APILogin>
            <LoginBtn>카카오톡으로 로그인하기</LoginBtn>
            <LoginBtn>Google로 로그인하기</LoginBtn>
          </APILogin>
        )}
      </LoginForm>
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #cbe8dc;

  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  height: 100vh;
`;
const Logo = styled.img`
  width: 240px;
  height: 87.9px;
  margin-top: 15px;
`;
const LoginForm = styled.form`
  display: flex;
  border-radius: 15px;

  flex-direction: column;
  background-color: #cbe8dc;
  width: 346px;
  padding: 40px 60px;

  align-items: center;
  justify-content: space-between;

  gap: 0.5rem;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
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
const CheckingInputContainer = styled.div`
  display: flex;
  width: 364px;
  /* 100%로 하면 왜 쫌 더 작게나오지? */
  gap: 5px;
  justify-content: space-between;
`;

const AuthInput = styled.input`
  height: 40px;
  width: 100%;
  padding-left: 0.75rem;
  border: 2px solid #cbe8dc;
  border-radius: 5px;
`;

const EmailDuplicateCheckBtn = styled.button`
  width: 100px;
  border: none;
  padding: 0;
  border-radius: 7px;
  &:hover {
    cursor: pointer;
  }
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
  border: 2px solid #cbe8dc;
`;

export default AuthPage;
