import React, { Component } from "react";
class Inputs extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          onClick={this.props.handleReset}
          className="btn btn-warning btn-sm m-2"
        >
          Reset
        </button>

        <button
          className="btn btn-warning btn-sm m-2"
          onClick={() => this.props.handleClear()}
        >
          C
        </button>
      </div>
    );
  }
}

export default Inputs;
