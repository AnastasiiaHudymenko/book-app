import { createSlice } from "@reduxjs/toolkit";
import { addBook } from "./operations";

const initialState = {
  book: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.book = action.payload;
    });
  },
});

export const bookReducer = bookSlice.reducer;
