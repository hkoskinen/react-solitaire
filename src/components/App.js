import React, { Component } from "react";
import Card from "./Card";

class App extends Component {
  state = {
    deck: []
  };
  render() {
    const { deck } = this.state;
    return (
      <div>
        app {deck}
        <Card />
      </div>
    );
  }
}

export default App;
