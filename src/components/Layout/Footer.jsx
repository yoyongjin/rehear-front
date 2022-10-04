import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>인터뷰 지원 | 문의: team.seoridam@gmail.com |</p>
      <FooterInnerContainer>
        <FooterInfoWhite>서리담 | 대표: 이시은</FooterInfoWhite>
        <FooterInfoWhite>이용약관 | 개인정보 처리방침</FooterInfoWhite>
      </FooterInnerContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #bbb;
  padding: 5px 20px;
  height: 200px;
  margin-top: 50px;
  padding-top: 30px;
  font-size: 14pt;
  width: 100%;
`;

const FooterInnerContainer = styled.div`
  margin-top: 1.75rem;
`;

const FooterInfoWhite = styled.p`
  color: white;
`;

export default Footer;
