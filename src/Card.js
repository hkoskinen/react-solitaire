import React from 'react';
import './Card.css';

const Pip = ({rank, suit}) => {
  suit = suit.toLowerCase(); // just in case
  switch (suit) {
    case 's':
      return <span>{rank}<br/>&spades;</span>
    case 'c':
      return <span>{rank}<br/>&clubs;</span>
    case 'd':
      return <span className="red">{rank}<br/>&diams;</span>
    case 'h':
      return <span className="red">{rank}<br/>&hearts;</span>
  }
};

const Card = ({rank, suit}) => (
  <div className="card">
    <div className="pip-top">
      <Pip rank={rank} suit={suit} />
    </div>
    <div className="pip-bottom">
      <Pip rank={rank} suit={suit} />
    </div>
  </div>
);

export default Card;
