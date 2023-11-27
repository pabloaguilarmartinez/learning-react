import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {WinnerModal} from '../WinnerModal.tsx';

describe('WinnerModal Component', () => {
  it('renders winner message and restart button', () => {
    const {getByText} = render(<WinnerModal winner = 'X' resetGame = {() => {}}/>);

    expect(getByText('The winner is X')).toBeInTheDocument();
    expect(getByText('Start again')).toBeInTheDocument();
  });

  it('does not render anything if there is no winner', () => {
    const {container} = render(<WinnerModal winner = {null} resetGame = {() => {}}/>);

    expect(container.firstChild).toBeNull();
  });

  it('renders Draw message if winner has length 2', () => {
    const {getByText} = render(<WinnerModal winner = 'XY' resetGame = {() => {}}/>);

    expect(getByText('Draw')).toBeInTheDocument();
    expect(getByText('Start again')).toBeInTheDocument();
  });

  it('calls resetGame when restart button is clicked', () => {
    const resetGameMock = jest.fn();
    const {getByText} = render(<WinnerModal winner = 'X' resetGame = {resetGameMock}/>);

    fireEvent.click(getByText('Start again'));

    expect(resetGameMock).toHaveBeenCalled();
  });
});