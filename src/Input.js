import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { add } from "./data/todoSlice";

import "./Input.css";

const Input = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const addBtnHandler = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    } else {
      dispatch(
        add({
          id: nanoid(),
          onEdit: false,
          onCheck: false,
          value: input,
        })
      );
    }
  };

  return (
    <span>
      {showAlert ? <div className="Alert">Please Enter Valid Value</div> : null}
      <form className="AddItem">
        <h3>To Do List</h3>
        <div className="InputGroup">
          <input
            type="text"
            className="InputItem"
            placeholder="Name..."
            onChange={inputHandler}
          />
          <div className="InputGroupAppend">
            <button className="AddBtn" onClick={addBtnHandler}>
              Add Item
            </button>
          </div>
        </div>
      </form>
    </span>
  );
};

export default Input;
