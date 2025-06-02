import Greeting from "./component/Greeting";

function App() {
  //JSX examples
  const name = "Elena";
  const fName = "Reza";
  const lName = "shalchian";
  const message = (
    <h1>
      Hello, {fName} {lName}
    </h1>
  );
  //We use {} to pass a dynamic value to the html elements within the JSX syntax

  // for handling multiple JSX elements
  // wrapper <div>
  // Fragment <>

  // components
  return (
    <>
      {/* <div>
        <header>{message} </header>
      </div>
      <div>{message}</div> */}
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
    </>
  );
}

export default App;
