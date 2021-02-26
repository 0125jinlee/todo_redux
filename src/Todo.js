import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEdit,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import { check, edit, editInput, remove } from "./data/todoSlice";

import "./Todo.css";

const Todo = (props) => {
  const [newValue, setNewValue] = useState("");

  const dispatch = useDispatch();

  const setnewValueHandler = (e) => {
    setNewValue(e.target.value);
  };

  const editInputHandler = (newValue) => {
    if (newValue) {
      dispatch(editInput(newValue));
    }
  };

  return (
    <div className="TodoItem">
      <h5
        style={
          props.checkClicked
            ? { color: "gray", textDecorationLine: "line-through" }
            : null
        }
      >
        {props.editClicked ? (
          <form onSubmit={() => editInputHandler(newValue)}>
            <input
              type="text"
              className="EditItem"
              placeholder={props.value}
              onChange={setnewValueHandler}
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
          onClick={() => dispatch(check(props.id))}
          style={props.onCheck ? { opacity: "0.5" } : { opacity: "1" }}
        />
        <FontAwesomeIcon
          className="EditIcon"
          icon={faEdit}
          onClick={() => dispatch(edit(props.id))}
          style={props.onEdit ? { opacity: "0.5" } : { opacity: "1" }}
        />
        <FontAwesomeIcon
          className="DeleteIcon"
          icon={faTimesCircle}
          onClick={() => dispatch(remove(props.id))}
        />
      </div>
    </div>
  );
};

Todo.propTypes = {
  checkClicked: PropTypes.bool,
  editClicked: PropTypes.bool,
  value: PropTypes.string,
};

export default Todo;
