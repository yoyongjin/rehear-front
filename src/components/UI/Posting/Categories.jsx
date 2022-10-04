import React, { useState } from "react";
import styled from "styled-components";

const Categories = () => {
  const [selection, setSelection] = useState("");

  const onChangeSelectHandler = (event) => {
    setSelection(event.target.value);
    console.log(selection);
  };

  return (
    <CategorySelectContainer>
      <SelectBox onChange={onChangeSelectHandler}>
        <option value="category">--카테고리를 선택해주세요</option>
        <option value="숙박/음식점업">숙박/음식점업</option>
        <option value="도매/소매업">도매/소매업</option>
        <option value="제조업">제조업</option>
        <option value="개인 서비스업">개인 서비스업</option>
        <option value="교육 서비스업">교육 서비스업</option>
        <option value="운수/창고업">운수/창고업</option>
        <option value="예술/스포츠/여가">예술/스포츠/여가</option>
        <option value="부동산업">부동산업</option>
        <option value="건설업">건설업</option>
        <option value="기타">기타</option>
      </SelectBox>
      {/* <p>Selected: {selection}</p> */}
    </CategorySelectContainer>
  );
};

const CategorySelectContainer = styled.div`
  border: 1px solid #aaa;
  border-radius: 5px;
  width: 85.7%;
  height: 40px;
  padding-left: 5px;

  /* background-color: black; */
  margin-left: 20px;
`;

const SelectBox = styled.select`
  width: 100%;
  height: 40px;
  background: white;
  color: #000;
  padding-left: 5px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  /* margin-left: 10px; */

  option {
    color: darkgray;
    background: white;
    display: flex;
    white-space: pre;

    /* min-height: 30px; */
    padding: 0px 2px 1px;
  }
`;

export default Categories;
