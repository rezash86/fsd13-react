import { useState } from "react";

export default function Counter() {
  //   let count = 0; => NON-Functional implementation
  //   return (
  //     <div>
  //       <p>Count : {count}</p>
  //       <button onClick={() => count + 1}>Increase</button>
  //     </div>
  //   );

  const [count, setState] = useState(0); //useState Hook

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setState(count + 1)}>Increase</button>
    </div>
  );
}
