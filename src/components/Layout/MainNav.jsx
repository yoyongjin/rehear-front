import styled from "styled-components";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <MainNav>
      <NavContainer>
        <Link to="/">
          <Logo alt="logo" src="img/logo_rehear.png" />
        </Link>
        <MainRouteContainer>
          <MainNavLink to="/stories">리:히어 이야기</MainNavLink>
          <MainNavLink to="/posts">자유 게시판</MainNavLink>
        </MainRouteContainer>
        <AuthBtn to="/auth">로그인</AuthBtn>
      </NavContainer>
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
const NavContainer = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
`;
const MainRouteContainer = styled.div`
  display: flex;
  width: 80%;
  padding: 20px 0px;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.img`
  width: 120px;
  height: 43.95px;
  margin-top: 15px;
`;

const AuthBtn = styled(Link)`
  height: 30px;
  width: 95px;
  background: #83afaa;
  border: none;
  border-radius: 10px;
  font-size: 10pt;
  text-decoration: none;
  text-align: center;
  line-height: 30px;
  color: black;
  font-weight: bold;
  margin-right: 1rem;
`;

const MainNavLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

export default MainNavigation;
