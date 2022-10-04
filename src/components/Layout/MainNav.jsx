import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import DropDown from "../UI/Auth/DropDown";
import Line from "./Line";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div>
      <NavContainer>
        <Link to="/">
          <Logo alt="logo" src="img/logo_rehear.png" />
        </Link>
        <MainRouteContainer>
          <NavTextContainer>
            <MainNavLink to="/stories">리:히어 이야기</MainNavLink>
          </NavTextContainer>
          <NavTextContainer>
            <MainNavLink to="/posts">자유 게시판</MainNavLink>
          </NavTextContainer>
        </MainRouteContainer>

        {!isLoggedIn ? <AuthBtn to="/auth">로그인</AuthBtn> : <DropDown />}
      </NavContainer>
      <Line />
    </div>
  );
};

const NavContainer = styled.div`
  display: flex;
  width: inherit;
  padding: 5px 30px;
  justify-content: space-between;
  align-items: center;
  /* background-color: #bbb; */
`;
const MainRouteContainer = styled.div`
  display: flex;
  width: 80%;
  padding: 20px 0px;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: #aaa; */
  padding-right: 80px;
  font-weight: 600;
`;

const NavTextContainer = styled.div`
  width: 20rem;
  height: 2rem;
  text-align: center;
  padding: 1rem;
  /* background-color: purple; */
`;
const Logo = styled.img`
  width: 250px;
  height: auto;
`;

const AuthBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 120px;
  background: #83afaa;
  border: none;
  border-radius: 7px;
  font-size: 15pt;
  text-decoration: none;
  text-align: center;
  line-height: 30px;
  color: #fff;
  font-weight: 600;
  margin-right: 1rem;
  &:hover {
    background-color: #88cfbb;
    color: black;
  }
`;

const MainNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  line-height: 1rem;
  color: #000;
  font-size: 15pt;

  &:hover {
    color: #ccc;
    font-size: 20pt;
    font-weight: bold;
  }
`;

export default MainNavigation;
