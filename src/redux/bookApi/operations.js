import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserBook = createAsyncThunk(
  "user/getBook",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("user/books");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBook = createAsyncThunk(
  "user/addBook",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("book", credentials);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "user/deleteBook",
  async (bookId, thunkAPI) => {
    try {
      const res = await axios.delete(`book/${bookId}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
