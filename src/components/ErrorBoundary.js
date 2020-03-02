import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  // this is used to log the errors
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong</h1>;
      // Will always see error during development but can click to close to see the alternative 'comething went wrong' component
    }
    return this.props.children;
    // If no error return component actually rendering
  }
}

export default ErrorBoundary;

// error boundaries catch errors:

// - During Rendering
// - In lifecycle methods
// - In the constructors of the whole tree below them

// However, they do not catch errors from:

// - inside event handlers

// If have onClick handler and want to catch an error, just need to use the regular try/catch statements and not error boundaries
