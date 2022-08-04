import React from "react";
import styled from "styled-components";

const LoginBtn = (props) => {
  return <LoginBtnContainer>{props.children}</LoginBtnContainer>;
};

const LoginBtnContainer = styled.button`
  width: 100%;
  height: 1.75rem;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export default LoginBtn;
