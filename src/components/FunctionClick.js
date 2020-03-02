import React from "react";
import styled from "styled-components";

const FunctionClickContainer = styled.div`
  text-align: center;
  padding-top: 10px;
`;

function FunctionClick() {
  function clickHandler() {
    console.log("Button Clicked");
  }
  return (
    <FunctionClickContainer>
      <button onClick={clickHandler}>Click</button>
    </FunctionClickContainer>
  );
}

export default FunctionClick;
