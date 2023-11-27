import { Square } from '../square/Square.tsx';
import {useBoard} from "./useBoardState.ts";
import {SHIFTS} from "../../domain/shift.ts";

function App() {
  const {
    board,
    shift,
    winner,
    updateBoard,
    resetGame
  } = useBoard()

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

      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner.length === 2
                    ? 'Draw'
                    : 'The winner is ' + winner
                }
              </h2>

              <footer>
                <button onClick={resetGame}>
                  Start again
                </button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  );
}

export default App;
