import { useEffect, useState } from "react";

export default function ConditionalEffect() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  //   useEffect(() => {
  //     console.log("counter is changing");
  //   }, [counter]); based on changing the state

  useEffect(() => {
    if (counter > 5 && name === "jac") {
      console.log("that is my change !");
    }
    //adding condtion logic based on the states
  }, [counter, name]);

  return (
    <div>
      <h2>ConditionalEffect example</h2>
      <p>Counter : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
