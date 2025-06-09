import { useState } from "react";

export default function BookCreate({ createNewBook }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewBook(title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the book title"
          style={{ marginRight: "10px" }}
        ></input>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
