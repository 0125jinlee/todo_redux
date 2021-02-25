import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { check, edit, editInput, remove, clear } from "./data/todoSlice";

import Input from "./Input.js";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = () => {
  const list = useSelector((state) => state.list);

  const dispatch = useDispatch();

  const editInputHandler = (index, newInput) => {
    dispatch(editInput(newInput));
  };

  if (Array.isArray(list) && list.length !== 0) {
    const updatedList = list.map((element, index) => {
      return (
        <Todo
          id={element.id}
          index={index}
          onCheck={element.onCheck}
          onEdit={element.onEdit}
          value={element.value}
          checkHandler={dispatch(() => check())}
          editHandler={dispatch(() => edit())}
          removeHandler={dispatch(() => remove())}
          editInputHandler={editInputHandler}
        />
      );
    });
    return (
      <span>
        <Input />
        <div className="List">
          {updatedList}
          <button type="button" className="ClearBtn" onClick={dispatch(clear)}>
            Clear Items
          </button>
        </div>
      </span>
    );
  } else {
    return (
      <span>
        <Input />
        <div className="List">
          <button type="button" className="ClearBtn" onClick={dispatch(clear)}>
            Clear Items
          </button>
        </div>
      </span>
    );
  }
};

export default TodoList;
