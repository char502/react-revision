import React from "react";
import styled from "styled-components";

const SpacerDiv = styled.div`
  text-align: center;
  padding: 10px;
`;

const ShowChildren = (props) => {
  return <SpacerDiv>{props.children}</SpacerDiv>;
};

export default ShowChildren;
