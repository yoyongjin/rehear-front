import React, { useState } from "react";

const Categories = () => {
  const [selection, setSelection] = useState("");

  const onChangeSelectHandler = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div>
      <select onChange={onChangeSelectHandler}>
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
      </select>
      <p>Selected: {selection}</p>
    </div>
  );
};

export default Categories;
