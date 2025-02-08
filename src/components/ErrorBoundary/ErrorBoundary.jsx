import React from "react";
import {errorBoundary} from "../../Data/StaticData"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(errorBoundary?.message?.exceptionMessage, error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>{errorBoundary?.message?.errorMessage}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
