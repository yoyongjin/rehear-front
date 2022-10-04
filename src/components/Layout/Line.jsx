import React from "react";
import styled from "styled-components";

const Line = () => {
  return <HR />;
};

const HR = styled.div`
  width: 100%;
  height: 1px;
  margin: 5px 0;
  padding: 1px;
  border-top: 1px solid #ccc;
`;

export default Line;
