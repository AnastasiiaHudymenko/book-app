import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postPlanningBook = createAsyncThunk(
  "user/postPlanning",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("planning", credentials);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
