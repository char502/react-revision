import React from "react";
import styled from "styled-components";

const CounterContainer = styled.div`
  text-align: center;
  padding-bottom: 20px;
  width: 300px;
  margin: 0 auto;
  background-color: lightcyan;
`;

const ButttonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrease = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
    console.log(this.state.count);
  };
  // =======================================================
  // react may group multiple setState calls into a single update for better performance - see line 55, handleIncrease called 5 time
  // these will be implemeted all in one go and incrementing the count will not carry over between the different calls
  // so, whenever need to update the state based on a previous state, need to pass a function as an argument to the setState method instead of passing an object so:
  // this.setState((prevState) => {
  //   count: prevState.count + 1;
  // });

  // =======================================================

  // ======== First Example without prevState ==========
  //   handleIncrease = () => {
  //     this.setState(
  //       {
  //         count: this.state.count + 1
  //       },
  //       () => {
  //         console.log(this.state.count);
  //       }
  //     );
  //     // Whenever need to execute some code after the state has changed
  //     // do not place that code after the setState method
  //     console.log(this.state.count); // is called before setState is called/state is set so will always be a step behind
  //     // setState is asynchronous
  //     // may want to execute some code only after the state has been updated
  //   };

  handleIncrementFive = () => {
    this.handleIncrease();
    this.handleIncrease();
    this.handleIncrease();
    this.handleIncrease();
    this.handleIncrease();
    // react may group multiple setState calls into a single update for better performance
    // these will be implemeted all in one go and incrementing the count will not carry over between the different calls
    // so, whenever need to update the state based on a previous state, need to pass a function as an argument to the setState method instead of passing an object so:
    // this.setState((prevState) => {
    //   count: prevState.count + 1;
    // });
  };

  handleDecrease = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <CounterContainer>
        <h1>This is a Counter</h1>
        <div>
          <p>Count: {this.state.count}</p>
          <ButttonContainer>
            <div>
              <button onClick={this.handleIncrementFive}>Increase</button>
            </div>
            <div>
              <button onClick={this.handleDecrease}>Decrease</button>
            </div>
          </ButttonContainer>
        </div>
      </CounterContainer>
    );
  }
}

export default Counter;
