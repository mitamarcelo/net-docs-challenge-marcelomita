export enum CellState {
  Alive = "alive",
  Dead = "dead",
}

export interface Cell {
  id: string;
  state: CellState;
}

export interface GridState {
  cells: { [id: string]: Cell };
  width: number;
  height: number;
}
