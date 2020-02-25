/**
 * Austin Welborn
 * RedDoorHQ Conway's Game of Life Challenge
 */
import React, { useState } from 'react';
import GridView from './GridView';
import { generateGrid, getSurroundingCells, useInterval } from './helperFunctions';

type CellType = {
  alive: number;
  column: number;
  row: number;
  id: string;
};

type Props = {
  // callback to update whether the game should be playing or not
  setGameState: () => void;
  // boolean whether game is playing
  gamePlaying: boolean;
};

/**
 * Displays:
 * GridView
 */
const GridContainer = ({ setGameState, gamePlaying }: Props) => {
  // generates the random 100x100 grid
  const randomGrid = generateGrid();
  // sets grid for first time
  const [grid, setGrid] = useState(randomGrid);

  // the life cycle of conway's game of life
  const lifeCycle = () => {
    // if start button has been clicked
    if (gamePlaying) {
      let validLifeCycle = false;

      const nextGeneration = grid.map((row: CellType[]) =>
        row.map((cell: CellType) => {
          //
          let surroundinglivingCells = 0;
          // checks all possible 8 cells around cell
          let surroundingCells = getSurroundingCells(grid, cell);
          // figures out how many cells are alive around it
          surroundingCells.forEach(cell => {
            if (cell.alive) {
              surroundinglivingCells += 1;
            }
          });

          if (cell.alive && (surroundinglivingCells === 2 || surroundinglivingCells === 3)) {
            return cell;
          }

          if (cell.alive && (surroundinglivingCells < 2 || surroundinglivingCells > 3)) {
            validLifeCycle = true;
            return { ...cell, alive: 0 };
          }
          if (!cell.alive && surroundinglivingCells === 3) {
            validLifeCycle = true;
            return { ...cell, alive: 1 };
          }
          return cell;
        })
      );

      // if none of the cells are changing anymore stop the game
      if (!validLifeCycle) {
        setGameState();
      }

      // update the grid with the new generation of alive/dead cells
      setGrid(nextGeneration);
    }
  };

  // starts the interval for every 500 milliseconds
  useInterval(lifeCycle, 500);

  return <GridView grid={grid} />;
};

export default GridContainer;
