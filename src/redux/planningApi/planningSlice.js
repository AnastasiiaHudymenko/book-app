import { createSlice } from "@reduxjs/toolkit";
import { postPlanningBook } from "./operations";

const initialState = {
  planning: null,
};

const planningSlice = createSlice({
  name: "planning",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postPlanningBook.fulfilled, (state, action) => {
      state.planning = action.payload;
    });
  },
});

export const planningReducer = planningSlice.reducer;
