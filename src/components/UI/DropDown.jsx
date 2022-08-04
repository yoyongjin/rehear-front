import styled from "styled-components";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <DropDownContainer>
      <span>커뮤니티</span>
      <DropDownNavContainer>
        <DropDownLink to="/qna-board">질문 게시판</DropDownLink>
        <DropDownLink to="/ad-board">홍보 게시판</DropDownLink>
        <DropDownLink to="/talk">실시간 왁자지껄</DropDownLink>
      </DropDownNavContainer>
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  /* background-color: lightblue; */

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
