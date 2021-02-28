import React from "react";

const TodoItem = (props) => {
  return (
    <ul className="Item">
      <h5
        style={
          props.checkClicked
            ? { color: "gray", textDecorationLine: "line-through" }
            : null
        }
      >
        {props.editClicked ? (
          <form>
            <input type="text" placeholder={props.value} />
          </form>
        ) : (
          props.value
        )}
      </h5>
      <button>CHECK</button>
      <button>EDIT</button>
      <button>DELETE</button>
    </ul>
  );
};

export default TodoItem;
