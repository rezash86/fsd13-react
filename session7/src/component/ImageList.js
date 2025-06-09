import React from "react";
import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  if (images) {
    const renderedImages = images.map((img, index) => (
      <ImageShow key={index} image={img}></ImageShow>
    ));
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {renderedImages}
      </div>
    );
  }
  return <div>No image to show</div>;
};

export default ImageList;
