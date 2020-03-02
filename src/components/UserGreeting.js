import React from "react";
import styled from "styled-components";

const UserGreetingContainer = styled.div`
  text-align: center;
`;

const HelloContainer = styled.div``;

const GuestContainer = styled.div``;

class UserGreeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  handleToggle = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <UserGreetingContainer>
        {/* ==== short Circuit Operator - render all or nothing === */}
        {isLoggedIn && <HelloContainer>Hello Char</HelloContainer>}
        <button onClick={this.handleToggle}>Toggle</button>
        {/* ======================================================= */}
        {/* ================ Ternary Operator ===================== */}
        {/* {isLoggedIn ? (
          <HelloContainer>Hello Char</HelloContainer>
        ) : (
          <GuestContainer>Welcome Guest</GuestContainer>
        )}
        <button onClick={this.handleToggle}>Toggle</button> */}
        {/* <HelloContainer>Hello Char</HelloContainer>
        <GuestContainer>Welcome Guest</GuestContainer> */}
      </UserGreetingContainer>
    );
  }
}

export default UserGreeting;
