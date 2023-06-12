import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CounterState,
  decrement,
  increment,
} from "../../actions/counter-action";

const CounterDemo = () => {
  const counter = useSelector((state: CounterState) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Counter Demo</h1>
        <hr />

        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="btn btn-primary"
        >
          -
        </button>
        <span>{counter}</span>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="btn btn-primary"
        >
          +
        </button>
      </div>
    </>
  );
};
export default CounterDemo;
