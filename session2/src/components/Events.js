import { useState } from "react";
export function ClickExample() {
  function handleClick() {
    alert("clicked the button");
  }

  //there is a difference between handleClick() and handleClick
  return <button onClick={handleClick}>Click me</button>;
}

export function InputExample() {
  // 1- I am typing so I need to handle the typing(event)
  // 2- You need to keep whatever you are typing
  // 3- using useState to handle the state
  //   let text = ""; wrong
  const [text, setText] = useState("");

  function handleChage(e) {
    //need to take whatever you are typing
    // text = e.target.value; // WRONG !!! never change the value of state directly
    // console.log(text);
    setText(e.target.value);
  }

  return (
    <>
      <input type="text" onChange={handleChage}></input>
      <p>You typed : {text}</p>
    </>
  );
}
