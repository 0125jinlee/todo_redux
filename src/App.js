import React, { useState } from "react";
import { connect } from "react-redux";

import * as actions from "./store/index";
import "./App.css";

const App = (props) => {
  const [value, setValue] = useState("");

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const addBtnHandler = () => {
    const item = {
      checkClicked: false,
      editClicked: false,
      value: value,
    };
    props.todoAdded(item);
  };

  return (
    <div className="App">
      <div className="Container">
        <div className="Title">
          <h1>TO DO LIST</h1>
        </div>
        <form className="AddItem">
          <input placeholder="Add Item..." onChange={(e) => inputHandler(e)} />
          <button onClick={addBtnHandler}>ADD</button>
        </form>
        <div className="List">
          <ul className="Item">
            TEST
            <button>CHECK</button>
            <button>EDIT</button>
            <button>DELETE</button>
          </ul>
        </div>
        <div className="BatchSelection">
          <button className="CompleteBtn">All Complete</button>
          <button className="ClearBtn">All Clear</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) => {
  return {
    todoAdded: (item) => dispatch(actions.todoAdded(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
