import { Square } from '../square/Square.tsx';
import {useBoard} from "./useBoardState.ts";
import {SHIFTS} from "../../domain/shift.ts";
import confetti from "canvas-confetti";
import {WinnerModal} from "../winnermodal/WinnerModal.tsx";

function App() {
  const {
    board,
    shift,
    winner,
    updateBoard,
    resetGame
  } = useBoard()

  if(winner && winner.length ===1) confetti();

  return (
    <main className="board">
      <button onClick={resetGame}>
        Reset game
      </button>
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.squares.map((squareValue: string, index: number) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {squareValue}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square
          isSelected={shift === SHIFTS.X}
          updateBoard={function (): void {
            throw new Error('Function not implemented.');
          }}
        >
          {SHIFTS.X}
        </Square>
        <Square
          isSelected={shift === SHIFTS.O}
          updateBoard={function (): void {
            throw new Error('Function not implemented.');
          }}
        >
          {SHIFTS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
