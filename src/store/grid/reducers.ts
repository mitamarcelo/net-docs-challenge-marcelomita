import { PayloadAction } from "@reduxjs/toolkit";
import { CellState, Cell, GridState } from "./types";

export const createGrid = (
  state: GridState,
  action: PayloadAction<{ width: number; height: number }>
) => {
  const { width, height } = action.payload;
  state.width = width;
  state.height = height;
  state.cells = {};

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const id = `${x},${y}`;
      state.cells[id] = {
        id,
        state: CellState.Dead,
      };
    }
  }
};

export const toggleCell = (state: GridState, action: PayloadAction<string>) => {
  const id = action.payload;
  if (state.cells[id]) {
    state.cells[id].state =
      state.cells[id].state === CellState.Alive
        ? CellState.Dead
        : CellState.Alive;
  }
};

export const nextStep = (state: GridState) => {
  const newCells: { [id: string]: Cell } = {};

  for (let y = 0; y < state.height; y++) {
    for (let x = 0; x < state.width; x++) {
      const id = `${x},${y}`;
      const cell = state.cells[id];
      const aliveNeighbors = countAliveNeighbors(state, x, y);

      let newState: CellState;
      if (cell.state === CellState.Alive) {
        newState =
          aliveNeighbors === 2 || aliveNeighbors === 3
            ? CellState.Alive
            : CellState.Dead;
      } else {
        newState = aliveNeighbors === 3 ? CellState.Alive : CellState.Dead;
      }

      newCells[id] = { ...cell, state: newState };
    }
  }

  state.cells = newCells;
};

function countAliveNeighbors(state: GridState, x: number, y: number): number {
  let count = 0;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dx === 0 && dy === 0) continue;
      const nx = x + dx;
      const ny = y + dy;
      const id = `${nx},${ny}`;
      if (
        nx >= 0 &&
        nx < state.width &&
        ny >= 0 &&
        ny < state.height &&
        state.cells[id]?.state === CellState.Alive
      ) {
        count++;
      }
    }
  }
  return count;
}
