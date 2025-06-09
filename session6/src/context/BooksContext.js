import { createContext, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/books"; //in a real project it would be the BE endpoint

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get(API_URL);
    setBooks(res.data);
  };
  const deleteBook = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    // we will use filter function in the array
    setBooks(books.filter((book) => book.id !== id));
  };
  const editBook = async (id, newTitle) => {
    const orig = books.find((book) => book.id === id);
    const res = await axios.put(`${API_URL}/${id}`, {
      ...orig,
      title: newTitle,
    });
    setBooks(books.map((bk) => (bk.id === id ? res.data : bk)));
  };
  const createBook = async (title) => {
    // I have the title of the book and with that title I want to submit it.

    //with title what can I do ?
    // axios
    const image = `https://picsum.photos/seed/${Math.floor(
      Math.random() * 1000
    )}/200/300`;
    const res = await axios.post(API_URL, { title, image });

    //I have the newly added Book
    //I need to add the newly added to the list of books
    setBooks([...books, res.data]);
  };

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, deleteBook, editBook, createBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
