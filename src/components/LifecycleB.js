import React from "react";

class LifecycleB extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "char"
    };
    console.log("LifecycleB constructor");
  }

  // use static or the method will bei gnored
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
    console.log("=============================");
  }

  componentDidUpdate(prevProps, prevSrops) {
    console.log("LifecycleB componentDidUpdate");
  }

  render() {
    console.log("LifecycleB render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
