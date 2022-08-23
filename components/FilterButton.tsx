import React from "react";

export default props => {
  return (
    <button
      type="button"
      className={
        props.filter === props.name ? "btn btn-primary btn-space" : "btn btn-secondary btn-space"
      }
      onClick={() => props.onClick(props.name)}
    >
      {props.value}
    </button>
  );
};
