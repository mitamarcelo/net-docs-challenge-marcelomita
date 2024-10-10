import { describe, it, expect } from "vitest";
import actionReducer, {
  toggleIsRunning,
  setStepCount,
} from "../../../store/action/slice";
import { ActionState } from "../../../store/action/types";

describe("action slice", () => {
  const initialState: ActionState = {
    isRunning: false,
    stepCount: 10,
  };

  it("should handle initial state", () => {
    expect(actionReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle toggleIsRunning", () => {
    const actual = actionReducer(initialState, toggleIsRunning());
    expect(actual.isRunning).toBe(true);
  });

  it("should handle setStepCount", () => {
    const actual = actionReducer(initialState, setStepCount(20));
    expect(actual.stepCount).toBe(20);
  });
});
