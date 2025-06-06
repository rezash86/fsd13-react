export default function Modal({ image, onClose }) {
  if (!image) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-4 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={image.urls.small}
          alt={image.alt_description}
          className="w-full rounded mb-4"
        />
        <p>
          <strong>Description:</strong>{" "}
          {image.alt_description || "No description available"}
        </p>
        <p>
          <strong>Photographer:</strong> {image.user.name}
        </p>
        <p>
          <strong>Location:</strong> {image.location?.name || "Unknown"}
        </p>
      </div>
    </div>
  );
}
