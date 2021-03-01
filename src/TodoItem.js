import React, { useState } from "react";
import { connect } from "react-redux";

import * as actions from "./store/index";

const TodoItem = (props) => {
  const [editedValue, setEditedValue] = useState("");

  const checkBtnHandler = (e) => {
    e.preventDefault();
    props.todoChecked(props.id);
  };

  const editBtnHandler = (e) => {
    e.preventDefault();
    props.todoEdited(props.id);
  };

  const editedValueHanlder = (e) => {
    e.preventDefault();
    setEditedValue(e.target.value);
  };

  const editedValueBtnHandler = (e) => {
    e.preventDefault();
    props.todoEditedValueSubmitted(props.id, editedValue);
  };

  const removeBtnHandler = (e) => {
    e.preventDefault();
    props.todoRemoved(props.id);
  };

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
          <form onSubmit={(e) => editedValueBtnHandler(e)}>
            <input
              type="text"
              placeholder={props.value}
              onChange={(e) => editedValueHanlder(e)}
            />
          </form>
        ) : (
          props.value
        )}
      </h5>
      <button onClick={(e) => checkBtnHandler(e)}>CHECK</button>
      <button onClick={(e) => editBtnHandler(e)}>EDIT</button>
      <button onClick={(e) => removeBtnHandler(e)}>DELETE</button>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    todoChecked: (id) => dispatch(actions.todoChecked(id)),
    todoEdited: (id) => dispatch(actions.todoEdited(id)),
    todoEditedValueSubmitted: (id, editedValue) =>
      dispatch(actions.todoEditedValueSubmitted(id, editedValue)),
    todoRemoved: (id) => dispatch(actions.todoRemoved(id)),
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
