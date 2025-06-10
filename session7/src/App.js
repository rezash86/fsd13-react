import { Link, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";

function App() {
  return (
    <div>
      <nav style={{ margin: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>|{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
