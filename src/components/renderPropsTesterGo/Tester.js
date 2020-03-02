import React, { Component } from "react";

class Tester extends Component {
  state = {
    count: 0
  };

  increaseCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  };

  render() {
    return <>{this.props.render(this.state.count, this.increaseCount)}</>;
  }
}

export default Tester;
