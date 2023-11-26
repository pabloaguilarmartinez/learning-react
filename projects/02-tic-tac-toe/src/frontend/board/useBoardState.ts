import {Board, boardIsFullFilled, EMPTY_BOARD, fillBoardSquare, squareIsFilled, winner} from "../../domain/board.ts";
import React from "react";
import {SHIFTS} from "../../domain/shift.ts";

type BoardState = {
  board: Board,
  shift: string,
  winner: string | null
}

export const useBoard = () => {
  const initialState = {
    board: EMPTY_BOARD,
    shift: SHIFTS.X,
    winner: null
  };
  const [state, setState] = React.useState<BoardState>(initialState);

  const updateBoard = (squareIndex: number) => {
    if (squareIsFilled(state.board.squares[squareIndex])) return;
    const newBoard = fillBoardSquare(state.board, {squareIndex: squareIndex, player: state.shift});
    const newWinner = winner(newBoard)
      || (boardIsFullFilled(newBoard) ? SHIFTS.X.concat(SHIFTS.O) : null);
    setState({board: newBoard, shift: changeShift(), winner: newWinner});
  };

  const changeShift = (): string => {
    return state.shift === SHIFTS.X ? SHIFTS.O : SHIFTS.X;
  };

  const resetGame = () => {
    setState(initialState);
  }

  return {
    board: state.board,
    shift: state.shift,
    winner: state.winner,
    updateBoard,
    resetGame
  };
};
