import React, { Component } from "react";
import MyContext from "./MyContext";

class MyProvider extends Component {
  state = {
    st: false
  };

  change = () => {
    this.setState({
      st: !this.state.st
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          st: this.state.st,
          change: this.change
        }}
      >
        <div>{this.props.children}</div>
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
