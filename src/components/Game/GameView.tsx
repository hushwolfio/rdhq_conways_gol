/**
 * Austin Welborn
 * RedDoorHQ Conway's Game of Life Challenge
 */

import React from 'react';
import GridContainer from '../Grid/GridContainer';
import { StyledGame, StyledTitle, StyledDescription, Button } from './styledGameComponents';

type Props = {
  // callback to update whether game should be running or not
  setGameState: () => void;
  // boolean whether game is playing
  gamePlaying: boolean;
};

/**
 * Displays:
 * Title
 * Grid Container
 * Description
 * Button for starting/stopping
 */
const GameView = ({ setGameState, gamePlaying }: Props) => (
  <StyledGame>
    <StyledTitle>Conway's Game of Life Code Challenge</StyledTitle>
    <GridContainer setGameState={setGameState} gamePlaying={gamePlaying} />
    <StyledDescription>Green = Alive, Black = Dead</StyledDescription>
    <StyledDescription>Feel free to refresh the page to get different random setup before starting!</StyledDescription>
    <Button onClick={setGameState}>{gamePlaying ? 'Stop' : 'Start'}</Button>
  </StyledGame>
);

export default GameView;
