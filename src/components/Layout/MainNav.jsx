import styled from "styled-components";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
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
      <AuthBtn to="/auth">로그인</AuthBtn>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  width: inherit;
  padding: 10px 15px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #bbb;
`;
const MainRouteContainer = styled.div`
  display: flex;
  width: 80%;
  padding: 20px 0px;
  justify-content: space-evenly;
  align-items: center;
`;

const NavTextContainer = styled.div`
  width: 20rem;
  height: 2rem;
  text-align: center;
  padding: 1rem;
  background-color: purple;
`;
const Logo = styled.img`
  width: 250px;
  height: auto;
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
  color: black;
  font-size: 15pt;

  &:hover {
    color: white;
    font-size: 20pt;
    font-weight: bold;
  }
`;

export default MainNavigation;
