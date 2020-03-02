import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
  componentRef = React.createRef();

  clickHandler = () => {
    this.componentRef.current.focusInput();
    // .current gives access to the input component
    // which then allow the calling of the focusInput method
  };

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
