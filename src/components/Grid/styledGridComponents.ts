/**
 * Austin Welborn
 * RedDoorHQ Conway's Game of Life Challenge
 */

import styled from 'styled-components';

const StyledGridDisplay = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 500px;
  border: 1px solid black;
`;

const GridRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 5px;
`;

const AliveCell = styled.div`
  background-color: #12c124;
  width: 5px;
`;

const DeadCell = styled.div`
  background-color: #010101;
  width: 5px;
`;

export { StyledGridDisplay, GridRow, AliveCell, DeadCell };
