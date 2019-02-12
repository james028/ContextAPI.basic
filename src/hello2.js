import React from "react";
import MyContext from "./MyContext";

const Hello2 = () => {
  return (
    <MyContext.Consumer>
      {e => (
        <div>
          <button onClick={e.change}>Click</button>
          {e.st === false ? "red" : "green"}
        </div>
      )}
    </MyContext.Consumer>
  );
};
export default Hello2;
