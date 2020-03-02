import React from "react";

class PureComp extends React.PureComponent {
  render() {
    console.log("Pure Comp Render"); // will not be re-rendered after first call
    return <div>Pure Component {this.props.name}</div>;
  }
}

// A pure component implements shoudComponentUpdate with a shallow props and state comparison

// pure components, by preventing unnecessary renders, can give you a performance boost in certain scenarios
// ============================================================================================================
// i.e. when rendering a list of 50 items by not rerendering them when it is not required, are going to have a good
// performance boost

export default PureComp;
