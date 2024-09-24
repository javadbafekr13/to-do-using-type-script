import React, { useReducer } from "react";
import counterReducer, {
  initialState,
} from "./counterReducerUsingReducerTypeScropt";
import "./csss/counters.css";
const Counter2: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div >
      <div className="counter-container thired-counter">
        <div className="bals"></div>
        <h1>Counter: {state.countForReducer}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <div className="bals2"></div>
      </div>
      <div className="counter-container forth-counter">
        <h1>Counter: {state.count2ForReducer}</h1>
        <button onClick={() => dispatch({ type: "increment2" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement2" })}>
          Decrement
        </button>
       
      </div>
    </div>
  );
};

export default Counter2;
