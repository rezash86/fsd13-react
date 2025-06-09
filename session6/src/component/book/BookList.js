import BookShow from "./BookShow";

export default function BookList({ books, deleteBook, editBook }) {
  return (
    <div>
      {books.map((bk) => (
        <BookShow
          key={bk.id}
          book={bk}
          deleteBook={deleteBook}
          editBook={editBook}
        ></BookShow>
      ))}
    </div>
  );
}
