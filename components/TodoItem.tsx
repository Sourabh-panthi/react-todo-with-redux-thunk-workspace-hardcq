import React from "react";

const TodoItem = ({ id,text, completed, onClick }) => {
  return (
    <li className="todo-item"
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      <div style={{ width: "400px" }}>{text}</div>
    </li>
  );
};

export default TodoItem;
