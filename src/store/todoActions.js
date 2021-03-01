import * as actionTypes from "./actionTypes";

export const todoAdded = (item) => {
  return {
    type: actionTypes.TODO_ADDED,
    item: item,
  };
};

export const todoChecked = (id) => {
  return {
    type: actionTypes.TODO_CHECKED,
    id: id,
  };
};

export const todoEdited = (id) => {
  return {
    type: actionTypes.TODO_EDITED,
    id: id,
  };
};

export const todoEditedValueSubmitted = (id, editedValue) => {
  return {
    type: actionTypes.TODO_EDITED_VALUE_SUBMITTED,
    id: id,
    editedValue: editedValue,
  };
};

export const todoRemoved = (id) => {
  return {
    type: actionTypes.TODO_REMOVED,
    id: id,
  };
};

export const todoAllCleared = () => {
  return {
    type: actionTypes.TODO_ALL_CLEARED,
  };
};

export const todoAllCompleted = () => {
  return {
    type: actionTypes.TODO_ALL_COMPLETED,
  };
};
