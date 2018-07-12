import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  state = {
    deck: [],
    title: 'solitaire',
  }

  generateDeck = () => {
    // ranks: 1,2,3,4,5,6,7,8,9,J,Q,K
    // suits: spades, clubs, hearts, diamonds
    let deck = [];
    for (let i = 0; i < 52; i++) {

    }
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.title}</p>
        <Card rank={8} suit="c" />
        <Card rank={2} suit="d" />
        <Card rank={1} suit="h" />
        <Card rank={10} suit="s" />
      </div>
    );
  }
}

export default App;
