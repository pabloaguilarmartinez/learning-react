import {Board, boardIsFullFilled, fillBoardSquare, squareIsFilled, winner} from '../../domain/board.ts';
import React from 'react';
import {SHIFTS} from '../../domain/shift.ts';
import {deleteGame, findGame, saveGame} from '../../infraestructure/repository/gameLocalStorageRepository.ts';

type BoardState = {
  board: Board,
  shift: string,
  winner: string | null
}

export const useBoard = () => {
  const initialState = {
    board: {squares: Array(9).fill(null)},
    shift: SHIFTS.X,
    winner: null
  };
  const [state, setState] = React.useState<BoardState>(() => {
    const boardFromStorage = findGame();
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return initialState;
  });

  const updateBoard = (squareIndex: number) => {
    if (squareIsFilled(state.board.squares[squareIndex])) return;
    const newBoard = fillBoardSquare(state.board, {squareIndex: squareIndex, player: state.shift});
    const newShift = changeShift();
    const newWinner = winner(newBoard)
      || (boardIsFullFilled(newBoard) ? SHIFTS.X.concat(SHIFTS.O) : null);
    saveGame({board: newBoard, shift: newShift, winner: newWinner});
    setState({board: newBoard, shift: newShift, winner: newWinner});
  };

  const changeShift = (): string => {
    return state.shift === SHIFTS.X ? SHIFTS.O : SHIFTS.X;
  };

  const resetGame = () => {
    setState(initialState);
    deleteGame();
  }

  return {
    board: state.board,
    shift: state.shift,
    winner: state.winner,
    updateBoard,
    resetGame
  };
};
