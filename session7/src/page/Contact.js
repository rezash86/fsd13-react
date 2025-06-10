import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <label>Email : </label>
        <input readOnly value="a.b@gmail.com"></input>
      </form>

      <button onClick={() => navigate("/")}>Go to home page</button>
      <button onClick={() => navigate("/about")}>Go to About page</button>
    </div>
  );
};

export default Contact;
