import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTodo, deleteTodo } from "../redux/action";

const DisplayData = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch()
  return (
    <div className="todo-list">
      {todos.map((e, i) => {
        return (
          <div className="todo-item" key={i}>
            <span className="task-text">{e}</span>
            <button className="delete-btn" onClick={()=>dispatch(deleteTodo(i))}>✕</button>
          </div>
        );
      })}
      <button onClick={dispatch(clearTodo(todos))}>ClearAll</button>
    </div>
  );
};

export default DisplayData;
