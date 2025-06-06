import { useState } from "react";

function DummyApi() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [validationErrors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...validationErrors, [e.target.name]: "" }); //will remove the errors in Errors
  };

  //custom validation
  //you check if you have empty space
  function validateForm() {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is Required";
    }
    //REGEX check
    if (!formData.email.trim()) {
      newErrors.email = "Email is Required";
    }

    //more logic to control the sql injection

    return newErrors;
  }

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

    //before calling the api
    //I will add some validation
    const newErrors = validateForm();
    //if it is not empty => setErrors to show the messages
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // it doesn't call the api
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        // Authorization: "Client-ID Osb-HMD1IfrwsmGAXQO6kSMvHOmaRm23iK3fbke0JjM",
      },
      body: JSON.stringify(formData), //provide form values
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData({ name: "", email: "" });
        setErrors({});
      })
      .catch((error) => {
        console.log(error);
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
          required
          value={formData.name}
          onChange={handleChange}
        ></input>
        {validationErrors.name && (
          <span style={{ color: "red" }}>{validationErrors.name}</span>
        )}
        <input
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        ></input>
        {validationErrors.email && (
          <span style={{ color: "red" }}>{validationErrors.email}</span>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DummyApi;
