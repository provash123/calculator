import React, { Component } from "react";
import Button from "./components/Button";
import * as math from "mathjs";
import Inputs from "./components/input";
import "./App.css";

class App extends Component {
  state = {
    input: "",
  };

  add_to_input = (val) => {
    this.setState({ input: this.state.input + val });
  };
  handleReset = () => {
    const input = this.state.input;
    this.setState({ input: "" });

    console.log(input);
  };
  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };
  handleClear = () => {
    let state = this.state.input;
    let string_number = state.toString();
    let sliced_number_string = string_number.slice(0, -1);
    // let res = Number(sliced_number_string)
    this.setState({ input: sliced_number_string });
    // console.log('res',res)
    // this.setState({input:this.state.input.length.slice})
  };

  render() {
    return (
      <div className="App">
        <span className="input-fild">{this.state.input}</span>
        <Inputs handleClear={this.handleClear} handleReset={this.handleReset} />

        <Button
          add_to_input={this.add_to_input}
          handleEqual={this.handleEqual}
        />
      </div>
    );
  }
}

export default App;
