import React from 'react';

type SquareProps = {
  children: React.ReactNode,
  isSelected?: boolean,
  updateBoard: (index: number) => void,
  index?: number
};

export const Square: React.FC<SquareProps> = ({children, isSelected, updateBoard, index}) => {
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