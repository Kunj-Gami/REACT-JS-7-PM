import { useState } from "react";

function App() {
  let [isLoggedIn, setLoggedIn] = useState(false);
  let handleClick = () => {
    setLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <button onClick={handleClick}>
        {isLoggedIn ? "Logged Out" : "Logged In"}
      </button>
    </>
  );
}

export default App;
