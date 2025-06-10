import React from "react";
import SearchBar from "../component/SearchBar";
import ImageList from "../component/ImageList";
import { useState } from "react";
import searchImages from "../api";

const Home = () => {
  const [resultImages, setImages] = useState([]);

  const onSubmitForm = async (term) => {
    const result = await searchImages(term);
    console.log(result);
    setImages(result);
  };
  return (
    <>
      <h2>This is the home page</h2>
      <div>
        <SearchBar onSubmit={onSubmitForm} />
        <ImageList images={resultImages} />
      </div>
    </>
  );
};

export default Home;
