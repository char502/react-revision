import React from "react";

class RegComp extends React.Component {
  render() {
    console.log("Reg Comp Render");
    return <div>Regular Component {this.props.name}</div>;
  }
}

// A regular component does not implement the shouldComponentUpdate method. It always returns true by default

export default RegComp;
