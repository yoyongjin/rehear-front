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
  padding: 5px 10px;
  height: 150px;
  margin-top: 15px;
`;

const FooterInnerContainer = styled.div`
  margin-top: 1.75rem;
`;

const FooterInfoWhite = styled.p`
  color: white;
`;

export default Footer;
