import Counter from "./counter.jsx";
import React, { Component } from "react";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onReset()}
          className="btn btn-primary btn-lg m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
