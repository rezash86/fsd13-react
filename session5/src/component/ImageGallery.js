import { useState } from "react";

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  //we need to fill this array
  //and the goal is calling the unsplash api to use for fetching the data

  //Osb-HMD1IfrwsmGAXQO6kSMvHOmaRm23iK3fbke0JjM
  //   https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
  fetch(
    "https://api.unsplash.com/photos?client_id=Osb-HMD1IfrwsmGAXQO6kSMvHOmaRm23iK3fbke0JjM"
  )
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    })
    .then((data) => setImages(data))
    .catch((err) => console.log(err));

  return (
    <div>
      {images.map((img) => (
        <div key={img.id}>
          <img src={img.urls.small} alt={img.alt_description}></img>
        </div>
      ))}
    </div>
  );
}
