import React, { Component } from "react";

class Input extends Component {
  state = { term: "" };

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange} value={this.state.value} /> <br />
        Text: {this.state.term}
      </div>
    );
  }
}

export default Input;
