import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEdit,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./Todo.css";

const Todo = (props) => {
  const [index] = useState(props.index);
  const [newInput, setNewInput] = useState("");

  const setNewInputHandler = (e) => {
    setNewInput(e.target.value);
  };

  return (
    <div className="TodoItem">
      <h5
        style={
          props.onCheck
            ? { color: "gray", textDecorationLine: "line-through" }
            : null
        }
      >
        {props.onEdit ? (
          <form onSubmit={() => props.editInputHandler(index, newInput)}>
            <input
              type="text"
              className="EditItem"
              placeholder={props.value}
              onChange={setNewInputHandler}
            />
          </form>
        ) : (
          props.value
        )}
      </h5>
      <div className="TodoItemIcons">
        <FontAwesomeIcon
          className="CheckIcon"
          icon={faCheckCircle}
          onClick={props.checkHandler}
          style={props.onCheck ? { opacity: "0.5" } : { opacity: "1" }}
        />
        <FontAwesomeIcon
          className="EditIcon"
          icon={faEdit}
          onClick={props.editHandler}
          style={props.onEdit ? { opacity: "0.5" } : { opacity: "1" }}
        />
        <FontAwesomeIcon
          className="DeleteIcon"
          icon={faTimesCircle}
          onClick={props.removeHanlder}
        />
      </div>
    </div>
  );
};

export default Todo;
