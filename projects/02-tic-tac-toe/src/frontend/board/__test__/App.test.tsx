import {render, fireEvent, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import App from '../App.tsx';
import * as useBoardState from '../useBoardState.ts';

describe('App Component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });

  it('renders without crashing', () => {
    render(<App/>);
  });

  it('renders reset game button', () => {
    render(<App/>);

    const resetButton = screen.getByText('Reset game');
    expect(resetButton).toBeInTheDocument();
  });

  it('renders tic tac toe heading', () => {
    render(<App/>);

    const heading = screen.getByText('Tic tac toe');
    expect(heading).toBeInTheDocument();
  });

  it('renders squares for the game board', () => {
    render(<App/>);

    const squares = screen.getAllByRole('button');
    expect(squares.length).toBeGreaterThan(0);
  });

  it('renders X and O squares for player turns', () => {
    render(<App/>);

    const xSquare = screen.getByText('❌');
    const oSquare = screen.getByText('⚪');
    expect(xSquare).toBeInTheDocument();
    expect(oSquare).toBeInTheDocument();
  });

  it('renders the winner', () => {
    // Mocking the useBoard hook to return a specific state
    jest.spyOn(useBoardState, 'useBoard')
      .mockReturnValue({
        board: {squares: ['❌', '⚪', '❌', '⚪', '❌', '⚪', '❌', '⚪', '❌']},
        shift: '⚪',
        winner: '❌',
        updateBoard: jest.fn(),
        resetGame: jest.fn()

      });

    render(<App/>);

    const winnerMessage = screen.getByText(/The winner is ❌/i);
    expect(winnerMessage).toBeInTheDocument();
  });

  it('renders draw result', () => {
    // Mocking the useBoard hook to return a specific state
    jest.spyOn(useBoardState, 'useBoard')
      .mockReturnValue({
        board: {squares: ['❌', '⚪', '❌', '⚪', '❌', '⚪', '❌', '⚪', '❌']},
        shift: '⚪',
        winner: '❌⚪',
        updateBoard: jest.fn(),
        resetGame: jest.fn()

      });

    render(<App/>);

    const winnerMessage = screen.getByText(/Draw/i);
    expect(winnerMessage).toBeInTheDocument();
  });

  it('calls resetGame when reset game button is clicked', () => {
    jest.spyOn(useBoardState, 'useBoard')
      .mockReturnValue({
        board: {squares: ['❌', '⚪', '❌', '⚪', '❌', '⚪', '❌', '', '']},
        shift: '⚪',
        winner: '❌',
        updateBoard: jest.fn(),
        resetGame: jest.fn()
      });

    render(<App/>);

    const resetButton = screen.getByText(/Reset game/i);
    fireEvent.click(resetButton);
    expect(useBoardState.useBoard().resetGame).toHaveBeenCalled();
  });

  it('calls resetGame when start button is clicked', () => {
    jest.spyOn(useBoardState, 'useBoard')
      .mockReturnValue({
        board: {squares: ['❌', '⚪', '❌', '⚪', '❌', '⚪', '❌', '⚪', '']},
        shift: '⚪',
        winner: '❌',
        updateBoard: jest.fn(),
        resetGame: jest.fn()
      });

    render(<App/>);

    const resetButton = screen.getByText(/Start again/i);
    fireEvent.click(resetButton);
    expect(useBoardState.useBoard().resetGame).toHaveBeenCalled();
  });
});