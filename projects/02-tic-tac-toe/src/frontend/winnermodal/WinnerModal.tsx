import React from 'react';

type WinnerModalProps = {
  winner: string | null,
  resetGame: () => void
}

export const WinnerModal: React.FC<WinnerModalProps> = ({winner, resetGame}) => {
  if (winner === null) return null;
  const text = winner.length === 2 ? 'Draw' : 'The winner is ' + winner;
  return (
    <section className="winner">
      <div className="text">
        <h2>
          {text}
        </h2>
        <footer>
          <button onClick={resetGame}>
            Start again
          </button>
        </footer>
      </div>
    </section>
  );
};