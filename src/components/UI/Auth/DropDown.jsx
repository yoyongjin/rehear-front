import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context";

const DropDown = () => {
  const authCtx = useContext(AuthContext);

  return (
    <DropDownContainer>
      <span>{authCtx.renderedId}</span>
      <DropDownNavContainer>
        <DropDownLink to="/qna-board">마이페이지</DropDownLink>
        <DropDownLink to="/ad-board">프로필 설정</DropDownLink>
        <DropDownLink to="/talk">로그아웃</DropDownLink>
      </DropDownNavContainer>
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  background-color: lightblue;

  &:hover {
    color: white;
  }
`;
const DropDownNavContainer = styled.div`
  display: none;
  background-color: #aaaaaa;
  position: absolute;

  ${DropDownContainer}:hover & {
    display: block;
  }
`;

const DropDownLink = styled(Link)`
  display: block;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
export default DropDown;
