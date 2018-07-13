import React, { Component } from 'react';
import Card from './Card';
import StatusBar from './StatusBar';

class App extends Component {
  state = {
    deck: []
  }

  componentDidMount = () => {
    this.generateDeck();
  }

  generateDeck = () => {
    const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const suits = ['s', 'h', 'c', 'd'];

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
    this.setState({deck: this.shuffleDeck(deck)})
  }

  shuffleDeck = unshuffledDeck => {
    // primitive way to shuffle the deck
    const deck = unshuffledDeck;
    for (let i = 0; i < deck.length; i++) {
      const temp = deck[i];
      const randIndex = Math.floor(Math.random() * deck.length);
      deck[i] = deck[randIndex]
      deck[randIndex] = temp;
    }
    return deck;
  }

  render() {
    const { deck } = this.state;
    return (
      <div className="App">
        {deck.map(card => <Card key={card.id} {...card} />)}
        <StatusBar />
        </div>
    );
  }
}

export default App;
