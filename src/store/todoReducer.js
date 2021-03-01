import * as actionTypes from "./actionTypes";

const initialState = {
  list: [],
};

const todoAdded = (state, action) => {
  return { ...state, list: [...state.list, action.item] };
};

const todoChecked = (state, action) => {
  const list = [...state.list];
  const index = list.findIndex((x) => x.id === action.id);
  list[index].checkClicked = !list[index].checkClicked;
  list[index].editClicked = false;
  return { ...state, list };
};

const todoEdited = (state, action) => {
  const list = [...state.list];
  const index = list.findIndex((x) => x.id === action.id);
  list[index].editClicked = !list[index].editClicked;
  list[index].checkClicked = false;
  return { ...state, list };
};

const todoEditedValueSubmitted = (state, action) => {
  const list = [...state.list];
  const index = list.findIndex((x) => x.id === action.id);
  list[index].value = action.editedValue;
  list[index].editClicked = false;
  return { ...state, list };
};

const todoRemoved = (state, action) => {
  const list = [...state.list];
  const index = list.findIndex((x) => x.id === action.id);
  list.splice(index, 1);
  return { ...state, list };
};

const todoAllCleared = (state) => {
  let list = [...state.list];
  list = [];
  return { ...state, list };
};

const todoAllCompleted = (state, action) => {
  const list = [...state.list];
  for (let i = 0; i < list.length; i++) {
    list[i].checkClicked = true;
  }
  return { ...state, list };
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADDED:
      return todoAdded(state, action);
    case actionTypes.TODO_CHECKED:
      return todoChecked(state, action);
    case actionTypes.TODO_EDITED:
      return todoEdited(state, action);
    case actionTypes.TODO_EDITED_VALUE_SUBMITTED:
      return todoEditedValueSubmitted(state, action);
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
