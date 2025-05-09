import React from "react";
import Cookies from "js-cookie";

const C = () => {
  return (
    <div>
      <h1>COOKIES</h1>
      {Cookies.set("name","kunj",{expires : 2})}
    </div>
  );
};

export default C;
