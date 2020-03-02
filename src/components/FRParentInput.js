import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParentInput extends Component {
  inputRef = React.createRef();

  handleClick = () => {
    this.inputRef.current.focus();
    // because using forwardRef, ref.current points to the native input element and NOT the FRInput component instance
  };

  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
