import Counter from "./counter.jsx";
import React from "react";

const Counters = (props) => {
  return (
    <div>
      <button
        onClick={() => props.onReset()}
        className="btn btn-primary btn-lg m-2"
      >
        Reset
      </button>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onDelete={props.onDelete}
          onLike={props.onLike}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
