import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  text-align: center;
`;

function ChildComponent({ handleClick }) {
  return (
    <ButtonContainer>
      {/* Arrow function easiest way to pass parameters to parent */}
      <button onClick={() => handleClick("Child")}>Greet Parent</button>
    </ButtonContainer>
  );
}

export default ChildComponent;
