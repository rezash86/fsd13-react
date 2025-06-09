import { useContext, useEffect, useState } from "react";
import MountExample from "./component/MountExample";
import ConditionalEffect from "./component/ConditionalEffect";
import BookCreate from "./component/book/BookCreate";
import BookList from "./component/book/BookList";
import { BooksContext } from "./context/BooksContext";

function App() {
  // const [show, setShow] = useState(true);

  const { fetchBooks } = useContext(BooksContext) ?? {};

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
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
