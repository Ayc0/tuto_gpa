import React, { Component } from "react";

class Counter extends Component {
  state = { counter: 0 };

  add = () => this.setState(({ counter }) => ({ counter: counter + 1 }));

  minus = () => this.setState(({ counter }) => ({ counter: counter - 1 }));

  render() {
    return (
      <div>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
        {this.state.counter}
      </div>
    );
  }
}

// setState((prevState, props) => newState)

// prevState => prevState.counter
// ({ counter }) => counter

export default Counter;
