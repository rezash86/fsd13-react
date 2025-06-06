import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // new hook-> useEffect

  // side effect -> like fetching data that cause the component re-renders multiple times and it is unexpectd
  // then we use useEffects hook to force it based on dependency
  // in this example we use [] to force the dependency as run only in mounting the component

  //this is syncronous
  //   useEffect(() => {
  //     fetch(
  //       "https://api.unsplash.com/photos?client_id=Osb-HMD1IfrwsmGAXQO6kSMvHOmaRm23iK3fbke0JjM"
  //     )
  //       .then((res) => {
  //         if (!res.ok) throw new Error("Failed to fetch data");
  //         return res.json();
  //       })
  //       .then((data) => setImages(data))
  //       .catch((err) => console.log(err));
  //   }, []);

  // will be asyncrnouns
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          "https://api.unsplash.com/photos?client_id=Osb-HMD1IfrwsmGAXQO6kSMvHOmaRm23iK3fbke0JjM"
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchImages();
  }, []);

  //we need to fill this array
  //and the goal is calling the unsplash api to use for fetching the data

  //Osb-HMD1IfrwsmGAXQO6kSMvHOmaRm23iK3fbke0JjM
  //   https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

  return (
    <div className="p-4">
      <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="border rounded shadow cursor-pointer hover:shadow-lg"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.urls.small}
              alt={img.alt_description}
              className="w-full"
            />
            <p className="p-2 text-sm">{img.alt_description || "Untitled"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
