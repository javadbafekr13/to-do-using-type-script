import React, { useState } from "react";
import { add } from "./counterSampleUsingTs";
import { dec } from "./counterSampleUsingTs";
import "./csss/counters.css";
import { decresmentTS, incresmentTs } from "./counterSampleUsingTs";
const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [count2, setcount2] = useState<number>(0);
  const [firstnumber, setfirstnumber] = useState<number>();
  const [secondnumber, setsecondnumber] = useState<number>();
  const [resultOfMath, setresultOfMath] = useState<number>();
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const incresment = () => setcount2((percount) => incresmentTs(percount));
  const decresment = () => setcount2((percount) => decresmentTS(percount));
  const sume = () => {
    setresultOfMath(add(Number(firstnumber), Number(secondnumber)));
    setfirstnumber(0);
    setsecondnumber(0);

  };
  const sube = () =>
    {setresultOfMath(dec(Number(firstnumber), Number(secondnumber)));
      setfirstnumber(0);setsecondnumber(0);
    }
  const sum = add(1, 2);
  const sub = dec(1, 4);
  const d = decresmentTS(count);
  const b = incresmentTs(count);
  return (
    <div>
      <div className="counter-container first-counter">
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <div className="counter-results">The sum is {sum}</div>
        <div className="counter-results">the sub is {sub}</div>
        <div className="counter-results">the uppdated sub is {d}</div>
        <div className="counter-results">the uppdated sum is {b}</div>
      </div>
      <div className="counter-container second-counter">
        <h1>Counter: {count2}</h1>
        <button onClick={incresment}>Increment</button>
        <button onClick={decresment}>Decrement</button>
      </div>

      <div className="mathContainer">
        <input
        className="mathContainerInputs"
          value={firstnumber}
          type="number"
          onChange={(e) => {
            setfirstnumber(Number(e.target.value));
          }}
        ></input>

        <input
        className="mathContainerInputs"
          value={secondnumber}
          type="number"
          onChange={(e) => {
            setsecondnumber(Number(e.target.value));
          }}
        ></input>
        <div>
          <p>result=</p>
          <p>{resultOfMath}</p>
        </div>

        <div className="mathActions">
          <button className="mathsub" onClick={() => sube()}>-</button>
          <button className="mathsub" onClick={() => sume()}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
