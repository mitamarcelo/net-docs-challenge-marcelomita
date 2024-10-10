import { describe, it, expect } from "vitest";
import {
  selectCells,
  selectGridDimensions,
  selectFlattenedGrid,
} from "../../../store/grid/selectors";
import { CellState } from "../../../store/grid/types";

describe("grid selectors", () => {
  const mockState = {
    grid: {
      cells: {
        "0,0": { id: "0,0", state: CellState.Alive },
        "0,1": { id: "0,1", state: CellState.Dead },
        "1,0": { id: "1,0", state: CellState.Dead },
        "1,1": { id: "1,1", state: CellState.Alive },
      },
      width: 2,
      height: 2,
    },
    action: { isRunning: false, stepCount: 10 },
  };

  it("should select cells", () => {
    expect(selectCells(mockState)).toEqual(mockState.grid.cells);
  });

  it("should select grid dimensions", () => {
    expect(selectGridDimensions(mockState)).toEqual({ width: 2, height: 2 });
  });

  it("should select flattened grid", () => {
    const flattened = selectFlattenedGrid(mockState);
    expect(flattened).toHaveLength(4);
    expect(flattened[0]).toEqual({ id: "0,0", state: CellState.Alive });
    expect(flattened[3]).toEqual({ id: "1,1", state: CellState.Alive });
  });
});
