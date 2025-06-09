import { useEffect, useState } from "react";
import MountExample from "./component/MountExample";
import ConditionalEffect from "./component/ConditionalEffect";
import BookCreate from "./component/book/BookCreate";
import BookList from "./component/book/BookList";
import axios from "axios";

const API_URL = "http://localhost:3001/books"; //in a real project it would be the BE endpoint

function App() {
  // const [show, setShow] = useState(true);
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get(API_URL);
    setBooks(res.data);
  };

  async function createBook(title) {
    // I have the title of the book and with that title I want to submit it.

    //with title what can I do ?
    // axios
    const image = `https://picsum.photos/seed/${Math.floor(
      Math.random() * 1000
    )}/200/300`;
    const res = await axios.post(API_URL, { title, image });
    console.log(res);
    //I have the newly added Book
    //I need to add the newly added to the list of books
    setBooks(...books, res.data);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      {/* <button onClick={() => setShow(!show)}>
        {show ? "hide" : "show"} the example
      </button>

      {show && <MountExample />} */}
      {/* <ConditionalEffect /> */}
      <h1>Books</h1>
      {/* for providing the component think about functionlity
        1- Creating book
         ==== think about submitting data 
        ** only the title of the book

        2- List Book

        ===having fetched data from a source and populte the subcomponents
      
      
      */}
      <BookCreate createNewBook={createBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
