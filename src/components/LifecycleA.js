import React from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "char"
    };
    console.log("LifecycleA constructor");
  }

  // use static or the method will bei gnored
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
    console.log("=============================");
  }

  componentDidUpdate(prevProps, prevSrops) {
    if (prevProps.name !== this.state.name) {
      console.log("LifecycleA componentDidUpdate");
    }
  }

  handleChange = () => {
    this.setState({
      name: "Someone else"
    });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.handleChange}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
