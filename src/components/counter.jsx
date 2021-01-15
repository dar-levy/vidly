import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
