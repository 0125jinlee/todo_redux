import React from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  if (Array.isArray(props.list) && props.list.length > 0) {
    const todolist = props.list.map((item) => {
      return (
        <TodoItem
          key={item.id}
          id={item.id}
          value={item.value}
          checkClicked={item.checkClicked}
          editClicked={item.editClicked}
        />
      );
    });
    return <div className="List">{todolist}</div>;
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps)(TodoList);
