/**
 * Austin Welborn
 * RedDoorHQ Conway's Game of Life Challenge
 */

import styled from 'styled-components';

const StyledGame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const StyledTitle = styled.div`
  display: flex;
  font-size: 30px;
  padding: 15px;
`;

const StyledDescription = styled.div`
  display: flex;
  font-size: 20px;
  padding: 10px;
`;

const Button = styled.div`
display: flex;
height 25px;
width: 50px;
justify-content: center;
align-items: center;
padding 5px;
background-color: #12c124;
cursor: pointer;
`;

export { StyledGame, StyledTitle, StyledDescription, Button };
