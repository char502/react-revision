import React, { Component } from "react";

class CounterRenderProps extends Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  };
  render() {
    console.log(this.props.render);
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default CounterRenderProps;
