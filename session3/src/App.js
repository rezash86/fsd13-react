import { useState } from "react";
export default function app() {
  return (
    <div>
      {/* <ContactForm /> */}
      <SignUpForm />
    </div>
  );
}

function ContactForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (o) => {
    o.preventDefault(); //keep the value and prevent from default behaviour
    alert("the user enter " + email);
    // alert("the user enter " + {email}); // This is Wrong
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        // onChange={(e) => setEmail(e.target.value)}
        onChange={handleEmail}
      ></input>
    </form>
  );
}

function SignUpForm() {
  // I am using a wrapper object that has control on
  //name and password
  const [form, setForm] = useState({ name: "", password: "" });

  function handleChange(e) {
    //you need to provide the NEW object
    //{ name : "x", password : "444444"}
    // keep the older changes -> spread - operator
    // keep the old values but change the key/values that needs to be changed !!!
    // let newForm = {};
    // if (e.target.name === "name") {
    //   newForm = {
    //     name: e.target.value,
    //   };
    // }
    // if (e.target.name === "password") {
    //   newForm = {
    //     password: e.target.value,
    //   };
    // }
    // setForm(newForm);
    console.log(e);
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  return (
    <form>
      <input name="name" onChange={handleChange} value={form.name}></input>
      <input
        name="password"
        type="password"
        onChange={handleChange}
        value={form.password}
      ></input>
    </form>
  );
}
