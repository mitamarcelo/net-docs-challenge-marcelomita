import { createSlice } from "@reduxjs/toolkit";
import * as actionReducers from "./reducers";
import { ActionState } from "./types";

const initialState: ActionState = {
  isRunning: false,
  stepCount: 10,
};

const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: actionReducers,
});

export const { toggleIsRunning, setStepCount } = actionSlice.actions;

export default actionSlice.reducer;
