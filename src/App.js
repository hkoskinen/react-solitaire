import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  state = {
    deck: [],
    title: 'solitaire',
  }

  componentDidMount = () => {
    this.generateDeck();
  }

  generateDeck = () => {
    const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const suits = ['s', 'c', 'h', 'd'];

    let rankIndex = 0;
    let suitIndex = 0;
    let deck = [];

    for (let i = 1; i <= 52; i++) {
      deck.push({id: i, rank: ranks[rankIndex], suit: suits[suitIndex]});
      if (i % 13 === 0) {
        rankIndex = 0;
        suitIndex++;
      } else {
        rankIndex++;
      }
    }
    this.setState({deck})
  }

  render() {
    const { deck } = this.state;
    return (
      <div className="App">
        {deck.map(card => <Card key={card.id} {...card} />)}
      </div>
    );
  }
}

export default App;
