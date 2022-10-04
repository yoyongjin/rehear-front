import React from "react";
import styled from "styled-components";

const PostCard = (props) => {
  return <CardContainer>{props.children}</CardContainer>;
};

const CardContainer = styled.div`
  background-color: white;
  border: 2px solid #cbe8dc;
  /* border-radius: 7px; */
  width: 250px;
  height: 360px;
  padding: 5px 10px;
`;

export default PostCard;
