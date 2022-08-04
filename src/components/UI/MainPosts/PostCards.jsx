import React from "react";
import styled from "styled-components";

const PostCard = (props) => {
  return <CardContainer>{props.children}</CardContainer>;
};

const CardContainer = styled.div`
  background-color: white;
  border: 3px solid #cbe8dc;
  border-radius: 7px;
  width: 200px;
  height: 300px;
  padding: 10px;
`;

export default PostCard;
