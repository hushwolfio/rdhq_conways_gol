/**
 * Austin Welborn
 * RedDoorHQ Conway's Game of Life Challenge
 */

import React, { useState } from 'react';
import GameView from './GameView';

/**
 * Displays:
 * Game View
 */
const GameContainer = () => {
  const [gamePlaying, setGame] = useState(false);

  const setGameState = () => {
    setGame(!gamePlaying);
  };

  return <GameView setGameState={setGameState} gamePlaying={gamePlaying} />;
};

export default GameContainer;
