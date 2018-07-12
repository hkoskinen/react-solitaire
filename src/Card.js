import React from 'react';
import './Card.css';

const Suit = ({suit}) => {
  suit = suit.toLowerCase(); // just in case
  switch (suit) {
    case 's':
      return <span>&spades;</span>
    case 'c':
      return <span>&clubs;</span>
    case 'd':
      return <span className="red">&diams;</span>
    case 'h':
      return <span className="red">&hearts;</span>
  }
}

const Card = ({rank, suit}) => (
  <div className="card">
    <div className="pip-top">
      {rank}
      <Suit suit={suit} />
    </div>
    <div className="pip-bottom">
      {rank}
      <Suit suit={suit} />
    </div>
  </div>
);

export default Card;
