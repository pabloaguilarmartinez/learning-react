import {render, fireEvent} from '@testing-library/react';
import {Square} from '../Square.tsx';
import '@testing-library/jest-dom';

describe('Square Component', () => {
  it('renders without crashing', () => {
    const updateBoardMock = jest.fn();
    render(<Square updateBoard={updateBoardMock}>X</Square>);
  });

  it('renders children prop', () => {
    const updateBoardMock = jest.fn();
    const { getByText } = render(<Square updateBoard={updateBoardMock}>X</Square>);
    const square = getByText('X');
    expect(square).toBeInTheDocument();
  });

  it('applies is-selected class when isSelected prop is true', () => {
    const updateBoardMock = jest.fn();
    const { container } = render(<Square isSelected={true} updateBoard={updateBoardMock}>X</Square>);
    const square = container.firstChild;
    expect(square).toHaveClass('is-selected');
  });

  it('does not apply is-selected class when isSelected prop is false', () => {
    const updateBoardMock = jest.fn();
    const { container } = render(<Square isSelected={false} updateBoard={updateBoardMock}>X</Square>);
    const square = container.firstChild;
    expect(square).not.toHaveClass('is-selected');
  });

  it('calls updateBoard with the correct index when clicked', () => {
    const updateBoardMock = jest.fn();
    const { container } = render(<Square index={1} updateBoard={updateBoardMock}>X</Square>);
    const square = container.firstChild;
    fireEvent.click(square!);
    expect(updateBoardMock).toHaveBeenCalledWith(1);
  });
});