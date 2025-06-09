import { useState } from "react";
import MountExample from "./component/MountExample";
import ConditionalEffect from "./component/ConditionalEffect";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {/* <button onClick={() => setShow(!show)}>
        {show ? "hide" : "show"} the example
      </button>

      {show && <MountExample />} */}
      <ConditionalEffect />
    </div>
  );
}

export default App;
