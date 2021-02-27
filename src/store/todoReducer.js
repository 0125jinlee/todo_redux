import * as actionTypes from "./actionTypes";

const initialState = {
  list: [],
};

const todoAdded = (state, action) => {
  return { ...state, list: [state.list, action.payload] };
};

const todoChecked = (state, action) => {
  return { ...state };
};

const todoEdited = (state, action) => {
  return { ...state };
};

const todoRemoved = (state, action) => {
  return { ...state };
};

const todoAllCleared = (state, action) => {
  return { ...state };
};

const todoAllCompleted = (state, action) => {
  return { ...state };
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADDED:
      return todoAdded(state, action);
    case actionTypes.TODO_CHECKED:
      return todoChecked(state, action);
    case actionTypes.TODO_EDITED:
      return todoEdited(state, action);
    case actionTypes.TODO_REMOVED:
      return todoRemoved(state, action);
    case actionTypes.TODO_ALL_CLEARED:
      return todoAllCleared(state, action);
    case actionTypes.TODO_ALL_COMPLETED:
      return todoAllCompleted(state, action);
    default:
      return state;
  }
};

export default todoReducer;
