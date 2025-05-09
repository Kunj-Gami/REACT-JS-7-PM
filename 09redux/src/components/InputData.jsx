import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";

const InputData = () => {
  const [text, setText] = useState();
  const disptach  = useDispatch()
  let handleAdd = () => {
      if(text !== ""){
        disptach(addTodo(text))
        setText("")
      }
  };
  return (
    <>
      <div className="todo-input-area">
        <input
          type="text"
          placeholder="Enter a task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
};

export default InputData;
