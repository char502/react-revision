import React, { Component } from "react";

export class childTester extends Component {
  render() {
    const { stateCount, increaseCountFunc } = this.props;
    return (
      <div>
        <button onClick={increaseCountFunc}>Clicked {stateCount} times</button>
      </div>
    );
  }
}

export default childTester;
