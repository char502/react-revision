import React from "react";
import styled from "styled-components";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent"
    };
  }

  greetParent = (childName) => {
    const { parentName } = this.state;

    alert(`Hello ${parentName} from ${childName}`);
  };

  render() {
    return (
      <div>
        <ChildComponent handleClick={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
