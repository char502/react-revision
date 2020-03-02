import React from "react";
import styled from "styled-components";

const OtherContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const IndivContainer = styled.div`
  text-align: center;
  padding: 10px;
`;

function Person({ personData }) {
  return (
    <OtherContainer>
      <IndivContainer>
        <h2>{personData.name}</h2>
      </IndivContainer>
      <IndivContainer>
        <h2>{personData.age}</h2>
      </IndivContainer>
      <IndivContainer>
        <h2>{personData.skill}</h2>
      </IndivContainer>
    </OtherContainer>
  );
}

export default Person;
