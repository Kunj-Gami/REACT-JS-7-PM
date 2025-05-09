import React from "react";
import DisplayData from "./components/DisplayData";
import InputData from "./components/InputData";

const App = () => {
  return (
    <>
      <div className="todo-wrapper">
        <InputData />
        <DisplayData />
      </div>
    </>
  );
};

export default App;
