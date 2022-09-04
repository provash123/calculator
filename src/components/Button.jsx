import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  state = {};
  render() {
    return (
      <div className="key-pad">
        <button
          onClick={() => this.props.add_to_input(7)}
          className="btn btn-primary btn-sm m-2"
        >
          7
        </button>
        <button
          onClick={() => this.props.add_to_input(8)}
          className="btn btn-primary btn-sm m-2"
        >
          8
        </button>
        <button
          onClick={() => this.props.add_to_input(9)}
          className="btn btn-primary btn-sm m-2"
        >
          9
        </button>
        <button
          onClick={() => this.props.add_to_input("*")}
          className="btn btn-secondary btn-sm m-2"
        >
          x
        </button>

        <button
          onClick={() => this.props.add_to_input(6)}
          className="btn btn-primary btn-sm m-2"
        >
          6
        </button>
        <button
          onClick={() => this.props.add_to_input(5)}
          className="btn btn-primary btn-sm m-2"
        >
          5
        </button>
        <button
          onClick={() => this.props.add_to_input(4)}
          className="btn btn-primary btn-sm m-2"
        >
          4
        </button>
        <button
          onClick={() => this.props.add_to_input("/")}
          className="btn btn-secondary btn-sm m-2"
        >
          /
        </button>

        <button
          onClick={() => this.props.add_to_input(3)}
          className="btn btn-primary btn-sm m-2"
        >
          3
        </button>
        <button
          onClick={() => this.props.add_to_input(2)}
          className="btn btn-primary btn-sm m-2"
        >
          2
        </button>
        <button
          onClick={() => this.props.add_to_input(1)}
          className="btn btn-primary btn-sm m-2"
        >
          1
        </button>
        <button
          onClick={() => this.props.add_to_input("+")}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>

        <button
          onClick={() => this.props.add_to_input(".")}
          className="btn btn-primary btn-sm m-2"
        >
          .
        </button>
        <button
          onClick={() => this.props.add_to_input(0)}
          className="btn btn-primary btn-sm m-2"
        >
          0
        </button>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => this.props.handleEqual()}
        >
          =
        </button>
        <button
          onClick={() => this.props.add_to_input("-")}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
      </div>
    );
  }
}

export default Button;
