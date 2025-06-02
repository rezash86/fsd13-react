import Welcome from "./component/Component1";
import { Header, Footer as FooterLayout } from "./component/Layout";
import Greeting from "./component/Greeting";
import Info, { Button } from "./component/UI";

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
      <Welcome />
      <Header />
      <FooterLayout />
      <Info />
      <Button />

      {/* <Greeting2 /> */}
    </>
  );
}

function Greeting2() {
  return <div>Hello World 2 !!</div>;
}

export default App;
