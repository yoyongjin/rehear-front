import React, { useState } from "react";
import styled from "styled-components";

const RadioBtn = () => {
  const [selection, setSelection] = useState(null);

  const selectChangeHandler = (event) => {
    const checkedValue = event.target.value;
    setSelection(checkedValue);

    // useState가 비동기적으로 동작하기 때문에 console.log(selection) 코드는 setSelection함수가 호출되기 전에 평가되어버린다.
    // 이를 동기적으로 동작하게 하는 여러가지 방법이 있지만, 해당 컴포넌트에서 전달할 내용은 submit 될 때 어짜피 비동기적으로 동작할 axios통신에서 쓰이기 때문에 따로 동기적인 방식으로 바꾸지 않는다.
  };
  console.log(selection);

  return (
    <RadioContainer>
      <ButtonContainer>
        <RadioButton
          type="radio"
          id="pre"
          value="예비창업가"
          checked={selection === "예비창업가"}
          onChange={(event) => selectChangeHandler(event)}
        />
        <label htmlFor="pre">예비창업가</label>
      </ButtonContainer>

      <ButtonContainer>
        <RadioButton
          type="radio"
          id="new"
          value="초기창업가(3년 미만)"
          checked={selection === "초기창업가(3년 미만)"}
          onChange={(event) => selectChangeHandler(event)}
        />
        <label htmlFor="new">초기창업가(3년 미만)</label>
      </ButtonContainer>

      <ButtonContainer>
        <RadioButton
          type="radio"
          id="pro"
          value="기창업가(7년 미만)"
          checked={selection === "기창업가(7년 미만)"}
          onChange={(event) => selectChangeHandler(event)}
        />
        <label htmlFor="pro">기창업가(7년 미만)</label>
      </ButtonContainer>
    </RadioContainer>
  );
};

const RadioContainer = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
`;

const ButtonContainer = styled.div``;

const RadioButton = styled.input``;

export default RadioBtn;
