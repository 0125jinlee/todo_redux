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
      const id = action.payload;
      const index = state.findIndex((item) => item.id === id);
      const item = state[index];
      if (item) {
        item.editClicked = false;
        item.checkClicked = !item.checkClicked;
      }
    },
    edit: (state, action) => {
      const id = action.payload;
      const index = state.findIndex((item) => item.id === id);
      const item = state[index];
      if (item) {
        item.checkClicked = false;
        item.editClicked = !item.editClicked;
      }
    },
    editInput: (state, action) => {
      const id = action.payload;
      const index = state.findIndex((item) => item.id === id);
      const item = state[index];
      if (item) {
        item.value = action.payload.newValue;
      }
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
