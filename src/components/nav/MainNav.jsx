import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "./Search";
import DropDown from "../UI/DropDown";
const MainNavigation = () => {
  return (
    <MainNav>
      <NavTopContainer>
        <Logo alt="logo" src="img/logo_rehear.png" />
        <Search />
        <AuthBtn to="/auth">로그인</AuthBtn>
      </NavTopContainer>
      <NavBottomContainer>
        <Link to="/stories">리:히어 이야기</Link>
        <Link to="/experiences">창업 경험담</Link>
        <Link to="/information">정보 마당</Link>
        <DropDown />
      </NavBottomContainer>
    </MainNav>
  );
};

const MainNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 300px; */
  background-color: red;
`;
const NavTopContainer = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
`;
const NavBottomContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  background-color: #bbb;
`;
const Logo = styled.img`
  width: 120px;
  height: 43.95px;
  margin-top: 15px;
`;

const AuthBtn = styled(Link)`
  height: 30px;
  width: 70px;
  padding-top: 5px;
  margin-top: 15px;
  background: #a2a9cd;
  border: none;
  border-radius: 10px;
  font-size: 10px;
  text-decoration: none;
  text-align: center;
  color: #ffffff;
`;

export default MainNavigation;
