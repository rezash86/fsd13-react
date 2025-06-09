import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  return (
    <div className="border border-grey-300 rounded px-4 py-2 flex flex-col">
      <form onSubmit={handleFormSubmit}>
        <label>Entor your search Term:</label>
        <input required value={term} onChange={handleChange}></input>
      </form>
    </div>
  );
};

export default SearchBar;
