import React from "react";
import styled from "styled-components";

const LoginBtn = (props) => {
  return <LoginBtnContainer>{props.children}</LoginBtnContainer>;
};

const LoginBtnContainer = styled.button`
  width: 360px;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  background-color: #42837b;
  color: #fff;
  font-size: 12pt;
  /* font-weight: bold; */
  &:hover {
    cursor: pointer;
  }
`;

export default LoginBtn;
