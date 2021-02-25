import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    check: (state, action) => {
      state[action.payload].onEdit = false;
      state[action.payload].onCheck = !state[action.payload].onCheck;
    },
    edit: (state, action) => {
      state[action.payload].onCheck = false;
      state[action.payload].onEdit = !state[action.payload].onEdit;
    },
    editInput: (state, action) => {
      state[action.payload].value = action.newInput;
      state[action.payload].onEdit = false;
    },
    remove: (state, action) => {
      state.splice(action.payload, 1);
    },
    clear: (state) => {
      state = [];
    },
  },
});

export const { add, check, edit, remove, editInput, clear } = todoSlice.actions;

export default todoSlice.reducer;
