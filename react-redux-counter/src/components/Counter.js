import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../redux/actions/counter";
import { selectors } from "../redux/selectors/counter";

export default function Counter() {
  const counter = useSelector(selectors.getCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(actions.increment());
  const handleDecrement = () => dispatch(actions.decrement());
  return (
    <>
      <h1>Counter: {counter}</h1>
      <ul>
        <li>
          <button onClick={() => handleIncrement()}>Increment</button>
        </li>
        <li>
          <button onClick={() => handleDecrement()}>Decrement</button>
        </li>
      </ul>
    </>
  );
}
