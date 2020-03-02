import React from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

// should not mutate objects or arrays in props or state
// always return a new object or array when dealing with pure components

class ParentComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "char"
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "char"
      });
    }, 2000);
  }

  render() {
    console.log("****** Parent Comp Render ******");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
