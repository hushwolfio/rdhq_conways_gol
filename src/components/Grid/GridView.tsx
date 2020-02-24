/**
 * Austin Welborn
 * RedDoorHQ Conway's Game of Life Challenge
 */

import React from 'react';
import { StyledGridDisplay, GridRow, AliveCell, DeadCell } from './styledGridComponents';

type CellType = {
  alive: number;
  column: number;
  row: number;
  id: string;
};

type Props = {
  grid: CellType[][];
};

/**
 * Displays:
 * GridDisplay
 * Grid Cells (100x100 cells)
 */
const GridView = ({ grid }: Props) => (
  <StyledGridDisplay>
    {grid.map((row: CellType[], index: number) => (
      <GridRow key={index}>
        {row.map((cell: CellType) =>
          cell.alive ? <AliveCell key={`${cell.row}${cell.column}`} /> : <DeadCell key={`${cell.row}${cell.column}`} />
        )}
      </GridRow>
    ))}
  </StyledGridDisplay>
);

export default GridView;
