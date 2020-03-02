import React from "react";

// a HOC - is a pattern where a function accepts a component as an argument and returns an enhanced component
// The HOC pattern is used to share common functionality between components without having to repeat the code

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    state = {
      count: 0
    };

    incrementCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incrementNumber
        };
      });
    };
    render() {
      console.log(this.props.name);

      const { count } = this.state;
      return (
        <WrappedComponent
          count={count}
          incrementCount={this.incrementCount}
          {...this.props}
          // The prop (in App.js) is sent to the HOC but not the component that is wrapped
          // To fix, need to pass these props using the spread operator
          // the '...this.props' passes down any remaining props that have been specified, in this case, it is including the 'name' prop in App,js
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

// ClickCounter and HoverCounter components (which both use this HOC) both receive separate state
// Incrementing the count in ClickCounter will not affect the count in HoverCounter and vice versa
