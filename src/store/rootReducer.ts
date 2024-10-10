import { combineReducers } from "@reduxjs/toolkit";
import gridReducer from "./grid/slice";
import actionReducer from "./action/slice";

const rootReducer = combineReducers({
  grid: gridReducer,
  action: actionReducer,
});

export default rootReducer;
