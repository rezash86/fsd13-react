import { useContext, useState } from "react";
import { BooksContext } from "../../context/BooksContext";

export default function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext) ?? {};

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
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
