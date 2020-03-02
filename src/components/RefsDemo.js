import React, { Component } from "react";

class RefsDemo extends Component {
  // constructor(props) {
  //   super(props);

  //   this.inputRef = React.createRef();
  // }

  inputRef = React.createRef();

  componentDidMount() {
    console.log(this.inputRef);
    this.inputRef.current.focus();
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        {/* using the reserved 'ref' keyword points this input to the actual DOM node */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
