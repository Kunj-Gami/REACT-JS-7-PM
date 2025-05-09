import React from "react";
import { useState } from "react";
import L from "./L";
import S from "./S";
import C from "./C";

const App = () => {
  let [state, setState] = useState("");

  let handleLocal = () => {
    setState("");
  };
  let handleSession = () => {
    setState("session");
  };
  let handleCookie = () => {
    setState("cookie");
  };
  return (
    <>
      <button onClick={handleLocal}>LocalStorage</button>
      <button onClick={handleSession}>SessionStorage</button>
      <button onClick={handleCookie}>Cookies</button>

      {state == "" && <L/>}
      {state == "session" && <S/>}
      {state == "cookie" && <C/>}
    </>
  );
};

export default App;
