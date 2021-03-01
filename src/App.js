import React, { useState } from "react";
import { connect } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import TodoList from "./TodoList";
import * as actions from "./store/index";
import "./App.css";

const App = (props) => {
  const [value, setValue] = useState("");

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const addBtnHandler = (e) => {
    e.preventDefault();
    if (value) {
      const item = {
        id: nanoid(),
        checkClicked: false,
        editClicked: false,
        value: value,
      };
      props.todoAdded(item);
    }
  };

  const allCompleteBtnHandler = (e) => {
    e.preventDefault();
    props.todoAllCompleted();
  };

  const allClearBtnHandler = (e) => {
    e.preventDefault();
    props.todoAllCleared();
  };

  return (
    <div className="App">
      <div className="Container">
        <div className="Title">
          <h1>TO DO LIST</h1>
        </div>
        <form className="AddItem">
          <input placeholder="Add Item..." onChange={(e) => inputHandler(e)} />
          <button onClick={(e) => addBtnHandler(e)}>ADD</button>
        </form>
        <TodoList />
        <div className="BatchSelection">
          <button
            className="CompleteBtn"
            onClick={(e) => allCompleteBtnHandler(e)}
          >
            All Complete
          </button>
          <button className="ClearBtn" onClick={(e) => allClearBtnHandler(e)}>
            All Clear
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    todoAdded: (item) => dispatch(actions.todoAdded(item)),
    todoAllCleared: () => dispatch(actions.todoAllCleared()),
    todoAllCompleted: () => dispatch(actions.todoAllCompleted()),
  };
};

export default connect(null, mapDispatchToProps)(App);
