/**
 * Austin Welborn
 * RedDoorHQ Conway's Game of Life Challenge
 */
import { useEffect, useRef } from 'react';
import { ROWS, COLUMNS } from './gridConstants';

type CellType = {
  alive: number;
  column: number;
  row: number;
  id: string;
};

// generates a value of 0 or 1
const randomizeLifeState = () => Math.round(Math.random());

// generates a 100x100 grid with random alive cells
const generateGrid = () => {
  let grid: CellType[][] = [...Array(COLUMNS)].map(row => Array(ROWS));

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      grid[i][j] = {
        column: i,
        row: j,
        alive: randomizeLifeState(),
        id: `${i}${j}`
      };
    }
  }

  return grid;
};

// checks all 8 possible cells surrounding the cell, if cell exists add it to array and return it
const getSurroundingCells = (grid: CellType[][], cell: CellType) => {
  let surroundingCells = [];
  let cellColumn = cell.column;
  let cellRow = cell.row;

  // top left cell
  if (cellColumn - 1 >= 0 && cellRow - 1 >= 0) {
    surroundingCells.push(grid[cellRow - 1][cellColumn - 1]);
  }

  //top cell
  if (cellRow - 1 >= 0) {
    surroundingCells.push(grid[cellRow - 1][cellColumn]);
  }

  //top right cell
  // since size of grid is 100 always, safe to hardcode 100 for this case and others
  if (cellColumn + 1 < 100 && cellRow - 1 >= 0) {
    surroundingCells.push(grid[cellRow - 1][cellColumn + 1]);
  }

  // left cell
  if (cellColumn - 1 >= 0) {
    surroundingCells.push(grid[cellRow][cellColumn - 1]);
  }

  // right cell
  if (cellColumn + 1 < 100) {
    surroundingCells.push(grid[cellRow][cellColumn + 1]);
  }

  // bottom left cell
  if (cellColumn - 1 >= 0 && cellRow + 1 < 100) {
    surroundingCells.push(grid[cellRow + 1][cellColumn - 1]);
  }

  // bottom cell
  if (cellRow + 1 < 100) {
    surroundingCells.push(grid[cellRow + 1][cellRow]);
  }

  // bottom right cell
  if (cellRow + 1 < 100 && cellColumn + 1 < 100) {
    surroundingCells.push(grid[cellRow + 1][cellColumn + 1]);
  }

  return surroundingCells;
};

// set interval custom hook
// resource for figuring this difficult part since setInterval wasn't working for me with useEffect, turns out this explains why and how to fix it! https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useInterval = (callback: any, delay: number) => {
  const savedCallback = useRef(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick: any = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export { randomizeLifeState, generateGrid, getSurroundingCells, useInterval };
