import {Board} from "../../domain/board.ts";

export const deleteGame = (): void => {
  window.localStorage.removeItem("board");
}

export const saveGame = ({board, shift, winner}: { board: Board; shift: string, winner: string | null}): void => {
  window.localStorage.setItem('board', JSON.stringify({board: board, shift: shift, winner: winner}));
}

export const findGame = (): string | null => {
  return window.localStorage.getItem('board');
}
