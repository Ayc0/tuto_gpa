import React, { Component } from "react";

class Timer extends Component {
  state = { timer: 0 };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState(({ timer }) => ({ timer: timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  timerID = null;

  render() {
    return <div>{this.state.timer}</div>;
  }
}

export default Timer;
