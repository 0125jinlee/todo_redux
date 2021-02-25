import React, { useState } from "react";

import Input from "./Input.js";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = () => {
  const [list, setList] = useState([]);

  const addItemHandler = (input) => {
    let arr = [...list];
    arr.push({ onEdit: false, onCheck: false, value: input });
    setList(arr);
  };

  const onCheckHandler = (index) => {
    let arr = [...list];
    arr[index].onEdit = false;
    arr[index].onCheck = !arr[index].onCheck;
    setList(arr);
  };

  const onEditHandler = (index) => {
    let arr = [...list];
    arr[index].onCheck = false;
    arr[index].onEdit = !arr[index].onEdit;
    setList(arr);
  };

  const onDeleteHandler = (index) => {
    let arr = [...list];
    arr.splice(index, 1);
    setList(arr);
  };

  const editedInputHandler = (index, newInput) => {
    let arr = [...list];
    arr[index].value = newInput;
    arr[index].onEdit = false;
    setList(arr);
  };

  const clearBtnHandler = () => {
    setList([]);
  };

  if (Array.isArray(list) && list.length !== 0) {
    const updatedList = list.map((element, index) => {
      return (
        <Todo
          element={element}
          value={element.value}
          onCheck={element.onCheck}
          onEdit={element.onEdit}
          index={index}
          key={index + element.value}
          onCheckHandler={() => onCheckHandler(index)}
          onEditHandler={() => onEditHandler(index)}
          onDeleteHandler={() => onDeleteHandler(index)}
          editedInputHandler={editedInputHandler}
        />
      );
    });
    return (
      <span>
        <Input addItemHandler={addItemHandler} />
        <div className="List">
          {updatedList}
          <button type="button" className="ClearBtn" onClick={clearBtnHandler}>
            Clear Items
          </button>
        </div>
      </span>
    );
  } else {
    return (
      <span>
        <Input addItemHandler={addItemHandler} />
        <div className="List">
          <button type="button" className="ClearBtn" onClick={clearBtnHandler}>
            Clear Items
          </button>
        </div>
      </span>
    );
  }
};

export default TodoList;
