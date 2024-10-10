import { PayloadAction } from "@reduxjs/toolkit";
import { ActionState } from "./types";

export const toggleIsRunning = (state: ActionState) => {
  state.isRunning = !state.isRunning;
};

export const setStepCount = (
  state: ActionState,
  action: PayloadAction<number>
) => {
  state.stepCount = action.payload;
};
