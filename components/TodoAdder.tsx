import React from "react";

let TodoAdder = ({ onSubmit }) => {
  let inputHandle;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!inputHandle.value.trim()) {
            return;
          } else {
            onSubmit(inputHandle.value);
            inputHandle.value = "";
          }
        }}
      >
        <input style={{width:362}} ref={node => (inputHandle = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoAdder;
