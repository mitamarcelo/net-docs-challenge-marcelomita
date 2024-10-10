import { RootState } from "../index";
import { Cell } from "./types";
import { createSelector } from "@reduxjs/toolkit";

export const selectCells = (state: RootState) => state.grid.cells;
export const selectGridDimensions = createSelector(
  (state: RootState) => state.grid,
  (grid) => ({
    width: grid.width,
    height: grid.height,
  })
);

export const selectFlattenedGrid = createSelector(
  selectCells,
  selectGridDimensions,
  (cells, { width, height }) => {
    const flattened: Cell[] = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const id = `${x},${y}`;
        flattened.push(cells[id]);
      }
    }

    return flattened;
  }
);
