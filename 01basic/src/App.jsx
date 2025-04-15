import React, { useState } from "react";

function App() {

  let [count , setCount] = useState(0)

  let plus = () => {
    setCount(count + 1)
  };
  let min = () => {
    setCount(count - 1)
  };

  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={plus}>Click to +</button>
      <button onClick={min}>Click to -</button>
    </>
  );
}

export default App;
