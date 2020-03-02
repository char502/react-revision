import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {name} Clicked {count} times
        </button>
      </div>
    );
  }
}

// The props are sent down with 'withCounter' not ClickCounter
// The prop (in App.js) is sent to the HOC but not the component that is wrapped
// To fix, need to pass these props using the spread operator
export default withCounter(ClickCounter, 5);

// Example of adding a parameter to a HOC - (ClickCounter, 5) - see the number 5, the increment is by 5 in this component and by 10 in the HoverCounter component
