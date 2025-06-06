import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //https://jsonplaceholder.typicode.com/posts
    //https://netflix-dev.server.app.9999:8990/posts

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "GET",
    //   headers: { "Content-type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData), //provide form values
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2>Submit the form to API</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "300px",
        }}
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
