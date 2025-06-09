import { useContext, useState } from "react";
import { BooksContext } from "../../context/BooksContext";

export default function BookShow({ book }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(book.title); // the initial value of new title is the old title of the props book

  const { editBook, deleteBook } = useContext(BooksContext) ?? {};

  const handleEdit = () => {
    // the id and new title needs to be passed to the parents
    editBook(book.id, newTitle);
    setEditing(false);
  };
  return (
    <div>
      <img src={book.image} alt="book cover" style={{ height: "100px" }}></img>
      {editing ? (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          ></input>
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{book.title}</h3>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => deleteBook(book.id)}>Delete</button>
    </div>
  );
}
