import React from "react";
import styled from "styled-components";

const SpacerDiv = styled.div`
  text-align: center;
  padding: 10px;
`;

const Welcome = ({ name, heroName }) => {
  return (
    <SpacerDiv>
      Name: {name} || Hero Name: {heroName}
    </SpacerDiv>
  );
};

export default Welcome;
