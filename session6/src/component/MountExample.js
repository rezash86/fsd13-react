import { useEffect, useState } from "react";

export default function MountExample() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
    const timer = setInterval(() => {
      console.log("timer ticking...");
    }, 1000);
    return () => {
      //clean up code
      clearInterval(timer);
      console.log("Component unmounted");
    };
  }, []); // one time on the first time render

  return (
    <div>
      <h2>Mount example</h2>
      <p>Counter : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}
