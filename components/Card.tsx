import React, { FC, MouseEvent } from 'react';

interface CardProps {
  name: string;
  handleClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const Card: FC<CardProps> = ({ name, handleClick }) => {
  return (
    <div className="card-container" id={name} onClick={handleClick}>
      <div className="card-content">{name}</div>
    </div>
  );
};

export default Card;
