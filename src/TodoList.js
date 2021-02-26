import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { clear } from "./data/todoSlice";

import Input from "./Input.js";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = () => {
  const list = useSelector((state) => state.list);

  const dispatch = useDispatch();

  if (Array.isArray(list) && list.length !== 0) {
    const updatedList = list.map((item) => {
      return (
        <Todo
          key={item.id}
          id={item.id}
          checkClicked={item.checkClicked}
          editClicked={item.editClicked}
          value={item.value}
        />
      );
    });
    return (
      <span>
        <Input />
        <div className="List">
          {updatedList}
          <button
            type="button"
            className="ClearBtn"
            onClick={() => dispatch(clear())}
          >
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
          <button
            type="button"
            className="ClearBtn"
            onClick={() => dispatch(clear())}
          >
            Clear Items
          </button>
        </div>
      </span>
    );
  }
};

export default TodoList;
