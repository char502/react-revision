import React from "react";
import styled from "styled-components";

const SpacerDiv = styled.div`
  text-align: center;
  padding: 10px;
`;

class Greet extends React.Component {
  state = { message: "hello visitor" };

  handleClick = () => {
    this.setState({
      message: "Thanks for Subscribing!"
    });
  };

  render() {
    const { message } = this.state;
    return (
      <SpacerDiv>
        <div>{message}</div>
        <div>
          <button onClick={this.handleClick}>Subscribe</button>
        </div>
      </SpacerDiv>
    );
  }
}

export default Greet;
