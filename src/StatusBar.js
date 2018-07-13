import React, { Component } from 'react';
import './StatusBar.css';

class StatusBar extends Component {

  state = {
    time: 0,
    moves: 0
  }

  tick = () => {
    this.setState(prevState => ({ time: prevState.time + 1}));
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time, moves } = this.state;
    return (
      <div className="status-bar">
        <div className="status-bar-item">test</div>
        <div className="status-bar-item">moves: {moves}</div>
        <div className="status-bar-item">time: {time}</div>
      </div>
    );
  }
}

export default StatusBar;
