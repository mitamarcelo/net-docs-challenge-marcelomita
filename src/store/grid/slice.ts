import { createSlice } from "@reduxjs/toolkit";
import { initialGridState } from "./initialStates";
import * as reducers from "./reducers";

const gridSlice = createSlice({
  name: "grid",
  initialState: initialGridState,
  reducers: reducers,
});

export const { createGrid, toggleCell, nextStep } = gridSlice.actions;
export default gridSlice.reducer;
