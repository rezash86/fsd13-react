import { useState } from "react";

function DummyApi() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
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
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
        setErrors();
      });
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
          // required={true}
          value={formData.name}
          onChange={handleChange}
        ></input>
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        <input
          name="email"
          // required={true}
          value={formData.email}
          onChange={handleChange}
        ></input>
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DummyApi;
