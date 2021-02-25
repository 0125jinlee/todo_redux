import React, { useState } from "react";

import "./Input.css";

const Input = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const addBtnHandler = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    } else {
      props.addItemHandler(input);
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
