import React from "react";
import { useAppSelector, useAppDispatch } from "../store";
import {
  selectFlattenedGrid,
  selectGridDimensions,
} from "../store/grid/selectors";
import { toggleCell } from "../store/grid/slice";
import { CellState, Cell } from "../store/grid/types";
import * as Styled from "./Grid.styles";

const Grid: React.FC = () => {
  const cells = useAppSelector(selectFlattenedGrid);
  const { width } = useAppSelector(selectGridDimensions);
  const dispatch = useAppDispatch();

  const handleCellClick = (id: string) => {
    dispatch(toggleCell(id));
  };

  return (
    <Styled.GridContainer data-testid="grid" size={width}>
      {cells.map((cell: Cell) => (
        <Styled.CellDiv
          data-testid="cell"
          key={cell.id}
          $isAlive={cell.state === CellState.Alive}
          onClick={() => handleCellClick(cell.id)}
        />
      ))}
    </Styled.GridContainer>
  );
};

export default Grid;
