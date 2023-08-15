import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
