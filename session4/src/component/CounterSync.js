import { useState } from "react";
import IncrementButton from "./IncrementButton";

export default function CounterSync() {
  // Two buttons that increment the same shared count
  const [counter, setCounter] = useState(0);
  // one parent take control of two component

  function incrementValue() {
    setCounter((prv) => prv + 1);
  }

  return (
    <div>
      <p>shared value : {counter}</p>
      {/* <button onClick={increment}>Button 1</button>
      <button onClick={increment}>Button 2</button> */}
      <IncrementButton lable="Button 1" increment={incrementValue} />
      <IncrementButton lable="Button 2" increment={incrementValue} />
    </div>
  );
}
