import React from "react";
import styled from "styled-components";

const ClassClickContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

class ClassClick extends React.Component {
  handleClick = () => {
    console.log("Button Clicked");
  };
  render() {
    return (
      <ClassClickContainer>
        <button onClick={this.handleClick}>Click Me!</button>
      </ClassClickContainer>
    );
  }
}

export default ClassClick;
