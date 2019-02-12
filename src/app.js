import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./hello";
import "./styles.scss";
import MyProvider from "./MyProvider";

class App extends Component {
  render() {
    return (
      <div>
        <MyProvider>
          <Hello />
        </MyProvider>
      </div>
    );
  }
}
export default App;
