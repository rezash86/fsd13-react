//please provide your first name and last name

function Greeting() {
  const age = 10; // number
  const fName = "reza"; //string
  const lName = "shalchian";
  const isStudent = true; //boolean
  //expressions in JSX
  const a = 5;
  const b = 10;
  const user = { username: "elena", city: "Montreal" };
  const value = [10, 20, 30];
  //Template String -> `` backtick

  // I would like to call a method in Math to create a random number
  // if the number is more than 0.5 then in the <p> show you are lucky.
  //otherwise show you are not
  let message = "you are not lucky";
  let config = { color: "red", border: "10px solid blue" };

  if (Math.random() > 0.5) {
    message = "you are lucky";
    config = { color: "red", border: "10px solid green" };
  }

  return (
    <div>
      <h1>Hello World !!</h1>
      <h2>name : {fName}</h2>
      <h2>Age : {age}</h2>
      <h2>Student : {isStudent ? "Yes" : "No"}</h2>
      <h3>Sum : {a + b}</h3>
      <h3>Minus : {a - b}</h3>
      <h3>Multiply : {a * b}</h3>
      <h2>{/* {fName} {"  "} {lName} */}</h2>
      <h2>{`Hello, ${fName} \u00A0\u00A0\u00A0\u00A0 ${lName}`}</h2>
      <p>
        {user.username} lives in {user.city}
        {JSON.stringify(user)}
      </p>
      <p>
        {message} {new Date().toLocaleTimeString()}{" "}
      </p>
      <p>{value}</p>
      <input
        id="number-input"
        type="number"
        minLength={4}
        style={config}
      ></input>
    </div>
  );
}

export default Greeting;
