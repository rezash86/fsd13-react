import { useContext } from "react";
import BookShow from "./BookShow";
import { BooksContext } from "../../context/BooksContext";

export default function BookList() {
  const { books } = useContext(BooksContext);

  console.log(books);

  const renderedBooks = books.map((bk) => (
    <BookShow key={bk.id} book={bk}></BookShow>
  ));
  return <div>{renderedBooks}</div>;
}
