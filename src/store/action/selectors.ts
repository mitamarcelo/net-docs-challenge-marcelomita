import type { RootState } from "../index";

export const selectIsRunning = (state: RootState) => state.action.isRunning;
export const selectStepCount = (state: RootState) => state.action.stepCount;
