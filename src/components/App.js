import React, { Component } from "react";

class App extends Component {
  state = {
    deck: []
  };
  render() {
    const { deck } = this.state;
    return <div>app {deck}</div>;
  }
}

export default App;
