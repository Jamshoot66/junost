import React from "react";
import Test from "../components/Test";

class Index extends React.Component {
  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error("errorInfo", error);
    // eslint-disable-next-line no-console
    console.error("errorInfo", errorInfo);
  }

  render() {
    return <Test />;
  }
}

export default Index;