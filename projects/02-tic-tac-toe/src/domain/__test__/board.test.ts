import { Board, boardIsFullFilled, fillBoardSquare, winner } from '../board';
import { SHIFTS } from '../shift';

const EMPTY_BOARD: Board = {
  squares: Array(9).fill(null),
};

describe('Board', () => {
  it('is filled if the value in the square is null', () => {
    const emptyBoard = EMPTY_BOARD;
    const movement = { squareIndex: 2, player: SHIFTS.X };

    const newBoard = fillBoardSquare(emptyBoard, movement);

    const expectedBoard = emptyBoard;
    expectedBoard.squares[movement.squareIndex] = movement.player;
    expect(newBoard).toEqual(expectedBoard);
  });

  it('is not filled if the square has value', () => {
    const board = EMPTY_BOARD;
    board.squares[2] = SHIFTS.X;
    const movement = { squareIndex: 2, player: SHIFTS.O };

    const newBoard = fillBoardSquare(board, movement);

    expect(newBoard).toEqual(board);
  });

  it('is full filled if all the squares have a non null value', () => {
    const board = EMPTY_BOARD;
    board.squares[0] = SHIFTS.X;
    board.squares[2] = SHIFTS.O;
    const fullFilledBoard = {
      squares: [SHIFTS.X, SHIFTS.O, SHIFTS.X, SHIFTS.X, SHIFTS.O, SHIFTS.X, SHIFTS.O, SHIFTS.X, SHIFTS.O],
    };

    expect(boardIsFullFilled(board)).toBeFalsy();
    expect(boardIsFullFilled(fullFilledBoard)).toBeTruthy();
  });

  it('has a winner if there is a player who fill the board with a winner combo', () => {
    const boardWithWinnerCombo = EMPTY_BOARD;
    boardWithWinnerCombo.squares[0] = SHIFTS.X;
    boardWithWinnerCombo.squares[1] = SHIFTS.X;
    boardWithWinnerCombo.squares[2] = SHIFTS.X;
    boardWithWinnerCombo.squares[3] = SHIFTS.O;
    boardWithWinnerCombo.squares[4] = SHIFTS.O;

    expect(winner(boardWithWinnerCombo)).toBe(SHIFTS.X);
  });
});
