import { describe, it, expect } from "vitest";
import gridReducer, {
  createGrid,
  toggleCell,
  nextStep,
} from "../../../store/grid/slice";
import { CellState, GridState } from "../../../store/grid/types";

describe("grid slice", () => {
  const initialState: GridState = {
    cells: {},
    width: 0,
    height: 0,
  };

  it("should handle initial state", () => {
    expect(gridReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle createGrid", () => {
    const actual = gridReducer(
      initialState,
      createGrid({ width: 3, height: 3 })
    );
    expect(actual.width).toBe(3);
    expect(actual.height).toBe(3);
    expect(Object.keys(actual.cells).length).toBe(9);
    expect(actual.cells["0,0"]).toEqual({ id: "0,0", state: CellState.Dead });
  });

  it("should handle toggleCell", () => {
    const state: GridState = {
      cells: { "0,0": { id: "0,0", state: CellState.Dead } },
      width: 1,
      height: 1,
    };
    const actual = gridReducer(state, toggleCell("0,0"));
    expect(actual.cells["0,0"].state).toBe(CellState.Alive);
  });

  it("should handle nextStep", () => {
    const state: GridState = {
      cells: {
        "0,0": { id: "0,0", state: CellState.Alive },
        "0,1": { id: "0,1", state: CellState.Alive },
        "1,0": { id: "1,0", state: CellState.Alive },
        "1,1": { id: "1,1", state: CellState.Dead },
      },
      width: 2,
      height: 2,
    };
    const actual = gridReducer(state, nextStep());
    expect(actual.cells["0,0"].state).toBe(CellState.Alive);
    expect(actual.cells["0,1"].state).toBe(CellState.Alive);
    expect(actual.cells["1,0"].state).toBe(CellState.Alive);
    expect(actual.cells["1,1"].state).toBe(CellState.Alive);
  });
});
