import { createSlice } from "@reduxjs/toolkit";
import { getUserBook } from "./operations";

const initialState = {
  books: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserBook.fulfilled, (state, action) => {
      console.log("action", action);
      state.books = action.payload;
    });
  },
});

export const bookReducer = bookSlice.reducer;
