import './App.css';
import React, {useState} from "react";

const TURNS: { X: string, O: string } = {
  X: 'x',
  O: 'o'
};

type SquareProps = {
  children: React.ReactNode,
  isSelected?: boolean,
  updateBoard: (index: number) => void,
  index?: number
};

const Square: React.FC<SquareProps> = ({children, isSelected, updateBoard, index}) => {
  const className: string = `square ${isSelected ? 'is-selected' : ''}`;
  const handleClick = (): void => {
    updateBoard(index!);
  };
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

const WINNER_COMBOS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function App() {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<string>(TURNS.X);
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (boardToCheck: string[]): string | null => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const updateBoard = (index: number): void => {
    if (winner) return;
    if (board[index]) return;

    const newBoard: string[] = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      alert('ganador');
      setWinner(newWinner);
    } else {
      const newTurn: string = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn);
    }
  };
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((_, index: number) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X} updateBoard={function (): void {
          throw new Error('Function not implemented.');
        }}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O} updateBoard={function (): void {
          throw new Error('Function not implemented.');
        }}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
