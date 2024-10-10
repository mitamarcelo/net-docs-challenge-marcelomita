import { describe, it, expect } from "vitest";
import {
  selectIsRunning,
  selectStepCount,
} from "../../../store/action/selectors";
import type { RootState } from "../../../store";

describe("action selectors", () => {
  const mockState: RootState = {
    grid: {
      cells: {},
      width: 0,
      height: 0,
    },
    action: {
      isRunning: true,
      stepCount: 15,
    },
  };

  it("should select isRunning", () => {
    expect(selectIsRunning(mockState)).toBe(true);
  });

  it("should select stepCount", () => {
    expect(selectStepCount(mockState)).toBe(15);
  });
});
