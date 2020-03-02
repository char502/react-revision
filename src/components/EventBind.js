import React from "react";
import styled from "styled-components";

const EventBindContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

const MessageDiv = styled.div`
  margin: 20px;
`;

class EventBind extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello"
    };
  }

  handleClick = () => {
    this.setState({
      message: "Goodbye"
    });
    console.log(this);
  };
  render() {
    const { message } = this.state;
    return (
      <EventBindContainer>
        <MessageDiv>{message}</MessageDiv>
        {/* <button onClick={this.handleClick}>Click</button> */}
        {/* ============================================================ */}
        <button onClick={() => this.handleClick()}>Click</button>
        {/* 
        - calling the event handler in the arrow function body and returning
        that value
        - this is why the () is required in this approach
        - Easiest way to pass parameters
        */}
        {/* ============================================================ */}
      </EventBindContainer>
    );
  }
}

export default EventBind;
