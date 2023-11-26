export type Board = {
  readonly squares: string[]
}

type Movement = {
  squareIndex: number,
  player: string
}

export const WINNER_COMBOS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const EMPTY_BOARD: Board = {
  squares: Array(9).fill(null)
}

export function winner(board: Board): string | null {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (board.squares[a] && board.squares[a] === board.squares[b] && board.squares[a] === board.squares[c]) {
      return board.squares[a];
    }
  }
  return null;
}

export function fillBoardSquare(board: Board, movement: Movement): Board {
  if (squareIsFilled(board.squares[movement.squareIndex])) return board;
  const newBoard: Board = board;
  newBoard.squares[movement.squareIndex] = movement.player;
  return newBoard;
}

export function squareIsFilled(square: string): boolean {
  return !!square;
}

export function boardIsFullFilled(board: Board): boolean {
  return board.squares.every((square: string) => square !== null)
}
